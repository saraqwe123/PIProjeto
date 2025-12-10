import { Pagina } from "../components/Pagina";
import { CircleArrowLeft, CircleQuestionMark, EyeIcon, EyeOffIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export function valorTransferencia() {
    const [showBalance, setShowBalance] = useState(false);
    const toggleBalance = () => setShowBalance((prev) => !prev);

    return (
        <Pagina>
            <div className="flex flex-col w-full h-screen">
                <header className="w-full h-30 bg-white flex items-center shadow-md relative z-10 px-6">
                    <div className="flex justify-between items-center w-full">
                        <NavLink to='/inicio'>
                            <CircleArrowLeft className="hover:text-[#259337] transition-all" />
                        </NavLink>

                        <button>
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

                        <div className="text-7xl font-bold">
                            R$ 3,00
                        </div>
                    </div>
                </div>
              
                <div className="flex flex-col sm:flex-row w-full h-full px-4 sm:px-10 gap-6 sm:gap-10 mt-2">
                    <div className="hidden sm:flex w-full sm:w-1/2 rounded-4xl p-4 flex-col md:flex-row justify-around h-64">
                        <div className="w-115 h-70 bg-[#278d46] rounded-4xl p-6 shadow-xl relative overflow-hidden flex justify-between items-start">
                            <div className="flex flex-col gap-2">
                                <img src="imagens/logo2.png" alt="Logo" className="w-55" />
                                <p className="text-lg text-white">Lara Heloisa</p>
                                <h2 className="tracking-widest text-lg text-white font-semibold"> **** **** **** 0038 </h2>
                                <div className="flex flex-col gap-1 w-full mt-2">
                                    <div className="flex justify-around w-full">
                                    <div className="h-2 bg-white rounded w-1/4"></div>
                                    <div className="h-2 bg-white rounded w-1/4"></div>
                                    <div className="h-2 bg-white rounded w-1/4"></div>
                                    </div>
                                    <div className="h-1 bg-white rounded w-full"></div>
                                </div>
                                </div>

                                <div className="flex flex-col justify-between items-end h-full">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-sm text-white">Saldo em conta</p>

                                        <div className="flex items-center gap-2">
                                            <div className="relative w-32">  

                                            {!showBalance && (
                                                <div className="absolute inset-0 z-10"></div>
                                            )}

                                            <p className="text-xl font-semibold text-white tracking-wide">
                                                {showBalance ? {saldo} : "R$ ******"}
                                            </p>
                                            </div>

                                            <button
                                            onClick={toggleBalance}
                                            className="cursor-pointer text-white hover:text-green-500 transition"
                                            >
                                            {showBalance ? (
                                                <EyeIcon className="w-5 h-5" />
                                            ) : (
                                                <EyeOffIcon className="w-5 h-5" />
                                            )}
                                            </button>
                                        </div>
                                    </div>

                                <div className="relative w-28 h-16 mb-4">
                                    <div className="absolute w-20 h-20 bg-white rounded-full left-8 top-0 z-10"></div>
                                    <div className="absolute w-20 h-20 bg-green-700 rounded-full left-0 top-0 z-0"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full sm:w-1/2 px-2 mt-7">
                        <div className="flex items-center justify-between w-full mt-2">
                            <p className="sm:text-2xl font-bold tracking-wide">
                                {showBalance ? "R$ 2.450,00" : "R$ ••••••"}
                            </p>

                            <button
                                onClick={toggleBalance}
                                className="hover:text-[#6dd63a] transition-colors cursor-pointer"
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
                            onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => {
                                if (!e.target.value) e.target.type = "text";
                            }}
                            className="border-t w-full sm:text-2xl h-16 placeholder-black outline-none"
                        />

                        <button className="border-t w-full sm:text-2xl text-start h-16">
                            Repetir pagamento
                        </button>

                        <input
                            type="text"
                            placeholder="Descrição (Opcional)"
                            className="border-t border-b w-full placeholder-black sm:text-2xl h-16 outline-none"
                        />
                    </div>
                </div>
            </div>
        </Pagina>
    );
}