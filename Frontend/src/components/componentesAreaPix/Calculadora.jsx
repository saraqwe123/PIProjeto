import { CircleXIcon, X } from "lucide-react";
import { useState } from "react";

export function Calculadora(props) {
    const [display, setDisplay] = useState("");

    function handleClick(valor) {
        const operadores = ["+", "-", "*", "/"];
        if (operadores.includes(valor)) {
            if (display === "") return;
            const ultimoDigito = display[display.length - 1];
            if (operadores.includes(ultimoDigito)) {
                setDisplay(display.slice(0, -1) + valor);
                return;
            };
        };
        if (display === "") if (valor === "0" || valor === "00") return;
        setDisplay(prev => prev + valor);
    }

    function handleClear() {
        setDisplay("");
    }

    function handleIgual() {
        try {
            const resultado = eval(display);
            setDisplay(String(resultado));
        } catch {
            setDisplay("Erro");
        }
    }

    const teclas = [
        "7", "8", "9", "/",
        "4", "5", "6", "*",
        "1", "2", "3", "-",
        "0", "00", ".", "+",
    ];

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center flex-col p-4 z-50">
            <div className="bg-transparent rounded-2xl shadow-xl w-full max-w-sm p-6 animate-fade-in">

                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-lg font-semibold text-black pl-1">
                        <strong>Calculadora</strong>
                    </h2>

                    <button
                        className="text-black cursor-pointer hover:text-red-500 transition-colors duration-300"
                        onClick={props.funcao}
                    >
                        <CircleXIcon size={28} />
                    </button>
                </div>


                <div className="bg-gray-100 text-right text-3xl p-4 rounded-xl mb-4 font-mono shadow-inner">
                    {display || "0"}
                </div>

                <div className="grid grid-cols-4 gap-3">
                    {teclas.map((t) => (
                        <button
                            key={t}
                            onClick={() => handleClick(t)}
                            className="bg-green-200 text-black border border-green-200/0 hover:bg-white hover:border-green-700 hover:text-green-700 active:scale-95 transition-all rounded-xl py-4 text-xl font-semibold shadow cursor-pointer duration-300"
                        >
                            {t}
                        </button>
                    ))}

                    <button
                        onClick={handleClear}
                        className="col-span-2 border cursor-pointer border-red-700/0 bg-red-700 hover:bg-white hover:text-red-700 hover:border-red-700 text-white active:scale-95 transition-all rounded-xl py-4 text-xl font-semibold shadow"
                    >
                        C
                    </button>

                    <button
                        onClick={handleIgual}
                        className="col-span-2 border cursor-pointer border-blue-700/0 bg-blue-700 hover:bg-white hover:text-blue-700 hover:border-blue-700 text-white active:scale-95 transition-all rounded-xl py-4 text-xl font-semibold shadow"
                    >
                        =
                    </button>
                </div>
            </div>

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
