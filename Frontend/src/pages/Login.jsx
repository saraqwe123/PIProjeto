import { Pagina } from "../components/Pagina";

export function Login() {
  return (
    <Pagina>
      <div className="flex flex-row w-full h-screen bg-[#2e2d2d]"> 
        <div className="w-full h-screen flex flex-row">
          <div className="w-2/3 h-9/10 bg-gradient-to-r from-[#0097b2] to-[#7ed957]">
            <img src="public/imagens/loginApp.svg" alt=""/>
          </div>
          <div className="w-1/3 h-20/21 bg-[#2e2d2d] flex justify-center items-center">
            <form action="" method="" className="w-90 h-19/21 bg-white rounded-2xl">
              <label htmlFor="">Login</label>
              <br/>
              <input type="text"/>
              <br/>
              <label htmlFor="">Senha</label>
              <br/>
              <input type="text"/>
            </form>
          </div>
        </div>
 
      </div>
    </Pagina>
  );
}