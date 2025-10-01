import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Layout } from './pages/_Layout';
import { PaginaInicial } from './pages/PaginaInicial';
import { Login } from './pages/Login';

const rotas = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="inicio" element={<PaginaInicial />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rotas} />
  </StrictMode>
);