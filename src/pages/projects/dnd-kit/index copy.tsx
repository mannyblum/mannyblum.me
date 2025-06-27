import {
  DndContext,
  DragEndEvent,
  closestCenter,
  useDraggable,
  useDroppable,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS as DndKitCSS } from '@dnd-kit/utilities';
import { useState } from 'react';

/*

function DraggableLI(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'draggable',
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    // <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
    //   {props.children}
    // </button>
    <li
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="cursor-pointer border-2 border-black px-4 py-2 rounded mb-2"
    >
      List A - 1
    </li>
  );
}

function DroppableArea(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };

  return (
    <ul
      ref={setNodeRe}
      style={style}
      className="w-[200px] mr-4 border-2 border-black p-2 rounded"
    >
      {props.children}
    </ul>
  );
}
*/
function SortableLI({ name, id }: { name: string; id: string }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: DndKitCSS.Transform.toString(transform),
    transition,
    padding: '8px 12px',
    margin: '4px 0',
    border: '1px solid #ccc',
    backgroundColor: 'white',
    borderRadius: 4,
    cursor: 'grab',
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="cursor-pointer border-2 border-black px-4 py-2 rounded mb-2"
    >
      {name} - {id}
    </li>
  );
}

const DndKitPage = () => {
  // const [isDropped, setIsDropped] = useState(false);
  // const draggableMarkup = <Draggable>Drag me</Draggable>;

  const [listA, setListA] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
  ]);
  const [listB, setListB] = useState<string[]>([]);

  const findContainer = (id: string): 'listA' | 'listB' | null => {
    if (listA.includes(id)) return 'listA';
    if (listB.includes(id)) return 'listB';
    return null;
  };
  function handleDragEnd(event: DragEndEvent) {
    // if (event.over && event.over.id === 'droppable') {
    //   setIsDropped(true);
    // }

    const { active, over } = event;

    if (!over) return;

    const activeContainer = findContainer(active.id.toString());
    const overContainer = findContainer(over.id.toString());

    if (!activeContainer || !overContainer) return;

    if (activeContainer === overContainer) {
      const list = activeContainer === 'listA' ? listA : listB;
      const setList = activeContainer === 'listA' ? setListA : setListB;

      const oldIndex = list.indexOf(active.id.toString());
      const newIndex = list.indexOf(over.id.toString());

      if (oldIndex !== newIndex) {
        setList(arrayMove(list, oldIndex, newIndex));
      }
    } else {
      // Move between lists
      const fromList = activeContainer === 'listA' ? listA : listB;
      const toList = overContainer === 'listA' ? listA : listB;
      const setFromList = activeContainer === 'listA' ? setListA : setListB;
      const setToList = overContainer === 'listA' ? setListA : setListB;

      setFromList(fromList.filter((item) => item !== active.id));
      const index = toList.indexOf(over.id.toString());
      const newList = [...toList];
      newList.splice(
        index >= 0 ? index : toList.length,
        0,
        active.id.toString(),
      );
      setToList(newList);
    }
  }

  return (
    <div>
      <div className="relative my-4">
        <h2 className="text-4xl font-black mb-4 relative inline-block">
          <span className="relative z-10 uppercase">dnd-kit</span>
          <div className="absolute -bottom-1 left-0 w-full h-3 bg-green-400 -rotate-1 z-0"></div>
        </h2>
        <p className="absolute uppercase text-white font-black bg-red-400 text-[16px]! -top-0.5 -right-0.5 py-1.5 px-4 border-2 border-black rotate-3">
          App
        </p>
      </div>

      <div>
        <p className="text-xl max-w-2xl mt-6 mb-8!">blah blah blah</p>
      </div>
      <div className="border-5 border-black mb-8 h-[500px] min-h-[300px] flex grow justify-center items-center">
        <div className="bg-white w-full h-full flex justify-center items-center">
          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <div style={{ display: 'flex', gap: 16 }}>
              <SortableContext
                items={listA}
                strategy={verticalListSortingStrategy}
              >
                <ul className="w-[200px] mr-4 border-2 border-black p-2 rounded">
                  {listA.map((item) => (
                    <SortableLI key={item} name={'List A'} id={item} />
                  ))}
                </ul>
              </SortableContext>
              <SortableContext
                items={listB}
                strategy={verticalListSortingStrategy}
              >
                <ul className="w-[200px] mr-4 border-2 border-black p-2 rounded">
                  {listB.map((item) => (
                    <SortableLI key={item} name={'List B'} id={item} />
                  ))}
                </ul>
              </SortableContext>
            </div>
          </DndContext>
          {/* <DndContext onDragEnd={handleDragEnd}>
            {!isDropped ? draggableMarkup : null}
            <Droppable>{isDropped ? draggableMarkup : 'Drop here'}</Droppable>
          </DndContext> */}
          {/* <DndContext onDragEnd={handleDragEnd}>
            <ul className="w-[200px] mr-4 border-2 border-black p-2 rounded">
              <DraggableLI />
            </ul>
            <DroppableArea>
              {isDropped ? <DraggableLI /> : 'Drop here'}
            </DroppableArea>
          </DndContext> */}
          {/* <ul className="w-[200px] mr-4 border-2 border-black p-2 rounded">
            <li className="cursor-pointer border-2 border-black px-4 py-2 rounded mb-2">
              List A - 1
            </li>
            <li className="cursor-pointer border-2 border-black px-4 py-2 rounded mb-2">
              List A - 2
            </li>
            <li className="cursor-pointer border-2 border-black px-4 py-2 rounded mb-2">
              List A - 3
            </li>
            <li className="cursor-pointer border-2 border-black px-4 py-2 rounded mb-2">
              List A - 4
            </li>
          </ul>
          <ul className="w-[200px]">
            <li className="cursor-pointer border-2 border-black px-4 py-2 rounded mb-2">
              List B - 1
            </li>
            <li className="cursor-pointer border-2 border-black px-4 py-2 rounded mb-2">
              List B - 2
            </li>
            <li className="cursor-pointer border-2 border-black px-4 py-2 rounded mb-2">
              List B - 3
            </li>
            <li className="cursor-pointer border-2 border-black px-4 py-2 rounded mb-2">
              List B - 4
            </li>
          </ul> */}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-black mb-8 relative inline-block">
          <span className="relative z-10 uppercase">Tech Stack</span>
          <div className="absolute -bottom-0 left-0 w-full h-2 bg-purple-400 -rotate-1 z-0"></div>
        </h3>
        <ul className="flex flex-row justify-start items-center mb-8 gap-4">
          <li className="px-2 py-1 bg-green-400">React</li>
        </ul>
      </div>
      <hr className="border-2 mb-8 border-black" />
      <div>
        <h4>About this project</h4>
      </div>
      <hr className="border-2 my-8 border-black" />
    </div>
  );
};

export default DndKitPage;
