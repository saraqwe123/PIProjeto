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
        <header className="w-full h-20 bg-white flex items-center shadow-md relative z-10 px-6">
          <div className="flex justify-between items-center w-full">
            <button className="">
              <CircleArrowLeft className="w-6 h-6 text-gray-700" />
            </button>

            <button className="">
              <CircleQuestionMark className="w-6 h-6 text-gray-700 mr-50" />
            </button>
          </div>

          <img
            src="imagens/logocriancas.png"
            alt="Logo"
            className="fixed top-3 right-0 w-50 h-50 object-contain z-0"
          />
        </header>

        <div className="w-full flex-1 bg-[#259337] flex flex-col items-start p-10">
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
        </div>

        <hr  className="h-1 bg-[#d9d9d9] border-[#d9d9d9]"/>

        <div className="w-full flex-1 bg-[#003c0a] flex justify-center items-center">
          <p className="text-white text-lg">Histórico vazio</p>
        </div>
      </div>

    </Pagina>
  );
}
