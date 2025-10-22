import { Pagina } from "../components/Pagina";

export function AreaPix() {
  return (
    <Pagina>
      <div className="flex flex-col w-full h-screen">
        <div className="w-full h-20 bg-white flex justify-center items-center">
          <button></button>
        </div>

        <div className="w-full flex-1 bg-[#259337] flex flex-col items-start p-10">
          <p className="text-white font-bold text-xl mb-6 ml-10">Área Pix</p>

          <div className="flex gap-6 ml-10 flex-wrap">
            <div className="w-50 h-50 bg-[#c1ff72] rounded-2xl shadow-md"></div>
            <p>Trasferência</p>
            <div className="w-50 h-50 bg-[#5ce1e6] rounded-2xl shadow-md"></div>
            <p>Mudar Chave</p>
            <div className="w-50 h-50 bg-gradient-to-r from-[#5170ff] to-[#ff66e4] rounded-2xl shadow-md"></div>
            <p>Pix Copia e Cola</p>
            <div className="w-50 h-50 bg-[#c1ff72] rounded-2xl shadow-md"></div>
            <p>Cobrar</p>
          </div>
        </div>

        <div className="w-full flex-1 bg-[#003c0a] flex justify-center items-center">
          <p className="text-white text-lg"></p>
        </div>
      </div>
    </Pagina>
  );
}
