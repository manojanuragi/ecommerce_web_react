import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import ShopContextProvider from "./components/context/ShopContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </StrictMode>
);
