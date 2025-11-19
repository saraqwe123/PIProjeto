import { Pagina } from "../components/Pagina";
import { ArrowRight } from "lucide-react";
import { useState } from "react"


export function Cadastro() {
  const [foto, setFoto] = useState(null);

  const adicionarF = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFoto(URL.createObjectURL(file));
    }
  };

  return (
    <Pagina>
      <div className="lg:flex flex-row w-full h-screen bg-[#2e2d2d] fixed">
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
            <form className="w-full max-w-md bg-white p-6 flex flex-col gap-4 shadow-lg overflow-y-auto max-h-[90vh]">

              <div className=" flex justify-center items-center h-28 w-full">

              <label htmlFor="fotoUpload" className="cursor-pointer">
                <img
                  src={foto || "imagens/pessoa.svg"}
                  alt="Foto de perfil"
                  className="w-36 h-36 rounded-full object-cover border-2 border-gray-300 hover:opacity-80 transition"
                />
              </label>

              <input
                  type="file"
                  id="fotoUpload"
                  accept="image/*"
                  className="hidden"
                  onChange={adicionarF}
                />
              </div>

              <h1 className="text-2xl font-bold text-center mb-2">Cadastro Cliente</h1>

              <section>
                <h3 className="font-semibold mb-1">Dados Pessoais</h3>
                <input type="text" placeholder="Nome completo" className="w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6dd63a] focus:border-transparent rounded-lg p-2" />
                <div className="flex gap-2 mt-2">
                  <input type="text" placeholder="CPF" className="w-1/2 broder-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6dd63a] focus:border-transparent rounded-lg p-2 text-sm" />
                  <input type="date" placeholder="Data Nasc." className="w-1/2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6dd63a] focus:border-transparent rounded-lg p-2 text-gray-500" />
                </div>
                <div className="flex gap-2 mt-2">
                  <input type="text" placeholder="E-mail" className="w-1/2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6dd63a] focus:border-transparent rounded-lg p-2" />
                  <input type="text" placeholder="Telefone" className="w-1/2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6dd63a] focus:border-transparent rounded-lg p-2" />
                </div>
              </section>

              <section>
                <h3 className="font-semibold mt-4 mb-1">Endereço</h3>
                <input type="text" placeholder="Rua" className="w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6dd63a] focus:border-transparent rounded-lg p-2" />
                <div className="flex gap-2 mt-2">
                  <input type="text" placeholder="Número" className="w-1/2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6dd63a] focus:border-transparent rounded-lg p-2" />
                  <input type="text" placeholder="Complemento" className="w-1/2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6dd63a] focus:border-transparent rounded-lg p-2" />
                </div>
                <div className="flex gap-2 mt-2">
                  <input type="text" placeholder="Bairro" className="w-1/2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6dd63a] focus:border-transparent rounded-lg p-2" />
                  <input type="text" placeholder="Estado" className="w-1/2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6dd63a] focus:border-transparent rounded-lg p-2" />
                </div>
                <div className="flex gap-2 mt-2">
                  <input type="text" placeholder="Cidade" className="w-1/2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6dd63a] focus:border-transparent rounded-lg p-2" />
                  <input type="text" placeholder="CEP" className="w-1/2 bg-gray-100 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6dd63a] focus:border-transparent" />
                </div>
              </section>

              <section>
                <h3 className="font-semibold mt-4 mb-1">Chave Pix</h3>
                <p className="text-sm text-gray-600 mb-5">Escolha como receber no MonoCoin</p>

                <div className="flex flex-col gap-2">
                  {[
                    "CPF – 00000000000",
                    "Telefone – 44 99894-836",
                    "Email – xxxxxxxx@gmail.com",
                    "Chave aleatória – yfufoc-8-6fdrss"
                  ].map((item, index) => (
                    <input
                      key={index}
                      placeholder={item}
                      className="flex items-center bg-gray-100 rounded-lg p-2 shadow-sm"
                    />
                  ))}
                </div>
              </section>
              <div className="w-20 h-full p-11 hidden lg:block">
              </div>
              <button
                type="submit"
                className="w-10 h-10 rounded-full bg-[#00ec6a] hover:bg-[#00d65a] transition flex items-center justify-center rigth border-1 fixed top-5/6 sm:left-11/12 left-80"
              >
                <ArrowRight className="w-5 h-5 text-black left-14" />
              </button>
            </form>

            <img src="imagens/ondas.svg" alt="" className="sm:w-1/3  w-full fixed top-3/4 sm:mt-5 hidden lg:block" />
          </div>
        </div>

      </div>
    </Pagina>
  );
}