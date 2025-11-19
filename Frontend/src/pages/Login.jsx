import { useContext, useState } from "react";
import { Pagina } from "../components/Pagina";
import bcrypt from 'bcryptjs'
import { Link, useNavigate } from "react-router-dom";
import { DadosContext } from "../context/DadosContext";
import { Eye, EyeOff } from "lucide-react";


export function Login() {
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const { dados } = useContext(DadosContext)
  const navigate = useNavigate()

  const verificarLogin = async (e) => {
    e.preventDefault();

    for (let i = 0; i < dados.cliente.length; i++) {
      const usuario = dados.cliente[i];

      const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

      if (login === usuario.login && senhaCorreta) {
        navigate("/inicio");
        return;
      }
    }

    alert("Login ou senha inválidos!");
  };





  return (
    <Pagina>
      <div className="flex flex-col lg:flex-row w-full min-h-screen bg-[#2e2d2d]">
        <div className="w-full h-screen flex flex-row">
          <div className="w-2/3 h-9/10 bg-gradient-to-r from-[#0097b2] to-[#7ed957] hidden lg:flex flex-col justify-center items-center">
            <img src="imagens/logoApp.svg" alt="" className="w-screen h-1/3 hidden lg:block" />
            <br />
            <p className="w-2/3 h-1/2 text-justify text-amber-50 hidden lg:block">
              O Nubank é uma fintech brasileira que oferece uma gama completa de serviços financeiros digitais, incluindo cartão de crédito, conta digital gratuita, empréstimos, seguros e investimentos. Fundado em 2013 para eliminar a burocracia, o Nubank é conhecido por sua simplicidade, transparência e por ser totalmente gerenciado via aplicativo móvel.
            </p>
            <img src="imagens/quadrados.svg" alt="" className="w-sreen h-full fixed left-2 hidden lg:block" />
            <img src="imagens/crianca.svg" alt="" className="fixed w-1/3 h-1/2 right-1/4 bottom-0 hidden lg:block" />
          </div>
          <div className="w-full p-5 lg:w-1/3 min-h-screen bg-[#2e2d2d] flex justify-center items-center">
            <form action="" method="" onSubmit={(e) => verificarLogin(e)} className="w-11/12 sm:w-3/4 h-11/12 md:w-2/3 lg:w-5/6 bg-white rounded-2xl flex flex-col justify-center items-center p-6 shadow-lg">
              <img src="imagens/seguranca.svg" alt="" className="sm:w-1/4 sm:h-1/4 h-44 w-44 fixed top-0 sm:top-10 hidden lg:block" />

              <h1 className="text-2xl font-bold">Login</h1>
              <br />
              <div className="flex flex-col">
                <label htmlFor="" className="w-3/4 p-2">Usuário</label>
                <input type="text" placeholder="Fulano de Tal" className=" w-60 bg-gray-100 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6dd63a] focus:border-transparent" value={login} onChange={(e) => setLogin(e.target.value)} />
              </div>
              <div className="flex flex-col m-5 relative">
                <label htmlFor="" className="p-2 w-3/4">Senha</label>

                <input
                  type={mostrarSenha ? "text" : "password"}
                  placeholder="********"
                  className="w-60 bg-gray-100 rounded-lg p-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#6dd63a] focus:border-transparent"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />

                <button
                  type="button"
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                  className="absolute right-3 top-12 text-gray-600"
                >
                  {mostrarSenha ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <button type="submit" className="m-5 w-1/2 h-10 rounded-2xl bg-[#00ec6a]">Entrar</button>
              <Link to='/cadastro'>Não tem conta? Cadastre-se agora</Link>

            </form>
            <img src="imagens/ondas.svg" alt="" className="sm:w-1/3 w-full fixed top-3/4" />
          </div>
        </div>

      </div>
    </Pagina>
  );
}