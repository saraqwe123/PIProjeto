import { Pagina } from "../components/Pagina";
import { useState } from "react";
import { CircleArrowLeft, CircleQuestionMark, Star } from "lucide-react";

export function Transferencia() {
  const [abaAtiva, setAbaAtiva] = useState("recentes");
  const [favoritos, setFavoritos] = useState([]);

  const contatosRecentes = [
    { nome: "Lara Deitos", banco: "Banco do Brasil" },
    { nome: "Nati Soares", banco: "Caixa Econômica" },

  ];

  const toggleFavorito = (contato) => {
    const jaFavorito = favoritos.some((f) => f.nome === contato.nome);
    if (jaFavorito) {
      setFavoritos(favoritos.filter((f) => f.nome !== contato.nome));
    } else {
      setFavoritos([...favoritos, contato]);
    }
    setAbaAtiva("favoritos");
  };

  return (
    <Pagina>
      <div className="flex flex-col w-full h-screen">
        <header className="w-full h-15 bg-white flex items-center shadow-md relative z-10 px-6">
          <div className="flex justify-between items-center w-full">
            <button
              onClick={() =>
                (window.location.href = "http://localhost:5173/areapix")
              }
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

        <main className="w-full bg-[#c1ff72] flex flex-col items-start p-10 h-[35vh]">
          <p className="text-black font-bold text-xl mb-6">
            Insira uma chave pix
          </p>
          <input
            type="text"
            placeholder="CPF/CNPJ, celular, e-mail ou aleatória"
            className="w-full h-15 bg-[#d9d9d9] text-gray-700 px-5 py-2 rounded-md focus:outline-none"
          />
        </main>

        <hr className="h-1 bg-[#d9d9d9] border-[#d9d9d9]" />

        <div className="w-full flex flex-col bg-[#003c0a] text-white p-6 flex-1 overflow-y-auto">
          <div className="flex gap-6 mb-4 ml-5">
            <button
              onClick={() => setAbaAtiva("recentes")}
              className={`font-semibold transition-colors ${
                abaAtiva === "recentes"
                  ? "text-white border-b-2 border-[#6dd63a]"
                  : "text-gray-300 hover:text-white hover:border-b-2 hover:border-[#6dd63a]"
              }`}
            >
              Recentes
            </button>

            <button
              onClick={() => setAbaAtiva("favoritos")}
              className={`font-semibold transition-colors ${
                abaAtiva === "favoritos"
                  ? "text-white border-b-2 border-[#6dd63a]"
                  : "text-gray-300 hover:text-white hover:border-b-2 hover:border-[#6dd63a]"
              }`}
            >
              Favoritos
            </button>
          </div>
          {abaAtiva === "recentes" && (
            <div className="flex flex-col gap-3">
              {contatosRecentes.map((contato, index) => {
                const favorito = favoritos.some(
                  (f) => f.nome === contato.nome
                );
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between ml-5 text-white border-b border-gray-400 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-gray-500 rounded-full"></div>
                      <div>
                        <p className="font-medium">{contato.nome}</p>
                        <p className="text-sm text-gray-300">{contato.banco}</p>
                      </div>
                    </div>
                    <button onClick={() => toggleFavorito(contato)}>
                      <Star
                        className={`w-5 h-5 cursor-pointer transition-colors ${
                          favorito
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-white"
                        }`}
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {abaAtiva === "favoritos" && (
            <div className="mt-4 ml-5">
              {favoritos.length > 0 ? (
                favoritos.map((f, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between text-white border-b border-gray-400 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-gray-500 rounded-full"></div>
                      <div>
                        <p className="font-medium">{f.nome}</p>
                        <p className="text-sm text-gray-300">{f.banco}</p>
                      </div>
                    </div>
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  </div>
                ))
              ) : (
                <p className="text-gray-300 italic">
                  Nenhum favorito ainda ⭐
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </Pagina>
  );
}
