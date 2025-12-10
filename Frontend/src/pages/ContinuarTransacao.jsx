import { Pagina } from "../components/Pagina";
import { CircleArrowLeft } from "lucide-react";
import { NavLink } from "react-router-dom";

export function ConfirmarTransferencia() {

    return (
        <Pagina>
            <div className="flex flex-col w-full h-screen relative">
                <header className="w-full h-20 bg-white flex items-center shadow-md px-6 relative z-10">
                    <NavLink to="/agendarpix">
                        <CircleArrowLeft className="hover:text-[#259337] transition-all" />
                    </NavLink>

                    <img
                        src="imagens/logocriancas.png"
                        alt="Logo"
                        className="fixed top-3 right-8 sm:right-0 w-50 h-50 object-contain"
                    />
                </header>

                <div className="absolute inset-0 bg-[#c1ff72] opacity-70"></div>

                <div className="flex w-full h-full justify-center items-center px-4 relative z-20">

                    <div className="w-full sm:w-[550px] bg-white rounded-xl shadow-lg flex flex-col items-center text-center">

                        <p className="text-xl font-semibold py-4">
                            Tem certeza da sua transferência?
                        </p>

                        <div className="w-full h-1 bg-[#2e8c45]"></div>

                    
                        <button
                            className="w-full py-4 bg-gray-300 text-black font-medium text-lg hover:bg-gray-400 transition"
                            onClick={() => window.history.back()}
                        >
                            Cancelar
                        </button>

                    
                        <button
                            className="w-full py-4 bg-[#259337] text-white font-semibold text-lg rounded-b-xl hover:bg-green-700 transition"
                        >
                            Continuar
                        </button>

                    </div>
                </div>
            </div>
        </Pagina>
    );
}
