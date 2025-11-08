import { useState } from "react";
import { Pagina } from "../components/Pagina";
import {
  ArrowBigRight,
  BadgeQuestionMarkIcon,
  BellIcon,
  EyeIcon,
  EyeOffIcon,
  FileTextIcon,
  LineChartIcon,
  MessageCircleMoreIcon,
  SearchIcon,
  SendIcon,
  User,
  UserCircle2Icon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MenuLateral } from "../components/MenuLateral";
import { MenuSuperior } from "../components/MenuSuperior";

export function PaginaInicial() {
  const [showBalance, setShowBalance] = useState(false);
  const toggleBalance = () => {
    setShowBalance((prev) => !prev);
  };

  return (
    <Pagina>
      <div className="flex flex-wrap w-full h-full min-h-screen">
        <div className="w-full md:w-2/3 flex flex-col items-center bg-black p-4">
          <MenuSuperior/>

          <h1 className="text-white text-center text-xl md:text-5xl mt-10 px-4">
            Seja bem-vindo ao Mono
            <span className="text-[#6dd63a] font-bold">Coin</span>!
          </h1>

          <div className="w-full h-full flex flex-col p-10 justify-end mb-5">
            <h1 className="text-white p-5 text-4xl">Meu cartão</h1>

            <div className="w-full md:w-2/3 lg:h-1/2 h-auto bg-white rounded-4xl p-4 flex flex-col md:flex-row justify-around gap-4">
              <div className="w-full md:w-1/2 p-4 flex items-start justify-evenly flex-col gap-4">
                Imagem
                <h1>Nome Completo</h1>
                <h2>**** **** **** 6789</h2>

                <div className="flex flex-col gap-1 w-full">
                  <div className="flex justify-around w-full">
                    <div className="h-1 bg-black rounded w-1/4"></div>
                    <div className="h-1 bg-black rounded w-1/4"></div>
                    <div className="h-1 bg-black rounded w-1/4"></div>
                  </div>
                  <div className="h-1 bg-black rounded w-full"></div>
                </div>
              </div>

              <div className="w-full md:w-1/2 p-4 rounded-xl flex flex-col justify-around items-start gap-4">
                <div className="flex flex-col w-full">
                  <span className="text-sm">Saldo disponível</span>
                  <div className="flex items-center justify-between w-full mt-2">
                    <p className="text-2xl font-bold tracking-wide">
                      {showBalance ? "R$ 2.450,00" : "R$ ••••••"}
                    </p>
                    <button
                      onClick={toggleBalance}
                      className="hover:text-[#6dd63a] transition-colors cursor-pointer"
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
                  <div className="w-full h-1 bg-[#6dd63a] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <MenuLateral />

      </div>
    </Pagina>
  );
}
