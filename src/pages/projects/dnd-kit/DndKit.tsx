import {
  CollisionDetection,
  DndContext,
  KeyboardSensor,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  UniqueIdentifier,
  closestCenter,
  pointerWithin,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { useCallback, useRef, useState } from 'react';
import { unstable_batchedUpdates } from 'react-dom';

import Column from './Column';
import Item from './Item';
import './index.css';

const PLACEHOLDER_ID = 'placeholder';
export const TRASH_ID = 'void';

type Items = Record<UniqueIdentifier, UniqueIdentifier[]>;

export default function DnDKit() {
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [clonedItems, setClonedItems] = useState<Items | null>(null);
  const lastOverId = useRef<UniqueIdentifier | null>(null);

  const recentlyMovedToNewContainer = useRef(false);

  const [items, setItems] = useState<Items>({
    A: ['A0', 'A1', 'A2'],
    B: ['B0', 'B1'],
    C: [],
  });

  const findContainer = (id: UniqueIdentifier) => {
    if (id in items) {
      return id;
    }

    return Object.keys(items).find((key) => items[key].includes(id));
  };

  const [containers, setContainers] = useState(
    Object.keys(items) as UniqueIdentifier[],
  );

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor),
  );

  function getNextContainerId() {
    const containerIds = Object.keys(items);
    const lastContainerId = containerIds[containerIds.length - 1];

    return String.fromCharCode(lastContainerId.charCodeAt(0) + 1);
  }

  return (
    <DndContext
      sensors={sensors}
      onDragStart={({ active }) => {
        setActiveId(active.id);
        setClonedItems(items);
      }}
      collisionDetection={pointerWithin}
      // collisionDetection={closestCenter}
      onDragOver={({ active, over }) => {
        // get the container that the active items is hovering over
        const overId = over?.id;

        // If the overId is null, TRASH_ID, or the active item is already in the items,
        // we don't need to do anything.
        // This prevents unnecessary updates and avoids errors.
        if (overId == null || overId === TRASH_ID || active.id in items) {
          return;
        }

        // find the container the item is over
        const overContainer = findContainer(overId);
        // find the container the item came from
        const activeContainer = findContainer(active.id);

        // If either the overContainer or activeContainer is null, we don't need to do anything.
        // This prevents errors when the item is not in any container.
        if (!overContainer || !activeContainer) {
          return;
        }

        // if activeContainer is not the same as overContainer,
        // we need to move the item to the new container
        if (activeContainer !== overContainer) {
          setItems((items) => {
            // check the containers and save the results
            const activeItems = items[activeContainer];
            const overItems = items[overContainer];
            const overIndex = overItems.indexOf(overId);
            const activeIndex = activeItems.indexOf(active.id);

            let newIndex: number;

            // explaination:
            // if the overId is in items, it means that the item is being moved to
            // a new container that already has items.
            // In this case, we need to insert the item at the end of the overItems
            // If the overId is not in items, it means that the item is being moved
            // to a new container that is empty or has no items.
            // In this case, we need to insert the item at the end of the overItems
            if (overId in items) {
              newIndex = overItems.length + 1;
            } else {
              const isBelowOverItem =
                over &&
                active.rect.current.translated &&
                active.rect.current.translated.top >
                  over.rect.top + over.rect.height;

              const modifier = isBelowOverItem ? 1 : 0;

              newIndex =
                overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
            }

            recentlyMovedToNewContainer.current = true;

            return {
              ...items,
              [activeContainer]: items[activeContainer].filter(
                (item) => item !== active.id,
              ),
              [overContainer]: [
                ...items[overContainer].slice(0, newIndex),
                items[activeContainer][activeIndex],
                ...items[overContainer].slice(
                  newIndex,
                  items[overContainer].length,
                ),
              ],
            };
          });
        }
      }}
      onDragEnd={({ active, over }) => {
        if (active.id in items && over?.id) {
          setContainers((containers) => {
            const activeIndex = containers.indexOf(active.id);
            const overIndex = containers.indexOf(over.id);

            return arrayMove(containers, activeIndex, overIndex);
          });
        }

        const activeContainer = findContainer(active.id);

        if (!activeContainer) {
          setActiveId(null);
          return;
        }

        const overId = over?.id;

        if (overId == null) {
          setActiveId(null);
          return;
        }

        if (overId === TRASH_ID) {
          setItems((items) => ({
            ...items,
            [activeContainer]: items[activeContainer].filter(
              (id) => id !== activeId,
            ),
          }));
          setActiveId(null);
          return;
        }

        if (overId === PLACEHOLDER_ID) {
          const newContainerId = getNextContainerId();

          unstable_batchedUpdates(() => {
            setContainers((containers) => [...containers, newContainerId]);
            setItems((items) => ({
              ...items,
              [activeContainer]: items[activeContainer].filter(
                (id) => id !== activeId,
              ),
              [newContainerId]: [active.id],
            }));
            setActiveId(null);
          });
          return;
        }

        const overContainer = findContainer(overId);

        if (overContainer) {
          const activeIndex = items[activeContainer].indexOf(active.id);
          const overIndex = items[overContainer].indexOf(overId);

          if (activeIndex !== overIndex) {
            setItems((items) => ({
              ...items,
              [overContainer]: arrayMove(
                items[overContainer],
                activeIndex,
                overIndex,
              ),
            }));
          }
        }

        setActiveId(null);
      }}
    >
      <div className="Root">
        <SortableContext items={[...containers, PLACEHOLDER_ID]}>
          {containers.map((containerId) => (
            <Column
              key={containerId}
              id={containerId}
              items={items[containerId]}
            >
              <SortableContext items={items[containerId]}>
                {items[containerId].map((value, index) => {
                  return (
                    <Item
                      key={value}
                      id={value}
                      index={index}
                      column={containerId as string}
                    />
                  );
                })}
              </SortableContext>
            </Column>
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );
}
