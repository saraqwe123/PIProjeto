import { Pagina } from "../components/Pagina";
import { CircleArrowLeft } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export function SenhaPagamento() {
    const [senha, setSenha] = useState("");

    const finalizarPagamento = () => {
        if (!senha) {
            alert("Digite sua senha!");
            return;
        }
        alert("Pagamento finalizado!");
    };

    return (
        <Pagina>
            <div className="relative w-full h-screen flex flex-col">

                <header className="w-full h-16 bg-white flex items-center shadow-md px-6 relative z-20">
                    <NavLink to="/agendarpix">
                        <CircleArrowLeft className="hover:text-[#259337] transition-all" />
                    </NavLink>

                    <img
                        src="imagens/logocriancas.png"
                        alt="Logo"
                        className="absolute right-6 top-2 w-20 object-contain z-0"
                    />
                </header>

                
                <div className="absolute w-full h-full bg-[#8eff8a]/40 backdrop-blur-sm z-10"></div>

       
                <div className="flex w-full h-full justify-center items-center z-20 px-4">
                    <div className="bg-white rounded-2xl shadow-xl w-full sm:w-[500px] p-8 flex flex-col items-center">

                        <h2 className="text-xl font-semibold text-center mb-6">
                            Sua senha MonoCoin!
                        </h2>

                        <input
                            type="password"
                            placeholder="Digite sua senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            className="border-b border-gray-400 w-3/4 text-center text-lg py-2 outline-none mb-8 placeholder-gray-500"
                        />

                        <button
                            onClick={finalizarPagamento}
                            className="bg-[#259337] hover:bg-[#1f7a2e] text-white font-semibold text-lg px-10 py-3 rounded-full shadow-md transition-all"
                        >
                            Finalizar
                        </button>
                    </div>
                </div>

            </div>
        </Pagina>
    );
}
