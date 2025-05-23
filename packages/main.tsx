import React from "react";
import { createRoot } from "react-dom/client";
import App from "../examples/components/App.tsx";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(<App />);
