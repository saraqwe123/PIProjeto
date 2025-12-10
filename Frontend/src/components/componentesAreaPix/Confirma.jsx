import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

export function Confirma(props) {
  const [showPass, setShowPass] = useState(false);
  const informacoesTransferencia = props.informacoesTransferencia
  const [transferencia, setTransferencia] = useState({ idconta: informacoesTransferencia.idconta, idcontadestino: informacoesTransferencia.idcontadestino, valor: informacoesTransferencia.valor, datatransf: informacoesTransferencia.datatransf, comentario: informacoesTransferencia.comentario, chavedestino: informacoesTransferencia.chavedestino, senha: "" })
  async function realizarTransferencia(e) {
    e.preventDefault();
    try {
      const resposta = await fetch("http://localhost:3001/Transferencia", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transferencia),
      });

      if (!resposta.ok) {
        throw new Error("Erro ao realizar transferência");
      }

      const transf = await resposta.json();

      const contaAtualizadaResposta = await fetch(`http://localhost:3001/Contas/${transferencia.idconta}`);
      const contaAtualizada = await contaAtualizadaResposta.json();

      localStorage.setItem("conta", JSON.stringify(contaAtualizada));

      const transferenciasAtuais = JSON.parse(
        localStorage.getItem("transferencia")
      ) || [];

      transferenciasAtuais.push(transf);

      localStorage.setItem(
        "transferencia",
        JSON.stringify(transferenciasAtuais)
      );

      if (props.onClose) props.onClose();

    } catch (error) {
      console.error("Erro no cadastro:", error);
      alert("Ocorreu um erro ao realizar o pagamento.");
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <form onSubmit={realizarTransferencia} className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 animate-fade-in">

        <header className="text-xl font-semibold text-gray-800 text-center mb-4">
          Você vai pagar
          <span className="text-green-600 font-bold"> {props.dinheiro} </span>
          para
          <span className="font-bold"> {props.nome}</span>
        </header>

        <div className="bg-gray-100 rounded-xl p-4 mb-6">
          <h1 className="text-lg font-medium text-gray-700">Saldo</h1>
          <p className="text-gray-600">
            Valor disponível:
            <span className="font-semibold text-green-700"> R$ {props.saldoDisponivel}</span>
          </p>
        </div>

        <button type="submit" className="w-full border border-green-500/0 hover:border-green-500 bg-green-600 hover:bg-white text-white hover:text-green-500 py-3 rounded-xl font-semibold transition-all shadow-md active:scale-95 cursor-pointer duration-300">
          Confirmar Pagamento
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
