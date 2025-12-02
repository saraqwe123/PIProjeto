import { Pagina } from "../components/Pagina";
import { CircleArrowLeft, CircleQuestionMark, Eye, RotateCcw, Calendar, CircleX, EyeIcon, EyeOffIcon } from "lucide-react";
import { NavLink, useParams } from "react-router-dom";
import imagem from "/imagens/logocriancas.png";
import { Cartao } from "../components/Cartao";
import { useState } from "react";

export function ConfirmarPagamento() {
    const { valor } = useParams();
    const [showBalance, setShowBalance] = useState(false);
    
    const cliente = JSON.parse(localStorage.getItem("usuario"));
    const conta = JSON.parse(localStorage.getItem("conta"));

    const valorFormatado = (valor / 100).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    const toggleBalance = () => {
        setShowBalance(!showBalance)
    }

    const hoje = new Date()
    const hojeFormatado = hoje.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    
    return (
        <Pagina>
            <div className="flex flex-col w-full min-h-screen bg-gradient-to-b from-[#c1ff72] to-[#003c02]">

                <header className="w-full h-20 bg-white flex items-center shadow-md px-6 z-10 relative">
                    <div className="flex justify-between items-center w-full">
                        <NavLink
                            to="/transferencia/transferenciaPix"
                            className="text-gray-700 hover:text-green-600 transition"
                        >
                            <CircleArrowLeft className="w-7 h-7" />
                        </NavLink>

                        <button className="text-gray-700 hover:text-green-600 transition">
                            <CircleQuestionMark className="w-7 h-7" />
                        </button>
                    </div>

                    <img
                        src={imagem}
                        alt="Logo"
                        className="fixed top-0 right-0 w-32 object-contain pointer-events-none opacity-90"
                    />
                </header>

                <div className="w-full p-6">
                    <div className="bg-white/80 rounded-xl shadow-md p-4 border border-black/10">
                        <p className="font-bold text-lg text-[#003c02] leading-5">
                            LARA HELOISA SILVA<br />DEITOS
                        </p>
                        <p className="text-gray-700 mt-1 text-sm">
                            BCO. BRASIL
                        </p>
                    </div>

                    <h1 className="text-[#006400] text-4xl font-bold text-center mt-6">
                        {valorFormatado}
                    </h1>
                </div>

                <div className="bg-white rounded-t-3xl p-6 shadow-lg mt-auto">

                    <div className="flex items-center justify-between py-3 border-b">
                        <div className="flex items-center gap-3">
                            <span className="text-xl">💰</span>
                            <span className="text-gray-800">                           
                                {showBalance ? `R$ ${conta?.saldo}` : "R$ ******"}
                            </span>
                        </div>
                        <button
                            onClick={toggleBalance}
                            className="cursor-pointer hover:text-green-600 transition"
                            >
                            {showBalance ? (
                                <EyeIcon className="w-5 h-5" />
                            ) : (
                                <EyeOffIcon className="w-5 h-5" />
                            )}
                        </button>
                    </div>

                    <div className="flex items-center justify-between py-3 border-b">
                        <div className="flex items-center gap-3">
                            <Calendar className="text-gray-700" />
                            <span className="text-gray-800">
                                Pagar hoje, <strong>{hojeFormatado}</strong>
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between py-3 border-b">
                        <div className="flex items-center gap-3">
                            <RotateCcw className="text-gray-700" />
                            <span className="text-gray-800">Repetir pagamento</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between py-3">
                        <input className="text-gray-800 w-full" placeholder="Descrição (opcional)" />
                        <span className="text-gray-700 text-xl">✏️</span>
                    </div>

                    <div className="flex justify-end mt-4">
                        <button className="w-14 h-14 rounded-full bg-[#00c000] hover:bg-[#009900] transition flex justify-center items-center shadow-lg">
                            ➜
                        </button>
                    </div>

                    <div className="w-full mt-2">
                        <Cartao nome={cliente?.login} saldo={conta?.saldo} />
                    </div>
                </div>
            </div>
        </Pagina>
    );
}
