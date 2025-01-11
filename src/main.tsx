import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Skeleton } from "./components/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Skeleton width={60} height={60} />
  </StrictMode>
);
