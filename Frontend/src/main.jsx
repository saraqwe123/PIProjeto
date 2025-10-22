import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Layout } from './pages/_Layout';
import { PaginaInicial } from './pages/PaginaInicial';
import { Login } from './pages/Login';
import { AreaPix } from './pages/AreaPix';
import { Investimentos } from './pages/Investimentos';
import { Cadastro } from './pages/Cadastro';

const rotas = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="cadastro" element={<Cadastro />} />
      <Route path="/" element={<Layout />}>
        <Route path="inicio" element={<PaginaInicial />} />
        <Route path="areapix" element={<AreaPix />} />
        <Route path="investimentos" element={<Investimentos />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rotas} />
  </StrictMode>
);