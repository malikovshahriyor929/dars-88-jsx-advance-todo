import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { root } from "./routes";
import { ComponentContextProvider } from "./components/context";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ComponentContextProvider>
      <RouterProvider router={root} />
    </ComponentContextProvider>
  </StrictMode>
);
