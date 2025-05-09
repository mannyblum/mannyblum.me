import { Outlet } from "react-router";

export default function Conversions() {
  return (
    <div>
      <h1>Conversions</h1>
      <p>
        A collection of components, widgets, and pages based on designs found in{" "}
        <a href="#">http://insert-website-here.com</a>. None of these designs
        are mine. just the code.
      </p>
      <Outlet />
    </div>
  );
}
