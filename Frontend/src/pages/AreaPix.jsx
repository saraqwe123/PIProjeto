import { useState } from "react";
import { Pagina } from "../components/Pagina";
import { CircleArrowLeft, CircleQuestionMark, Copy, Key, MoveUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MudarChave } from "../components/componentesAreaPix/MudarChave";
import { InserirPix } from "../components/componentesAreaPix/InserirPix";


export function AreaPix() {
  const navigate = useNavigate();
  const [procura, setProcura] = useState("");
  const [showMudarPix, setShowMudarPix] = useState(false)
  const [showInserirPix, setShowInserirPix] = useState(false)
  const conta = JSON.parse(localStorage.getItem("conta"));




  const historicoPix = [
    { nome: "João Silva", hora: "09:14", tipo: "Pix", valor: -20 },
    { nome: "Maria Souza", hora: "10:20", tipo: "Pix", valor: 50 },
    { nome: "João Silva", hora: "11:30", tipo: "Pix", valor: -30 },
  ];


  const historicoFiltrado = historicoPix.filter((item) =>
    item.nome.toLowerCase().includes(procura.toLowerCase())
  );


  return (
    <Pagina>
      <div className="flex flex-col w-full h-screen">
        <header className="w-full h-15 bg-white flex items-center shadow-md relative z-10 px-6">
          <div className="flex justify-between items-center w-full">
            <button
              onClick={() => navigate("/inicio")}
              className="text-gray-700 hover:text-green-500 transition-colors"
            >
              <CircleArrowLeft className="w-6 h-6" />
            </button>


            <button className="text-gray-700 hover:text-green-500 transition-colors">
              <CircleQuestionMark className="w-6 h-6 mr-35" />
            </button>
          </div>


          <img
            src="imagens/logocriancas.png"
            alt="Logo"
            className="fixed top-0 right-0 w-35 h-auto object-contain z-50 pointer-events-none"
          />
        </header>


        <main className="w-full flex-1 bg-[#259337] flex flex-col items-start p-10">
          <p className="text-white font-bold text-xl mb-6 ml-10">Área Pix</p>
          <div className="flex gap-10 ml-10 flex-wrap">
            <div className="flex flex-col items-center">
              <button
                onClick={() => navigate('/transferencia')}
                className="group w-50 h-50 bg-[#c1ff72] rounded-2xl shadow-md flex justify-center items-center hover:bg-[#cfee9e] transition-colors"
              >
                <MoveUpRight className="w-20 h-50 transition-colors group-hover:text-[#4a8b00]" />
              </button>
              <p className="text-white mt-2">Transferência</p>
            </div>


            <div className="flex flex-col items-center">
              <button
                onClick={() => setShowMudarPix(true)}
                className="group w-50 h-50 bg-[#5ce1e6] rounded-2xl shadow-md flex justify-center items-center hover:bg-[#cfee9e] transition-colors"
              >
                <Key className="w-20 h-50 transition-colors group-hover:text-[#4a8b00]" />
              </button>
              <p className="text-white mt-2">Mudar Chave</p>
            </div>


            <div className="flex flex-col items-center">
              <button
                onClick={() => setShowInserirPix(true)}
                className="group w-50 h-50 bg-gradient-to-r from-[#5170ff] to-[#ff66e4] rounded-2xl shadow-md flex justify-center items-center hover:from-[#a1ff72] hover:to-[#cfee9e] transition-colors"
              >
                <Copy className="w-20 h-50 transition-colors group-hover:text-[#4a8b00]" />
              </button>
              <p className="text-white mt-2">Pix Copia e Cola</p>
            </div>


            <div className="flex flex-col items-center">
              <button
                onClick={() => navigate('/agendarpix')}
                className="group w-50 h-50 bg-gradient-to-r from-[#5170ff] to-[#7ed957] rounded-2xl shadow-md flex justify-center items-center hover:from-[#a1ff72] hover:to-[#cfee9e] transition-colors"
              >
                <Copy className="w-20 h-50 transition-colors group-hover:text-[#4a8b00]" />
              </button>
              <p className="text-white mt-2">Agendar Pix</p>
            </div>


          </div>
        </main>


        <hr className="h-1 bg-[#d9d9d9] border-[#d9d9d9]" />


        <div className="w-full flex-1 bg-[#003c0a] p-6 overflow-y-auto max-h-[300px]">
          <p className="text-white text-xl font-semibold mb-4 ml-5">Histórico</p>


          <div className="relative mb-4 ml-5">
            <input
              type="text"
              placeholder="Pesquisar por nome completo"
              value={procura}
              onChange={(e) => setProcura(e.target.value)}
              className="w-full rounded-full px-10 py-2 bg-[#d9d9d9] text-gray-700 focus:outline-none"
            />
          </div>


          {historicoFiltrado.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between text-white border-b border-gray-400 py-3 ml-5"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-5 h-5 rounded-full ${item.valor >= 0 ? "bg-green-400" : "bg-gray-500"
                    }`}
                ></div>
                <div>
                  <p className="font-medium">{item.nome}</p>
                  <p className="text-sm text-gray-300">{item.hora} - {item.tipo}</p>
                </div>
              </div>
              <p className={item.valor >= 0 ? "text-green-400" : "text-red-400"}>
                {item.valor >= 0 ? `+ R$ ${item.valor}` : `- R$ ${Math.abs(item.valor)}`}
              </p>
            </div>
          ))}
        </div>
      </div>


      {
        showMudarPix && (
          <MudarChave chavepixcpf={conta.chavepixcpf} />
        )
      }


      {
        showInserirPix && (
          <InserirPix />
        )
      }
    </Pagina>
  );
}




