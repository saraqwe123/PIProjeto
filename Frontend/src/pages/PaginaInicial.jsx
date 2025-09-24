import { Pagina } from "../components/Pagina";
import { ArrowBigRight, BadgeQuestionMarkIcon, BellIcon, FileTextIcon, LineChartIcon, MessageCircleMoreIcon, SearchIcon, SendIcon } from "lucide-react";

export function PaginaInicial() {
  return (
    <Pagina>
      <div className="flex flex-wrap w-full h-full min-h-screen ">        
        <div className="w-full md:w-2/3 flex flex-col items-center bg-black p-4">
          <div className="flex flex-col md:flex-row w-full items-center justify-between gap-4 mt-3">
            <img src="" alt="" className="bg-gray-300 rounded-full w-10 h-10" />

            <div className="relative w-full md:w-96">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
              <input
                type="text"
                className="bg-gray-300 rounded-full w-full h-10 pl-10 pr-4"
                placeholder="Buscar..."
              />
            </div>

            <div className="text-gray-300 flex justify-around items-center w-full md:w-40 h-10">
              <BadgeQuestionMarkIcon className="hover:text-green-600 transition-colors" />
              <MessageCircleMoreIcon className="hover:text-green-600 transition-colors" />
              <BellIcon className="hover:text-green-600 transition-colors" />
            </div>
          </div>

          <h1 className="text-white text-center text-xl md:text-5xl mt-10 px-4">
            Seja bem-vindo ao Mono<span className="text-green-600 font-bold">Coin</span>!
          </h1>
        </div>

        <aside className="w-full md:w-1/3 h-full flex flex-col border-t md:border-t-0 md:border-l border-gray-700">
          <div className="w-full h-1/3 border-b border-gray-700 relative">
            <h1 className="flex flex-row self-start items-center justify-start text-2xl p-4 gap-2">
              <strong>Área Pix</strong>
              <ArrowBigRight className="w-6 h-6" />
            </h1>

            <SendIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-blue-500 transition-colors text-green-500 w-12 h-12" />
          </div>

          <div className="w-full h-1/3 border-b border-gray-700 relative">
            <h1 className="flex flex-row self-start items-center justify-start text-2xl p-4 gap-2">
              <strong>Extrato</strong>
              <ArrowBigRight className="w-6 h-6" />
            </h1>
            <FileTextIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-yellow-500 transition-colors text-blue-500 w-12 h-12" />
          </div>

          <div className="w-full h-1/3 border-b border-gray-700 relative">
            <h1 className="flex flex-row self-start items-center justify-start text-2xl p-4 gap-2">
              <strong>Investimento</strong>
              <ArrowBigRight className="w-6 h-6" />
            </h1>
            <LineChartIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-green-500 transition-colors text-yellow-500 w-12 h-12" />
          </div>
        </aside>
      </div>
    </Pagina>
  );
}

