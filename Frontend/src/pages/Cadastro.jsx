import { Pagina } from "../components/Pagina";

export function Cadastro() {
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
          <div className="w-1/3 h-full bg-[#2e2d2d] flex justify-center items-center">
            <form className="w-full max-w-md bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-lg overflow-y-auto max-h-[90vh]">
              <img src="imagens/pessoa.svg" alt="" className="w-20 h-20 mx-auto mb-2" />

              <h1 className="text-2xl font-bold text-center mb-2">Cadastro Cliente</h1>

              {/* Dados Pessoais */}
              <section>
                <h3 className="font-semibold mb-1">Dados Pessoais</h3>
                <input type="text" placeholder="Nome completo" className="input" />
                <div className="flex gap-2 mt-2">
                  <input type="text" placeholder="CPF" className="input w-1/2" />
                  <input type="text" placeholder="Data Nasc." className="input w-1/2" />
                </div>
                <div className="flex gap-2 mt-2">
                  <input type="text" placeholder="E-mail" className="input w-1/2" />
                  <input type="text" placeholder="Telefone" className="input w-1/2" />
                </div>
              </section>

              {/* Endereço */}
              <section>
                <h3 className="font-semibold mt-4 mb-1">Endereço</h3>
                <input type="text" placeholder="Rua" className="input" />
                <div className="flex gap-2 mt-2">
                  <input type="text" placeholder="Número" className="input w-1/2" />
                  <input type="text" placeholder="Complemento" className="input w-1/2" />
                </div>
                <div className="flex gap-2 mt-2">
                  <input type="text" placeholder="Bairro" className="input w-1/2" />
                  <input type="text" placeholder="Estado" className="input w-1/2" />
                </div>
                <div className="flex gap-2 mt-2">
                  <input type="text" placeholder="Cidade" className="input w-1/2" />
                  <input type="text" placeholder="CEP" className="input w-1/2" />
                </div>
              </section>

              {/* Chave Pix */}
              <section>
                <h3 className="font-semibold mt-4 mb-1">Chave Pix</h3>
                <p className="text-sm text-gray-600 mb-2">Escolha como receber no MonoCoin</p>

                <div className="flex flex-col gap-2">
                  {[
                    "CPF – 00000000000",
                    "Telefone – 44 99894-836",
                    "Email – xxxxxxxx@gmail.com",
                    "Chave aleatória – yfufoc-8-6fdrss"
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-gray-100 rounded-lg p-2 shadow-sm text-sm"
                    >
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Botão */}
              <button
                type="submit"
                className="w-full mt-4 py-2 bg-[#00ec6a] text-black font-semibold rounded-2xl hover:bg-[#00d65a] transition"
              >
                Entrar
              </button>
            </form>
            <img src="imagens/ondas.svg" alt="" className="w-1/2 fixed top-3/4 left-1/2 -translate-x-1/2 " />
          </div>
        </div>

      </div>
    </Pagina>
  );
}