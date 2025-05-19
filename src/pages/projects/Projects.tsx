import { Outlet } from "react-router";

export default function Progress() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold ">Projects</h1>
      <Outlet />
    </div>
  );
}
