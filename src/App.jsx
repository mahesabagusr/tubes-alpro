import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { HomePage } from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import PublicLayout from "@/layouts/PublicLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
