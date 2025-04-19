import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import AboutMe from "./pages/AboutMe.tsx";
import Work from "./pages/Work.tsx";
import ContactMe from "./pages/ContactMe.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutMe /> },
      { path: "/work", element: <Work /> },
      { path: "/contact", element: <ContactMe /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
