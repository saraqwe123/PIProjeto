import { Pagina } from "../components/Pagina";

export function Login() {
  return (
    <Pagina>
      <div className="flex flex-row w-full h-screen"> 

        <div className="w-3/4 h-full">
          <img src="/imagens/login.svg" alt="" className="h-full w-full"/>
        </div>
        <div>
          <form action="" method="">
            <label>Login</label>
            <br/>
            <input id="" name="" placeholder="Digite seu login..." />
            <br/>
            <label>Senha</label>
            <br/>
            <input id="" name="" placeholder="Digite sua senha..." />
            <br/>
            <button>Entrar</button>
          </form>
        </div>
      </div>
    </Pagina>
  );
}