import { useState } from "react";
import { Pagina } from "../components/Pagina";
import {
    ArrowBigDown,
    ArrowBigLeftDash,
    ArrowBigUp,
    ArrowDownUp,
    EyeIcon,
    EyeOffIcon,
    LogOut,
    MenuIcon,
    SkipBack,
    X,
} from "lucide-react";
import { MenuLateral } from "../components/MenuLateral";
import { MenuSuperior } from "../components/MenuSuperior";
import { NavLink } from "react-router-dom";

export function Extrato() {
    const [showBalance, setShowBalance] = useState(false);
    const [showMovimentacoes, setShowMovimentacoes] = useState(false)
    
    const toggleBalance = () => {
        setShowBalance((prev) => !prev);
    };

    const toggleShowMovimentacoes = () => {
        setShowMovimentacoes((prev) => !prev);
    };

    return (
        <Pagina>
            <div className="flex flex-wrap w-full h-full min-h-screen">
                <div className="w-full md:w-2/3 flex flex-col items-center bg-black p-4">
                    <MenuSuperior/>

                    <section className="relative bg-gradient-to-r from-[#222] via-[#333] to-[#222] border border-[#3a3a3a] shadow-lg rounded-2xl w-full md:w-96 mt-10 px-6 py-5 flex items-center justify-between self-end transition-all hover:shadow-[#6dd63a]/20">
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-400 uppercase tracking-wider">Saldo disponível</span>
                            <p className="text-3xl font-extrabold text-[#6dd63a] tracking-wide mt-1">
                                {showBalance ? "R$ 2.450,00" : "R$ ••••••"}
                            </p>
                        </div>

                        <button
                            onClick={toggleBalance}
                            className="flex items-center justify-center bg-[#6dd63a]/10 border border-[#6dd63a]/30 rounded-full p-2 hover:bg-[#6dd63a]/20 transition-all"
                            aria-label="Mostrar ou ocultar saldo"
                        >
                            {showBalance ? (
                                <EyeOffIcon className="w-6 h-6 text-[#6dd63a] cursor-pointer" />
                            ) : (
                                <EyeIcon className="w-6 h-6 text-[#6dd63a] cursor-pointer" />
                            )}
                        </button>
                    </section>
                    <section className="mt-6 p-4 bg-gradient-to-r from-[#222] via-[#333] to-[#222] border border-[#3a3a3a] shadow-lg rounded-2xl w-full h-full transition-all hover:shadow-[#6dd63a]/20 text-[#6dd63a] overflow-auto">
                        <div className="flex items-center w-1/3 justify-around">
                            <h1 className="text-2xl">Movimentações</h1>
                            {showMovimentacoes ? (
                                <X className="cursor-pointer transition-colors hover:text-white" onClick={toggleShowMovimentacoes} />
                            ) : (
                                <MenuIcon className="cursor-pointer transition-colors hover:text-white" onClick={toggleShowMovimentacoes} />
                            )}
                        </div>
                        {showMovimentacoes && (
                            <div className="mt-4 flex flex-col gap-3 text-gray-200">
                                <div className="text-sm text-gray-400 mb-2">Hoje</div>

                                <div className="flex items-center justify-between bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl p-4 hover:border-[#6dd63a]/40 transition-all cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <ArrowBigUp className="text-[#6dd63a]" />
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-white">Sara Guaiume</span>
                                            <span className="text-xs text-gray-400">Transferencia Recebida</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-[#6dd63a] font-semibold">+ R$ 3.000.000,00</span>
                                        <p className="text-xs text-gray-500">09:30</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl p-4 hover:border-[#bb2e29]/40 transition-all cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <ArrowBigDown className="text-[#bb2e29]" />
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-white">Sara Guaiume</span>
                                            <span className="text-xs text-gray-400">Transferencia Realizada</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-[#bb2e29] font-semibold">- R$ 3.000,00</span>
                                        <p className="text-xs text-gray-500">09:30</p>
                                    </div>
                                </div>

                                
                            </div>
                        )}
                    </section>
                    <NavLink to="/inicio" className="bg-red-600 border border-red-600/0 cursor-pointer rounded-2xl w-40 h-20 flex items-center justify-center text-white hover:bg-white hover:text-red-600 hover:border-red-600 self-end mt-6 transition-colors duration-300"> <SkipBack/> </NavLink>

                </div>

                <MenuLateral />
            </div>
        </Pagina>

    );
}
