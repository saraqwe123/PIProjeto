import { Pagina } from "../components/Pagina";
import { CircleArrowLeft } from "lucide-react";
import { NavLink } from "react-router-dom";

export function ConfirmarPagamento() {
    return (
        <Pagina>
            <div className="relative w-full h-screen flex flex-col">
                <header className="w-full h-20 bg-white flex items-center shadow-md relative px-6 z-20">
                    <NavLink to="/agendarpix">
                        <CircleArrowLeft className="hover:text-[#259337] transition-all" />
                    </NavLink>

                    <img
                        src="imagens/logocriancas.png"
                        alt="Logo"
                        className="absolute top-3 right-8 w-14 h-14 object-contain"
                    />
                </header>
                <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>

               
                <div className="relative z-20 w-full flex justify-center items-center h-full p-4">
                    <div className="bg-white w-full sm:w-[550px] rounded-2xl shadow-xl p-6">

                    
                        <p className="text-center text-lg mb-4">
                            Você vai pagar <strong>R$ 3,00</strong> para <strong>LARA HELOISA SILVA DEITOS</strong>.
                        </p>

            
                        <div className="flex items-center gap-3 border rounded-xl p-4 mb-6">

                            <div className="w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center text-lg">
                                ✓
                            </div>

                            <div className="flex flex-col">
                                <span className="font-bold">Saldo</span>
                                <span className="text-gray-700">Valor disponível: R$ 10,00</span>
                            </div>
                        </div>

                       
                        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl text-lg transition">
                            Pagar
                        </button>
                    </div>
                </div>
            </div>
        </Pagina>
    );
}
