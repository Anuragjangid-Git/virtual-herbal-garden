import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import PlantDetails from "./pages/PlantDetails";
import Collection from "./pages/Collection";

import Profile from "./pages/Profile";
import AIChatbot from "./pages/AIChatbot";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/plant/:id",
    element: <PlantDetails />,
  },
  {
    path: "collection",
    element: <Collection />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/ai-chatbot",
    element: <AIChatbot />,
  },
]);
