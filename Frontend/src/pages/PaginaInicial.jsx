import { useState } from "react";
import { Pagina } from "../components/Pagina";
import { ArrowBigRight, BadgeQuestionMarkIcon, BellIcon, EyeIcon, EyeOffIcon, FileTextIcon, LineChartIcon, MessageCircleMoreIcon, SearchIcon, SendIcon } from "lucide-react";

export function PaginaInicial() {
  const [showBalance, setShowBalance] = useState(false);

  const toggleBalance = () => {
    setShowBalance((prev) => !prev);
  };
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

          <div className="w-full h-full flex flex-col p-10 justify-end">
            <h1 className="text-white p-5 text-4xl">Meu cartão</h1>
            <div className="w-3/4 h-3/4 bg-white rounded-4xl p-4 flex justify-around">
              <div className="h-full w-1/2 p-4 flex items-start justify-evenly flex-col">
                Imagem
                <h1>Nome Completo</h1>
                <h2>**** **** **** 6789</h2>
                <div className="flex flex-col gap-1 w-full">
                  <div className="flex justify-around w-full">
                    <div className="h-1 bg-gray-800 rounded w-1/4"></div>
                    <div className="h-1 bg-gray-800 rounded w-1/4"></div>
                    <div className="h-1 bg-gray-800 rounded w-1/4"></div>
                  </div>
                  <div className="h-1 bg-gray-800 rounded w-full"></div>
                </div>
              </div>

              <div className="h-full w-1/2 p-4 rounded-xl flex flex-col justify-around items-start gap-4">
                <div className="flex flex-col w-full">
                  <span className="text-sm">Saldo disponível</span>
                  <div className="flex items-center justify-between w-full mt-2">
                    <p className="text-2xl font-bold tracking-wide">
                      {showBalance ? "R$ 2.450,00" : "R$ ••••••"}
                    </p>
                    <button
                      onClick={toggleBalance}
                      className="hover:text-yellow-300 transition-colors"
                      aria-label="Mostrar ou ocultar saldo"
                    >
                      {showBalance ? (
                        <EyeOffIcon className="w-6 h-6" />
                      ) : (
                        <EyeIcon className="w-6 h-6" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <p className="text-sm">Última atualização: 01/10/2025</p>
                  <div className="w-full h-1 bg-yellow-400 rounded-full" />
                </div>
              </div>
            </div>
          </div>
          
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

