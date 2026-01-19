import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root.tsx";
import './index.css'
import ErrorPage from './error.tsx';
import Home from './routes/home.tsx';
import Competitions from './routes/competitions.tsx';
import Research from './routes/research.tsx';
import Code from './routes/code.tsx';
import Teaching from './routes/teaching.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "competitions", element: <Competitions /> },
      { path: "coaching", element: <Teaching /> },
      { path: "research", element: <Research /> },
      { path: "code", element: <Code /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
