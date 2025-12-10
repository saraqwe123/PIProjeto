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
import { Acoes } from './pages/Acoes';
import { TransferenciaPix } from './pages/TransferenciaPix';
import { ComprarAcao } from './pages/ComprarAcao';
import { DadosProvider } from './context/DadosContext';
import { CaixinhaDetalhe } from './pages/CaixinhaDetalhe';
import { CaixinhaNova } from './pages/CaixinhaNova';
import { ConfirmarPagamento } from './pages/ConfirmarPagamento';
import { ChaveErrada } from './pages/ChaveErrada';
import { Page404 } from './pages/Page404';
import { valorTransferencia } from './pages/valorTransferencia';


const rotas = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="/erro" element={<ChaveErrada />} />
      <Route path="cadastro" element={<Cadastro />} />
      <Route path="/" element={<Layout />}>
        <Route path="inicio" element={<PaginaInicial />} />
        <Route path="areapix" element={<AreaPix />} />
        <Route path="investimentos" element={<Investimentos />} />
        <Route path="extrato" element={<Extrato />} />
        <Route path="agendarpix" element={<AgendarPix />} />
        <Route path="transferencia" element={<Transferencia />} />
        <Route path="transferencia/transferenciapix" element={<TransferenciaPix />} />
        <Route path="transferencia/transferenciapix/confirmarPagamento/:valor" element={<ConfirmarPagamento />} />
        <Route path="pixcopiaecola" element={<PixCopiaeCola />} />
        <Route path="mudarchave" element={<MudarChave />} />
        <Route path="investimentos/caixinha" element={<Caixinha />} />
        <Route path="investimentos/acoes" element={<Acoes />} />
        <Route path="transferenciapix" element={<TransferenciaPix />} />
        <Route path="investimentos/compraracao" element={<ComprarAcao />} />
        <Route path="investimentos/caixinha/caixinhanova" element={<CaixinhaNova />} />
        <Route path="investimentos/caixinha/:id" element={<CaixinhaDetalhe />} />
        <Route path="valorTransferencia" element={<valorTransferencia />} />

      </Route>
      <Route path="*" element={<Page404 />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <DadosProvider>
    <StrictMode>
      <RouterProvider router={rotas} />
    </StrictMode>
  </DadosProvider>
);