import { Outlet } from "react-router";

export default function Small() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold ">Small</h1>
      <Outlet />
    </div>
  );
}
