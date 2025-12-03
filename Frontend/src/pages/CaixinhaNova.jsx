import { NavLink } from "react-router-dom";
import { MenuLateral } from "../components/MenuLateral";
import { MenuSuperior } from "../components/MenuSuperior";
import { Pagina } from "../components/Pagina";
import { ArrowBigUp, PlusIcon, SkipBack } from "lucide-react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MenuSuperiorSemBarra } from "../components/MenuSuperiorSemBarra";

export function CaixinhaNova() {
  const navigate = useNavigate();

  const cliente = JSON.parse(localStorage.getItem("usuario"));
  const conta = JSON.parse(localStorage.getItem("conta"));

  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("imediato");

  async function pegarImagemCachorro() {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      return data.message;
    } catch (error) {
      console.error("Erro ao pegar imagem do cachorro:", error);
      return "/imagens/imagensCaixinha/imagem3.png"; 
    }
  }
  
const criarCaixinha = async() => {

  const imagemAleatoria = await pegarImagemCachorro();

    const numero = parseFloat(valor);

    if (isNaN(numero) || numero <= 0) {
      alert("Digite um valor válido!");
      return;
    }

    if (numero > conta.saldo) {
      alert("Saldo insuficiente!");
      return;
    }

    const nova = {
      id: (conta.caixinhas?.length || 0) + 1,
      saldo: numero,
      tipo,
      criadoEm: new Date(),
      totalDepositado: numero,
      totalResgatado: 0,
      imagem: imagemAleatoria
    };

    conta.caixinhas = [...(conta.caixinhas || []), nova];
    conta.saldo -= numero;
    localStorage.setItem("conta", JSON.stringify(conta));

    try {
      await fetch("http://localhost:3001/enviarCaixinhaEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: cliente.email
        }),
      });
    } catch (error) {
      console.error("Erro ao enviar email:", error);
    }

    navigate("/investimentos/caixinha");
  };

  return (
    <Pagina>
      <MenuSuperiorSemBarra />
      <div className="h-full w-full flex flex-col p-6 text-white bg-black">
        <h1 className="text-3xl font-bold mb-6">Criar Nova Caixinha</h1>

        <label className="mb-2">Valor inicial:</label>
        <input
          type="number"
          placeholder="Digite o valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          className=" w-1/4 mb-4 px-4 py-2 rounded-xl text-black bg-white"
        />

        <label className="mb-2">Tipo de caixinha:</label>
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="w-1/4 mb-4 px-4 py-2 rounded-xl text-black bg-white"
        >
          <option value="imediato">Retirada imediata</option>
          <option value="prazo">Bloqueada (1 ano)</option>
        </select>

        <button
          onClick={criarCaixinha}
          className="w-1/4 bg-green-600 px-6 py-3 rounded-xl font-bold hover:bg-green-700"
        >
          Criar Caixinha
        </button>
      </div>
    </Pagina>
  );
}
