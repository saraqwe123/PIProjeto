import { useContext, useState } from "react";
import { Pagina } from "../components/Pagina";
import { MenuLateral } from "../components/MenuLateral";
import { MenuSuperior } from "../components/MenuSuperior";
import { Cartao } from "../components/Cartao"
import { DadosContext } from "../context/DadosContext"

export function PaginaInicial() {
  const cliente = JSON.parse(localStorage.getItem("usuario"));
  const conta = JSON.parse(localStorage.getItem("conta"));



  return (
    <Pagina>
      <div className="flex flex-wrap w-full h-full min-h-screen">
        <div className="w-full md:w-2/3 flex flex-col items-center bg-black p-4">
          <MenuSuperior />

          <h1 className="text-white text-center text-xl md:text-5xl mt-10 px-4">
            Seja bem-vindo ao Mono
            <span className="text-[#6dd63a] font-bold">Coin</span>!
          </h1>

          <div className="w-full h-full flex flex-col p-10 justify-end mb-5">

            <h1 className="text-white p-5 text-4xl">Meu cartão</h1>
            <Cartao nome={cliente?.login} saldo={conta?.saldo} />
          </div>
        </div>
        <MenuLateral />
      </div>
    </Pagina>
  );
}
