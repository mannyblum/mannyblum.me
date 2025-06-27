import { CollisionPriority } from '@dnd-kit/abstract';
import { UniqueIdentifier } from '@dnd-kit/core';
// import { DragOverlay } from '@dnd-kit/core';
import { move } from '@dnd-kit/helpers';
import {
  DragDropProvider,
  DragOverlay,
  useDragDropMonitor,
  useDroppable,
} from '@dnd-kit/react';
import { useSortable } from '@dnd-kit/react/sortable';
import React, { useState } from 'react';

// import { Column } from './Column.js';
// import { Item } from './Item.js';
import './index.css';

function Column({ children, id }: { children: React.ReactNode; id: string }) {
  const { isDropTarget, ref, droppable } = useDroppable({
    id,
    type: 'column',
    accept: 'item',
    collisionPriority: CollisionPriority.Low,
  });
  const style = isDropTarget ? { background: '#00000030' } : undefined;

  // console.log('droppable', droppable);

  return (
    <div className="Column" ref={ref} style={style}>
      {children}
    </div>
  );
}

function Item({
  id,
  index,
  column,
  className,
}: {
  id: string;
  index: number;
  column: string;
  className?: string;
}) {
  const targetRef = React.useRef<HTMLButtonElement>(null);

  const { ref, isDragging, isDropTarget } = useSortable({
    id,
    index: index,
    type: 'item',
    accept: 'item',
    group: column,
    feedback: 'clone',
    target: targetRef,
  });

  // console.log('isDropTarget', isDr  opTarget);

  return (
    <>
      <button
        className={`Item ${className ? className : ''} ${isDropTarget ? 'bg-black' : ''}`}
        ref={ref}
        data-dragging={isDragging}
      >
        {id}
      </button>
      {/* {isDragging ? <button className={`Item opacity-50`}>{id}</button> : null} */}
    </>
  );
}

export function DnDKit() {
  const [items, setItems] = useState({
    A: ['A0', 'A1', 'A2'],
    B: ['B0', 'B1'],
    C: [],
  });

  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  useDragDropMonitor({
    onDragOver(event, manager) {
      console.log('Over droppable:', event.operation.target);
      console.log('Over droppable manager:', manager);
    },
  });

  return (
    <DragDropProvider
      onDragOver={(event) => {
        setItems((items) => move(items, event));
      }}
      onDragStart={({ operation }) => {
        console.log('Started dragging', operation.source?.id);
        setActiveId(operation.source?.id || null);
      }}
    >
      <div className="Root">
        {Object.entries(items).map(([column, items]) => (
          <Column key={column} id={column}>
            {items.map((id, index) => (
              <>
                <Item key={id} id={id} index={index} column={column} />
              </>
            ))}
          </Column>
        ))}
      </div>
      {/* <DragOverlay>
        {activeId ? (
          <Item
            id={activeId as string}
            index={-1}
            column="overlay"
            className="opacity-50"
          />
        ) : null}
      </DragOverlay> */}
    </DragDropProvider>
  );
}
