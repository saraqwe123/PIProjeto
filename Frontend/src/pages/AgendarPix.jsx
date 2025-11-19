import { Pagina } from "../components/Pagina";
import { MoveUpRight } from "lucide-react";
import { Key } from "lucide-react";
import { Copy } from "lucide-react";
import { DollarSign } from "lucide-react";
import { CircleArrowLeft } from "lucide-react";
import { CircleQuestionMark } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import {

    EyeIcon,
    EyeOffIcon,

} from "lucide-react";

export function AgendarPix() {
    const [showBalance, setShowBalance] = useState(false);
    const toggleBalance = () => {
        setShowBalance((prev) => !prev);
    };

    return (
        <Pagina>
            <div className="flex flex-col w-full h-screen">
                <header className="w-full h-30 bg-white flex items-center shadow-md relative z-10 px-6">
                    <div className="flex justify-between items-center w-full">
                        <NavLink to='/inicio' className="">
                            <CircleArrowLeft className="hover:text-[#259337] transition-all" />
                        </NavLink>

                        <button className="">
                            <CircleQuestionMark className="w-6 h-6 text-gray-700 mr-50" />
                        </button>
                    </div>

                    <img
                        src="imagens/logocriancas.png"
                        alt="Logo"
                        className="fixed top-3 right-8 sm:right-0 w-50 h-50 object-contain z-0"
                    />
                </header>

                <div className="hidden w-full h-64 bg-[#c1ff72] sm:flex flex-col items-start p-10">
                    <div className="h-full w-4/5 flex flex-row justify-around items-center">
                        <div className="flex flex-col items-around">
                            <div className="w-80 h-46 bg-white rounded-2xl shadow-md flex flex-col justify-center items-start">
                                <div className="flex flex-row justify-start h-1/2">
                                    <div className="w-10 h-10 rounded-full bg-[#b3b3b3] ml-2"></div>
                                    <p className="h-10 ml-5 flex items-center justify-center"><strong>Lara Heloisa Silva Deitos</strong></p>
                                </div>
                                <div className="w-full h-14 flex justify-center items-center">
                                    BCO. MONOCOIN
                                </div>
                            </div>
                        </div>
                        <div className="text-7xl">
                            <strong>
                                R$ 3,00
                            </strong>
                        </div>
                    </div>
                </div>

                <div className="w-full h-11/12 flex flex-row">
                    <div className=" hidden w- m-10 h-64 border-2 md:w-2/3 bg-[#278d46] rounded-4xl p-4 sm:flex flex-col md:flex-row justify-around">
                        <div className="w-full md:w-1/2 p-4 flex items-start justify-evenly flex-col">
                            <img src="imagens/logoSite.svg" alt="" />
                            <h1>Nome Completo</h1>
                            <h2>**** **** **** 6789</h2>

                            <div className="flex flex-col w-full">
                                <div className="flex justify-around w-full">
                                    <div className="h-1 bg-black rounded w-1/4"></div>
                                    <div className="h-1 bg-black rounded w-1/4"></div>

                                </div>
                                <div className="h-1 bg-black rounded w-full"></div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 p-4 rounded-xl flex flex-col justify-around items-start">
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

                            <div className="flex flex-col w-full">
                                <p className="text-sm">Última atualização: 01/10/2025</p>
                                <div className="w-full h-1 bg-[#6dd63a] rounded-full" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full m-5">

                        <div className="flex items-center justify-between w-64 sm:w-full mt-2">
                            <p className="sm:text-2xl font-bold tracking-wide">
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
                        <input
                            type="text"
                            placeholder="Agendar pagamento"
                            onFocus={(e) => (e.target.type = 'date')}
                            onBlur={(e) => {
                                if (!e.target.value) e.target.type = 'text'
                            }}
                            className="border-t w-64 sm:w-full sm:text-2xl h-16 placeholder-black outline-none"
                        />
                        <button className="border-t w-64 sm:w-full sm:text-2xl text-start h-16">
                            Repetir pagamento
                        </button>
                        <input
                            type="text"
                            placeholder="Descrição (Opcional)"
                            className="border-t border-b w-64 sm:w-full placeholder-black sm:text-2xl h-16 outline-none"
                        />
                    </div>
                </div>
            </div>
        </Pagina>
    );
}
