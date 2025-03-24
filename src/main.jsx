import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyles from "../src/components/GlobalStyle/index";
import App from "./App";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </StrictMode>
);
