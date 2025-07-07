import TaskApp from '@/components/TaskApp/TaskApp';

const TaskAppPage = () => {
  // TODO Task Management
  //  [x] Add a new Task
  //  [x] Edit an existing task
  //  [x] Delete a task
  //  [x] Mark a task as complete/incomplete
  //  [x] View all tasks

  // TODO:  Category Support
  //  [x] Add a new category
  //  [x] Assign a task to a category
  //  [x] Filter tasks by category

  // TODO: Basic State Management
  //  [x] Use React state (useState, useReducer, or Context) to manage tasks and categories

  // TODO: UI/UX Essentials
  //  [ ] Clear, responsive layout using CSS or a CSS framework (like Tailwind or Material UI)
  //  [ ] Basic styling with status indicators (e.g. strikethrough completed tasks)

  // TODO: Task Filtering and Sorting
  //  [x] Filter tasks: All / Active / Completed
  //  [ ] Sort tasks by due date, category, or priority (if implemented)
  //  [ ] Search tasks by name

  // TODO: Persistence
  //  [x] Save tasks and categories in localStorage so they persist on refresh
  //  [ ] Option to clear all tasks

  // TODO: Due Dates & Priorities
  //  [ ] Assign a due date to each task
  //  [ ] Set a priority level (e.g. Low, Medium, High)
  //  [ ] Highlight overdue tasks visually

  return (
    <div>
      <div className="relative my-4">
        <h2 className="text-4xl font-black mb-4 relative inline-block">
          <span className="relative z-10 uppercase">Simple Task App</span>
          <div className="absolute -bottom-1 left-0 w-full h-3 bg-green-400 -rotate-1 z-0"></div>
        </h2>
        <p className="absolute z-10 uppercase text-white font-black bg-red-400 sm:-top-5 sm:-right-3 text-[16px]! -top-0.5 -right-0.5 py-1.5 px-4 border-2 border-black rotate-3">
          App
        </p>
      </div>

      <div>
        <p className="text-xl max-w-2xl mt-6 mb-8!">
          This is just a simple Task App. I wanted to make one so that I could
          play with some design idea that popped in my head. I leveraged
          TailwindCSS for the styling and subtle CSS animations. Using
          localStorage to save data.
        </p>
      </div>
      <div className="border-5 border-black mb-8 h-[500px] min-h-[300px] flex grow justify-center items-center">
        <TaskApp />
      </div>

      <div>
        <h3 className="text-2xl font-black mb-8 relative inline-block">
          <span className="relative z-10 uppercase">Tech Stack</span>
          <div className="absolute -bottom-0 left-0 w-full h-2 bg-purple-400 -rotate-1 z-0"></div>
        </h3>
        <ul className="flex flex-row justify-start items-center mb-8 gap-4">
          <li className="px-2 py-1 bg-green-400">React</li>
          <li className="px-2 py-1 bg-red-400">TailwindCSS</li>
          <li className="px-2 py-1 bg-purple-400">Typescript</li>
        </ul>
      </div>
      <hr className="border-2 mb-8 border-black" />
      <div>
        <h4>About this project</h4>
        <p>
          This is a simple To-do List Application. I just wanted to create
          something simple from the top of my head and w/out many details.
        </p>
        <p>
          I came up with what I thought would be some good features required for
          a valid MVP
        </p>
        <h5>Features: </h5>
        <ul className="list-disc ml-4">
          <li>
            Add/Edit Task
            <ul className="list-disc ml-4">
              <li>Title</li>
              <li>Category</li>
            </ul>
          </li>
          <li>Delete Task</li>
          <li>Mark as completed</li>
          <li>Add Categories</li>
          <li>Filter between: All, Active, Completed</li>
          <li>Clear Completed Tasks</li>
          <li>Data persistence with localStorage</li>
        </ul>
      </div>
      <hr className="border-2 my-8 border-black" />
    </div>
  );
};

export default TaskAppPage;
