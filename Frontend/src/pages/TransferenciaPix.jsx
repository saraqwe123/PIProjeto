import { Pagina } from "../components/Pagina";
import { CircleArrowLeft } from "lucide-react";
import { CircleQuestionMark } from "lucide-react";
import { CircleX } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export function TransferenciaPix() {
    const [showBalance, setShowBalance] = useState(false);
    const toggleBalance = () => setShowBalance(prev => !prev);

    const [valor, setValor] = useState("");

    function formatarValor(e) {
        let v = e.target.value.replace(/\D/g, "");

        if (v < 0) v = 0;

        v = (Number(v) / 100).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

        setValor(v);
    }

    function adicionarValor(quantia) {
        let v = valor.replace(/\D/g, "");
        if (!v) v = 0;

        let total = Number(v) + quantia;

        const formatado = (total / 100).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

        setValor(formatado);
    }


    return (
        <Pagina>
            <div className="flex flex-col w-full h-screen">
                <header className="w-full h-25 bg-white flex items-center shadow-md relative z-10 px-6">
                    <div className="flex justify-between items-center w-full">
                        <button
                        onClick={() => window.location.href = "http://localhost:5173/inicio"}
                        className="text-gray-700 hover:text-green-500  transition-colors"
                        >
                        <CircleArrowLeft className="w-6 h-6"/>
                        </button>

                        <button className="text-gray-700 hover:text-green-500 transition-colors">
                        <CircleQuestionMark className="w-6 h-6 mr-35" />
                        </button>
                    </div>

                    <img
                        src="imagens/logocriancas.png"
                        alt="Logo"
                        className="fixed top-0 right-0 w-35 h-auto object-contain z-50 pointer-events-none"
                    />
                </header>

                <div className="w-full bg-[#c1ff72] flex flex-col items-start p-10">
                    <div className="flex flex-col w-full">
                        <strong className="text-lg">Quanto você quer pagar?</strong>
                        <p className="text-sm mt-1">Você vai pagar <strong>Fulano de tal</strong></p>
                        <div className="relative w-350 mt-3">
                            <input
                                type="text"
                                value={valor}
                                onChange={formatarValor}
                                placeholder="R$ 0,00"
                                className="
                                    w-full h-16 bg-white text-gray-700 rounded-md
                                    focus:outline-none pl-4 pr-12 text-xl
                                    [appearance:textfield]
                                    [&::-webkit-inner-spin-button]:appearance-none
                                    [&::-webkit-outer-spin-button]:appearance-none
                                "
                            />
                            <button
                                onClick={() => setValor("")}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-500 transition-all"
                            >
                                <CircleX className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-[#003c02] w-ful h-full">
                    <div className="">

                    </div>
                    <div className="flex justify-center gap-4 mt-6">
                        <button
                            onClick={() => adicionarValor(1000)}
                            className="bg-white px-6 py-2 rounded-full font-semibold shadow"
                        >
                            +R$ 10
                        </button>

                        <button
                            onClick={() => adicionarValor(2000)}
                            className="bg-white px-6 py-2 rounded-full font-semibold shadow"
                        >
                            +R$ 20
                        </button>

                        <button
                            onClick={() => adicionarValor(5000)}
                            className="bg-white px-6 py-2 rounded-full font-semibold shadow"
                        >
                            +R$ 50
                        </button>
                    </div>  
                    
                    <div className="w-full flex justify-center mt-4">
                        <button
                            onClick={() => adicionarValor(10000)}
                            className="bg-white px-6 py-2 rounded-full font-semibold shadow"
                        >
                            +R$ 100
                        </button>
                    </div>
                </div>
            </div>
        </Pagina>
    );
}
