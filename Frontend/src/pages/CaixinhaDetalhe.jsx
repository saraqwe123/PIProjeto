import { useParams, NavLink } from "react-router-dom";
import { Pagina } from "../components/Pagina";
import { useState } from "react";
import { MenuSuperiorSemBarra } from "../components/MenuSuperiorSemBarra";
import { SkipBack } from "lucide-react";

export function CaixinhaDetalhe() {
    const { id } = useParams();
    const cliente = JSON.parse(localStorage.getItem("usuario"));
    const conta = JSON.parse(localStorage.getItem("conta"));

    const [caixinha, setCaixinha] = useState({
        id,
        saldo: 50.00
    });

    const [operacao, setOperacao] = useState(null);
    const [valor, setValor] = useState("");

    const confirmarOperacao = () => {
        const numero = parseFloat(valor);
        if (isNaN(numero) || numero <= 0) {
            alert("Digite um valor válido!");
            return;
        }

        if (operacao === "depositar") {
            if (numero > conta.saldo) {
                alert("Saldo insuficiente!");
                return;            setCaixinha((prev) => ({ ...prev, saldo: prev.saldo - numero }));
                conta.saldo += numero;
            }
            setCaixinha((prev) => ({ ...prev, saldo: prev.saldo + numero }));
            conta.saldo -= numero;

        } else if (operacao === "resgatar") {
            if (numero > caixinha.saldo) {
                alert("Não é possível resgatar esse valor!");
                return;
            }
            setCaixinha((prev) => ({ ...prev, saldo: prev.saldo - numero }));
            conta.saldo = conta.saldo + numero;
        }
        
        localStorage.setItem("conta", JSON.stringify(conta));
        setValor("");
        setOperacao(null);
    };

    return (
        <Pagina>
            <MenuSuperiorSemBarra />

            <div className="h-full w-full flex flex-col p-6 text-white bg-black">
                <h1 className="text-3xl font-bold">Caixinha {id}</h1>

                <div className="mt-6 bg-[#1a1a1a] p-4 rounded-xl border border-gray-700">
                    <p className="text-xl">Saldo da caixinha:</p>
                    <p className="text-4xl font-bold text-green-400">
                        R$ {caixinha.saldo.toFixed(2)}
                    </p>
                </div>

                <div className="mt-6 bg-[#1a1a1a] p-4 rounded-xl border border-gray-700">
                    <p className="text-xl">Seu saldo disponível:</p>
                    <p className="text-3xl font-bold text-yellow-400">
                        R$ {conta.saldo.toFixed(2)}
                    </p>
                </div>

                <div className="flex gap-4 mt-8">
                    <button
                        onClick={() => setOperacao("depositar")}
                        className="bg-green-600 px-6 py-3 rounded-xl font-bold hover:bg-green-700"
                    >
                        Depositar
                    </button>

                    <button
                        onClick={() => setOperacao("resgatar")}
                        className="bg-red-600 px-6 py-3 rounded-xl font-bold hover:bg-red-700"
                    >
                        Resgatar
                    </button>
                </div>

                {operacao && (
                    <div className="mt-6 flex gap-2 items-center">
                        <input
                            type="number"
                            placeholder="Digite o valor"
                            value={valor}
                            onChange={(e) => setValor(e.target.value)}
                            className="px-4 py-2 rounded-xl text-black bg-white"
                        />
                        <button
                            onClick={confirmarOperacao}
                            className="bg-blue-600 px-6 py-2 rounded-xl font-bold hover:bg-blue-700"
                        >
                            Confirmar
                        </button>
                        <button
                            onClick={() => setOperacao(null)}
                            className="bg-gray-600 px-6 py-2 rounded-xl font-bold hover:bg-gray-700"
                        >
                            Cancelar
                        </button>
                    </div>
                )}
                <NavLink to="/investimentos/caixinha" className="bg-red-600 border border-red-600/0 cursor-pointer rounded-2xl w-40 h-12 flex items-center justify-center text-white hover:bg-white hover:text-red-600 hover:border-red-600 sm:self-end mt-6 transition-colors duration-300"> <SkipBack /> </NavLink>
            </div>
        </Pagina>
    );
}
