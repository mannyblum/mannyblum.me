import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";
import App from "./App.tsx";
import { Conversions } from "./components/Conversions/";
import { Progress } from "./components/Conversions/Progress";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="conversions" element={<Conversions />}>
          <Route path="progress" element={<Progress />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
