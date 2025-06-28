import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./router/router.jsx";

//
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AosProvider({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return children;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AosProvider>
      <RouterProvider router={router} />
    </AosProvider>
  </StrictMode>
);
