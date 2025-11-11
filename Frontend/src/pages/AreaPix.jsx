import { Pagina } from "../components/Pagina";
import { MoveUpRight } from "lucide-react";
import { Key } from "lucide-react";
import { Copy } from "lucide-react";
import { DollarSign } from "lucide-react";
import { CircleArrowLeft } from "lucide-react";
import { CircleQuestionMark } from "lucide-react";


export function AreaPix() {
  return (
    <Pagina>
      <div className="flex flex-col w-full h-screen">
        <header className="w-full h-25 bg-white flex items-center shadow-md relative z-10 px-6">
          <div className="flex justify-between items-center w-full">
            <button
              onClick={() => window.location.href = "http://localhost:5173/inicio"}
              className="text-gray-700 hover:text-green-500  transition-colors"
            >
              <CircleArrowLeft className="w-6 h-6" />
            </button>

            <button className="text-gray-700 hover:text-green-500 transition-colors">
              <CircleQuestionMark className="w-6 h-6 mr-50" />
            </button>
          </div>

          <img
            src="imagens/logocriancas.png"
            alt="Logo"
            className="fixed top-3 right-0 w-50 h-50 object-contain z-0"
          />
        </header>

        <main className="w-full flex-1 bg-[#259337] flex flex-col items-start p-10">
          <p className="text-white font-bold text-xl mb-6 ml-10">Área Pix</p>

          <div className="flex gap-10 ml-10 flex-wrap">
            <div className="flex flex-col items-center">
              <div className="w-50 h-50 bg-[#c1ff72] rounded-2xl shadow-md flex justify-center items-center"><MoveUpRight className="w-20 h-50"/></div>
              <p className="text-white mt-2">Transferência</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-50 h-50 bg-[#5ce1e6] rounded-2xl shadow-md flex justify-center items-center"><Key className="w-20 h-50" /></div>
              <p className="text-white mt-2">Mudar Chave</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-50 h-50 bg-gradient-to-r from-[#5170ff] to-[#ff66e4] rounded-2xl shadow-md flex justify-center items-center"><Copy className="w-20 h-50"/></div>
              <p className="text-white mt-2">Pix Copia e Cola</p>
            </div>

            <div className="flex flex-col items-center">
             <div className="w-50 h-50 bg-gradient-to-r from-[#0097b2] to-[#7ed957] rounded-2xl shadow-md flex justify-center items-center"><DollarSign className="w-20 h-50"/></div>
              <p className="text-white mt-2">Cobrar</p>
            </div>
          </div>
        </main>

        <hr  className="h-1 bg-[#d9d9d9] border-[#d9d9d9]"/>

        <div className="w-full flex flex-col bg-[#003c0a] p-6">
          <p className="text-white text-xl font-semibold mb-4">Histórico</p>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Pesquisar"
              className="w-full rounded-full px-10 py-2 bg-[#d9d9d9] text-gray-700 focus:outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 absolute left-3 top-2.5 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
            </svg>
          </div>

          <div className="flex items-center justify-between text-white border-b border-gray-400 py-3">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gray-500 rounded-full"></div>
              <div>
                <p className="font-medium">Nome completo</p>
                <p className="text-sm text-gray-300">09:14 - Pix</p>
              </div>
            </div>
            <p className="text-gray-300">- R$ 20,00</p>
          </div>

          <div className="flex items-center justify-between text-white border-b border-gray-400 py-3">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-green-400 rounded-full"></div>
              <div>
                <p className="font-medium">Nome completo</p>
                <p className="text-sm text-gray-300">09:14 - Pix</p>
              </div>
            </div>
            <p className="text-green-400">+ R$ 20,00</p>
          </div>
        </div>
      </div>
    </Pagina>
  );
}
