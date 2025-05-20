import { TaskApp } from "@/components/task-app/src";

export default function TodoPage() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold ">Todo App</h2>
      <div className="flex justify-center container w-10/12 mx-auto p-4 py-8 border-[3px] shadow-[5px_5px] border-black rounded-2xl bg-violet-100">
        <TaskApp />
      </div>
    </div>
  );
}
