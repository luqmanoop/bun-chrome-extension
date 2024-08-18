import { createRoot } from "react-dom/client";
const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(<h1>Options page with React!</h1>);
}
