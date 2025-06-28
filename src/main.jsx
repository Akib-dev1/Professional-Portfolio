import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './Routes/Home.jsx';
import ProjectDetails from './Routes/ProjectDetails.jsx';

const projects= fetch('/Projects.json')
  .then(response => response.json());

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home projects={projects} />,
      },
      {
        path: "/projects/:name",
        element: <ProjectDetails projects={projects} />,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
