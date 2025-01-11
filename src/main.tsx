import { createRoot } from "react-dom/client";
import { Skeleton } from "./components/index.tsx";

createRoot(document.getElementById("root")!).render(
  <Skeleton width={60} height={60} />
);
