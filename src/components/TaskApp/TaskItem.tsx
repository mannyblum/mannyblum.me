import type { Task } from '@/types/Task';
import {
  CheckIcon,
  PencilIcon,
  TrashIcon,
  XIcon,
} from '@primer/octicons-react';
import { useEffect, useRef, useState } from 'react';

type TodoItemProps = {
  task: Task;
  onUpdateTask: (task: Task) => void;
  onDeleteTask: (taskId: string) => Promise<boolean>;
  onEditTask: (task: Task) => void;
};

const TaskItem = ({
  task,
  onUpdateTask,
  onDeleteTask,
  onEditTask,
}: TodoItemProps) => {
  const [deleteMode, setDeleteMode] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const [isDeleting, setDeleting] = useState<boolean>(false);

  useEffect(() => {
    setChecked(task.completed);
  }, [task]);

  const liElementRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    // const element = liElementRef.current;
    // if (element) {
    //   const handleTransitionEnd = (e: TransitionEvent) => {
    //     console.log('Transition finished!', element);
    //     console.log('transitionEvent name', e.propertyName);
    //   };

    //   element.addEventListener('transitionend', handleTransitionEnd);

    //   return () => {
    //     element.removeEventListener('transitionend', handleTransitionEnd);
    //   };

    // }
    const element = liElementRef.current;
    if (!element) return;

    const propertiesToWatch = new Set(['opacity', 'translate', 'max-height']);
    const completedProperties = new Set<string>();

    const handleTransitionEnd = (event: TransitionEvent) => {
      if (propertiesToWatch.has(event.propertyName)) {
        completedProperties.add(event.propertyName);

        if (completedProperties.size === propertiesToWatch.size) {
          console.log('all transitions completed!');
          onDeleteTask(task.id);
          // Trigger your logic here (e.g., set state, remove DOM node, etc.)
        }
      }
    };

    element.addEventListener('transitionend', handleTransitionEnd);
    return () => {
      element.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, []);

  const toggleDeleteTask = () => {
    setDeleteMode((prevState) => !prevState);
  };

  const handleConfirmDelete = async () => {
    setDeleting(true);
    // await onDeleteTask(task.id);

    // onDeleteTask(task.id).then((response) => {
    //   console.log('response', response);

    //   if (response) {
    //     setDeleting(true);

    //     setTimeout(() => {
    //       console.log('wait 1 second');
    //       setDeleteMode(false);
    //     }, 1000);
    //   }
    // });

    // console.log('delete task', deleteTask);
    // setDeleteMode(false);
  };

  const handleEdit = () => {
    onEditTask(task);
  };

  const handleToggleCheck = () => {
    setChecked((prevState) => !prevState);

    onUpdateTask({
      ...task,
      ...{ completed: !task.completed, updated: Date.now() },
    });
  };

  return (
    <li
      ref={liElementRef}
      key={task.id}
      // className={`relative
      //   text-black border-b-2 border-b-black last:border-b-0 p-2
      //   transition-all duration-300 ease-out
      //   ${task.completed ? 'opacity-50 bg-zinc-200 ' : ''}
      //     ${deleted ? 'h-0 opacity-0 hidden' : 'flex justify-between items-center'}
      // `}
      className={`relative
        text-black border-b-2 border-b-black last:border-b-0 p-2 
        ${task.completed ? 'opacity-50 bg-zinc-200 ' : ''}
        transition-all duration-500 ease-out overflow-hidden
        ${
          isDeleting
            ? 'max-h-0 opacity-0 -translate-y-2'
            : 'flex justify-between items-center max-h-40 translate-y-0'
        }
      `}
    >
      <div
        className={`transition-all duration-300 ease-out 
          ${!deleteMode ? 'right-[200%] -left-[100%]' : 'right-0 left-0'}
        absolute top-0 bottom-0   bg-red-300
        overflow-hidden w-full
        `}
      >
        <div className="h-full flex justify-between items-center">
          <p className="text-white ml-2 mb-0! font-bold">Delete for sure?</p>
          <div className="">
            <button
              onClick={toggleDeleteTask}
              className="border-2 border-black p-1 rounded-md mr-2
                shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-0.5 font-black text-black text-sm bg-white focus:outline-none bg-none  hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirmDelete}
              className="border-2 border-black p-1 rounded-md mr-2 text-sm"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="grow-4">
        {!deleteMode && (
          <div className="mr-4 flex items-center">
            <div className="flex items-center cursor-pointer mr-4">
              <input
                type="checkbox"
                className="appearance-none cursor-pointer checked:shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] checked:bg-green-400 w-5 h-5 rounded-full border-2 border-black bg-white"
                onChange={handleToggleCheck}
                checked={checked}
              />
              {checked && (
                <CheckIcon
                  className="absolute w-3 h-3 mx-1 pointer-events-none"
                  size={16}
                />
              )}
            </div>
            {task.details}
          </div>
        )}
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();

          handleEdit();
        }}
        disabled={deleteMode || task.completed}
        className={`disabled:bg-gray-50 border-black hover:border-black! disabled:text-gray-500 disabled:cursor-not-allowed! border-2 mr-2 rounded-sm p-2 hover:bg-indigo-400 active:bg-indigo-600 hover:text-white shadow-[2px_2px_0px_rgba(0,0,0,1)]`}
      >
        <PencilIcon size={24} />
      </button>
      <button
        disabled={task.completed}
        onClick={toggleDeleteTask}
        className={`disabled:bg-gray-50 border-black hover:border-black! disabled:text-gray-500 disabled:cursor-not-allowed! border-2 rounded-sm p-2 text-white bg-red-600 hover:bg-red-800 active:bg-red-400 hover:text-white shadow-[2px_2px_0px_rgba(0,0,0,1)]`}
      >
        {deleteMode ? <XIcon size={24} /> : <TrashIcon size={24} />}
      </button>
    </li>
  );
};

export default TaskItem;
