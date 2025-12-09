import { CheckCircle, X } from "lucide-react";

export function Comprovante(props) {
  const informacoesTransferencia = props.informacoesTransferencia


  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 animate-fade-in relative">

        <button
          onClick={props.onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-red-500 transition cursor-pointer"
        >
          <X />
        </button>

        <div className="flex flex-col items-center mb-6">
          <CheckCircle className="w-16 h-16 text-green-500 mb-2" />
          <h1 className="text-2xl font-semibold text-gray-800">
            Transferência realizada
          </h1>
          <span className="text-gray-400 text-sm">
            {informacoesTransferencia.datatransf}
          </span>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center mb-6">
          <p className="text-sm text-gray-500">Valor transferido</p>
          <p className="text-3xl font-bold text-green-600">
            {props.dinheiro}
          </p>
        </div>

        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between">
            <span className="text-gray-400">Destinatário</span>
            <span className="font-medium">{props.nome}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Chave destino</span>
            <span className="font-medium">{informacoesTransferencia.chavedestino}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Comentário</span>
            <span className="font-medium">
              {informacoesTransferencia.comentario || "—"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Saldo atual</span>
            <span className="font-semibold text-green-600">
              R$ {Number(props.saldoDisponivel).toFixed(2)}
            </span>
          </div>
        </div>

        <button
          onClick={props.onClose}
          className="mt-6 w-full bg-green-600 hover:bg-green-100 text-white hover:text-green-600 border border-green-600/0 hover:border-green-600 py-3 rounded-xl font-semibold transition active:scale-95 cursor-pointer"
        >
          Fechar comprovante
        </button>
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
