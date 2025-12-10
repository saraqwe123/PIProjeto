import { useState } from "react";
import { CircleArrowLeft, CircleQuestionMark, Copy, Key, MoveUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";


export function InserirPix() {
    const navigate = useNavigate();
    const [procura, setProcura] = useState("");


    const historicoPix = [
        { nome: "João Silva", hora: "09:14", tipo: "Pix", valor: -20 },
        { nome: "Maria Souza", hora: "10:20", tipo: "Pix", valor: 50 },
        { nome: "João Silva", hora: "11:30", tipo: "Pix", valor: -30 },
    ];


    const historicoFiltrado = historicoPix.filter((item) =>
        item.nome.toLowerCase().includes(procura.toLowerCase())
    );


    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <form onSubmit={() => navigate("/agendarpixcola")} className="group bg-gradient-to-r from-[#5170ff] to-[#ff66e4] rounded-2xl shadow-xl w-full max-w-md p-6 animate-fade-in">


                <header className="text-xl font-semibold text-white text-center mb-4">
                    Pix Copia e Cola

                </header>


                <div className="bg-gray-100 rounded-xl p-4 mb-6">
                    <p className="text-gray-600">
                        CódigoPix
                    </p>
                </div>


                <button type="submit" className=" border border-green-500/0 bg-gray-300 text-white font-semibold py-3 rounded-xl  transition-all shadow-md active:scale-95 cursor-pointer duration-300 w-20">
                    Enviar
                </button>
            </form>


            <style>{`
                   .animate-fade-in {
                   animation: fade 0.25s ease-out;
                   }
                   @keyframes fade {
                   from { opacity: 0; transform: scale(0.95); }
                   to { opacity: 1; transform: scale(1); }
                   }
       `}</style>
        </div>

    );
}
