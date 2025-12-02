import { Pagina } from "../components/Pagina";
import { CircleArrowLeft, CircleQuestionMark, CircleX } from "lucide-react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import imagem from "/imagens/logocriancas.png";
import { Cartao } from "../components/Cartao";

export function TransferenciaPix() {
    const [valor, setValor] = useState("");
    const navigate = useNavigate("");
    const clienteDestino = JSON.parse(localStorage.getItem("clienteDestino"));
    const cliente = JSON.parse(localStorage.getItem("usuario"));
    const conta = JSON.parse(localStorage.getItem("conta"));
    const [saldo, setSaldo] = useState(conta?.saldo || 0);


    function formatarValor(e) {
        let v = e.target.value.replace(/\D/g, "");
        if (!v) v = 0;

        v = (Number(v) / 100).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

        setValor(v);
    }

    function adicionarValor(quantia) {
        let v = valor.replace(/\D/g, "") || 0;

        const total = Number(v) + quantia;

        setValor(
            (total / 100).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
            })
        );
    }

    const realizandoTransferencia = () => {
        const valorNumerico = Number(valor.replace(/\D/g, ""));
        const valorReal = valorNumerico/100
        if (valorReal >= 0.01 && saldo >= valorReal) {
            navigate(`confirmarPagamento/${valorNumerico}`);
        } else {
            alert("Só podem trasnferências a partir de R$0,01")
            console.log(valorReal, saldo)
        }
    };

    return (
        <Pagina>
            <div className="flex flex-col w-full min-h-screen bg-gradient-to-b from-[#c1ff72] to-[#003c02]">

                <header className="w-full h-20 bg-white flex items-center shadow-md px-6 z-10 relative">
                    <div className="flex justify-between items-center w-full">
                        <NavLink
                            to="/transferencia"
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

                <div className="w-full bg-transparent p-10">
                    <strong className="text-lg text-[#003c02] font-semibold">Quanto você quer pagar?</strong>
                    <p className="text-sm mt-1 text-[#003c02]">
                        Você vai pagar para <strong>{clienteDestino.login}</strong>
                    </p>

                    <div className="relative mt-4">
                        <input
                            type="text"
                            value={valor}
                            onChange={formatarValor}
                            placeholder="R$ 0,00"
                            className="
                                w-full h-20 bg-white text-gray-800 text-3xl font-semibold
                                rounded-xl shadow-md pl-5 pr-14 focus:outline-none
                            "
                        />
                        {valor && (
                            <button
                                onClick={() => setValor("")}
                                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-500 transition cursor-pointer"
                            >
                                <CircleX className="w-6 h-6" />
                            </button>
                        )}
                    </div>
                    <button onClick={realizandoTransferencia} className=" w-36 mt-4 h-12 border border-[#003c0a]/0 text-white bg-[#003c0a] hover:bg-white hover:text-[#003c0a] hover:border-[#003c0a] transition-colors duration-300 cursor-pointer rounded-4xl">Avançar</button>
                </div>

                <div className="bg-transparent w-full  flex flex-col items-center gap-4 mt-2">

                    <div className="flex gap-4">
                        <button
                            onClick={() => adicionarValor(1000)}
                            className="pix-btn"
                        >
                            +R$ 10
                        </button>

                        <button
                            onClick={() => adicionarValor(2000)}
                            className="pix-btn"
                        >
                            +R$ 20
                        </button>

                        <button
                            onClick={() => adicionarValor(5000)}
                            className="pix-btn"
                        >
                            +R$ 50
                        </button>
                    </div>

                    <button
                        onClick={() => adicionarValor(10000)}
                        className="pix-btn w-40"
                    >
                        +R$ 100
                    </button>

                    <div className="w-full mt-6 flex justify-center">
                        <div className="w-full max-w-md">
                            <Cartao nome={cliente?.login} saldo={conta?.saldo} />
                        </div>
                    </div>
                </div>
            </div>
        </Pagina>
    );
}
