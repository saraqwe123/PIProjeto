import { Pagina } from "../components/Pagina";

export function Login() {
  return (
    <Pagina>
      <div className="flex flex-row w-full h-screen bg-[#2e2d2d] fixed">
        <div className="w-full h-screen flex flex-row">
          <div className="w-2/3 h-9/10 bg-gradient-to-r from-[#0097b2] to-[#7ed957] flex flex-col justify-center items-center">
            <img src="imagens/logoApp.svg" alt="" className="w-screen h-1/3" />
            <br />
            <p className="w-2/3 h-1/2 text-justify text-amber-50">
              O Nubank é uma fintech brasileira que oferece uma gama completa de serviços financeiros digitais, incluindo cartão de crédito, conta digital gratuita, empréstimos, seguros e investimentos. Fundado em 2013 para eliminar a burocracia, o Nubank é conhecido por sua simplicidade, transparência e por ser totalmente gerenciado via aplicativo móvel.
            </p>
            <img src="imagens/quadrados.svg" alt="" className="w-sreen h-full fixed left-2" />
            <img src="imagens/crianca.svg" alt="" className="fixed w-1/3 h-1/2 right-1/4 bottom-0" />
          </div>
          <div className="w-1/3 h-20/21 bg-[#2e2d2d] flex justify-center items-center">
            <form action="" method="" className="w-90 h-19/21 bg-white rounded-2xl flex flex-col justify-center items-center">
              <img src="imagens/seguranca.svg" alt="" className="w-1/4 h-1/4 fixed top-0"/>

              <h1 className="text-2xl font-bold">Login</h1>
              <br/>
              <label htmlFor="" className="w-2/3">Usuário</label>
              <br />
              <input type="text" placeholder="Fulano de Tal" className="border-1 p-1 rounded-2xl" />
              <br/>
              <label htmlFor="" className="w-2/3">Senha</label>
              <br />
              <input type="text" placeholder="*********" className="border-1 p-1 rounded-2xl"/>
              <br/>
              <button className="w-1/2 h-10 rounded-2xl bg-[#00ec6a]">Entrar</button>
            </form>
            <img src="imagens/ondas.svg" alt="" className="w-1/3 fixed top-3/4" />
          </div>
        </div>

      </div>
    </Pagina>
  );
}