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
import { Extrato } from './pages/Extrato';
import { AgendarPix } from './pages/AgendarPix';
import { Transferencia } from './pages/Transferencia';
import { PixCopiaeCola } from './pages/PixCopiaECola';
import { MudarChave } from './pages/MudarChave';
import { Caixinha } from './pages/Caixinha';

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
        <Route path="extrato" element={<Extrato />} />
        <Route path="agendarpix" element={<AgendarPix />} />
        <Route path="transferencia" element={<Transferencia />} />
        <Route path="pixcopiaecola" element={<PixCopiaeCola />} />
        <Route path="mudarchave" element={<MudarChave />} />
        <Route path="investimentos/caixinha" element={<Caixinha />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rotas} />
  </StrictMode>
);