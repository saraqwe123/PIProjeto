import { useState } from "react";
import { Pagina } from "../components/Pagina";
import {
  ArrowBigRight,
  BadgeQuestionMarkIcon,
  BellIcon,
  EyeIcon,
  EyeOffIcon,
  FileTextIcon,
  LineChartIcon,
  MessageCircleMoreIcon,
  SearchIcon,
  SendIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export function PaginaInicial() {
  const [showBalance, setShowBalance] = useState(false);
  const [showMenu, setShowMenu] = useState(false)
  const [showFormUpdate, setShowFormUpdate] = useState(false)
  const [showAccountData, setShowAccountData] = useState(false)
  const [showChangePhoto, setShowChangePhoto] = useState(false)
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate()

  const toggleBalance = () => {
    setShowBalance((prev) => !prev);
  };

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  
  const toggleFormUpdate = () => {
    setShowFormUpdate((prev) => !prev);
  };
  
  const toggleAccountData = () => {
    setShowAccountData((prev) => !prev);
  };

  const toggleChangePhoto = () => {
    setShowChangePhoto((prev) => !prev);
  };
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Pagina>
      <div className="flex flex-wrap w-full h-full min-h-screen">
        <div className="w-full md:w-2/3 flex flex-col items-center bg-black p-4">
          <div className="flex flex-col md:flex-row w-full items-center justify-between gap-4 mt-3">
            <div className="relative">
              <img
                src={imagePreview}
                alt=""
                className="bg-gray-300 object-contain rounded-full w-20 h-20 cursor-pointer"
                onClick={toggleMenu}
              />

              {showMenu && (
                <div className="absolute top-12  bg-white text-black rounded-lg shadow-lg z-50 p-4 w-64">
                  <ul className="flex flex-col gap-2">
                    <li className="hover:text-[#6dd63a] cursor-pointer" onClick={toggleFormUpdate}>Atualizar dados cadastrais</li>
                    <li className="hover:text-[#6dd63a] cursor-pointer" onClick={toggleAccountData}>Dados da conta</li>
                    <li className="hover:text-[#6dd63a] cursor-pointer" onClick={toggleChangePhoto}>Atualizar foto</li>
                    <li className="hover:text-[#6dd63a] cursor-pointer">Mudar chave pix</li>
                    <li className="hover:text-red-500 cursor-pointer" onClick={() => navigate("/")}>Sair</li>
                  </ul>
                </div>
              )}
              
              {showFormUpdate && (
                <div className="absolute top-12 bg-white text-black rounded-xl shadow-xl z-50 p-6 w-80">
                  <h1 className="text-lg font-bold text-gray-800 mb-2">Atualize seu cadastro</h1>
                  <p className="text-sm text-gray-600 mb-4">
                    Confirme se as informações sobre você estão atualizadas.
                  </p>

                  <form className="flex flex-col gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6dd63a] focus:border-transparent"
                        placeholder="(xx) xxxxx-xxxx"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6dd63a] focus:border-transparent"
                        placeholder="seuemail@exemplo.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Endereço</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6dd63a] focus:border-transparent"
                        placeholder="Rua, número, bairro"
                      />
                    </div>
                    <div className="w-full">

                      <button
                        type="submit"
                        className="mt-2 w-full bg-[#6dd63a] text-white py-2 border cursor-pointer rounded-md hover:border-[#57b72e] hover:bg-white hover:text-[#57b72e] transition-colors font-semibold"
                      >
                        Atualizar
                      </button>
                      <button
                        onClick={() => setShowFormUpdate(false)}
                        className="mt-6 w-full bg-[#e21e1e] text-white py-2 border cursor-pointer rounded-md hover:bg-white hover:border-[#e21e1e] hover:text-[#e21e1e] transition-colors font-semibold"
                      >
                        Fechar
                      </button>
                    </div>
                  </form>
                </div>
              )}
              
              {showAccountData && (
                <div className="absolute top-12 bg-white text-black rounded-xl shadow-xl z-50 p-6 w-80">
                  <h1 className="text-lg font-semibold text-gray-800 mb-3">Dados da Conta</h1>

                  <div className="flex flex-col gap-3 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <span className="font-medium">Nome:</span>
                      <span>João da Silva</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="font-medium">CPF:</span>
                      <span>***.456.789-00</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="font-medium">Agência:</span>
                      <span>1234</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="font-medium">Conta:</span>
                      <span>56789-0</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="font-medium">Tipo:</span>
                      <span>Conta Corrente</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="font-medium">Banco:</span>
                      <span>MonoCoin</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowAccountData(false)}
                    className="mt-6 w-full bg-[#e21e1e] text-white py-2 border cursor-pointer rounded-md hover:bg-white hover:border-[#e21e1e] hover:text-[#e21e1e] transition-colors font-semibold"
                  >
                    Fechar
                  </button>
                </div>
              )}
              
              {showChangePhoto && (
              <div className="absolute top-12 bg-white text-black rounded-xl shadow-xl z-50 p-6 w-80">
                <h1 className="text-lg font-semibold text-gray-800 mb-4">Foto de Perfil</h1>

                <label
                  htmlFor="image-upload"
                  className="flex flex-col items-center justify-center w-full gap-2 cursor-pointer group"
                >
                  <div className="w-32 h-32 rounded-full border-4 border-dashed border-gray-300 group-hover:border-[#6dd63a] overflow-hidden transition-all">
                    <img
                      src={imagePreview}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-[#6dd63a] transition-colors">
                    Clique para alterar a imagem
                  </span>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>

                <button
                  onClick={() => setShowChangePhoto(false)}
                  className="mt-6 w-full bg-[#e21e1e] text-white py-2 border cursor-pointer rounded-md hover:bg-white hover:border-[#e21e1e] hover:text-[#e21e1e] transition-colors font-semibold"
                >
                  Fechar
                </button>
              </div>
              )}


            </div>

            <div className="relative w-full md:w-96">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
              <input
                type="text"
                className="bg-gray-300 rounded-full w-full h-10 pl-10 pr-4"
                placeholder="Buscar..."
              />
            </div>

            <div className="text-gray-300 flex justify-around items-center w-full md:w-40 h-10">
              <BadgeQuestionMarkIcon className="hover:text-[#6dd63a] transition-colors" />
              <MessageCircleMoreIcon className="hover:text-[#6dd63a] transition-colors" />
              <BellIcon className="hover:text-[#6dd63a] transition-colors" />
            </div>
          </div>

          <h1 className="text-white text-center text-xl md:text-5xl mt-10 px-4">
            Seja bem-vindo ao Mono
            <span className="text-[#6dd63a] font-bold">Coin</span>!
          </h1>

          <div className="w-full h-full flex flex-col p-10 justify-end mb-5">
            <h1 className="text-white p-5 text-4xl">Meu cartão</h1>

            <div className="w-full md:w-2/3 lg:h-1/2 h-auto bg-white rounded-4xl p-4 flex flex-col md:flex-row justify-around gap-4">
              <div className="w-full md:w-1/2 p-4 flex items-start justify-evenly flex-col gap-4">
                Imagem
                <h1>Nome Completo</h1>
                <h2>**** **** **** 6789</h2>

                <div className="flex flex-col gap-1 w-full">
                  <div className="flex justify-around w-full">
                    <div className="h-1 bg-black rounded w-1/4"></div>
                    <div className="h-1 bg-black rounded w-1/4"></div>
                    <div className="h-1 bg-black rounded w-1/4"></div>
                  </div>
                  <div className="h-1 bg-black rounded w-full"></div>
                </div>
              </div>

              <div className="w-full md:w-1/2 p-4 rounded-xl flex flex-col justify-around items-start gap-4">
                <div className="flex flex-col w-full">
                  <span className="text-sm">Saldo disponível</span>
                  <div className="flex items-center justify-between w-full mt-2">
                    <p className="text-2xl font-bold tracking-wide">
                      {showBalance ? "R$ 2.450,00" : "R$ ••••••"}
                    </p>
                    <button
                      onClick={toggleBalance}
                      className="hover:text-[#003c0a] transition-colors"
                      aria-label="Mostrar ou ocultar saldo"
                    >
                      {showBalance ? (
                        <EyeOffIcon className="w-6 h-6" />
                      ) : (
                        <EyeIcon className="w-6 h-6" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <p className="text-sm">Última atualização: 01/10/2025</p>
                  <div className="w-full h-1 bg-[#6dd63a] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="w-full md:w-1/3 md:flex flex-col hidden md:h-full border-t md:border-t-0 md:border-l border-gray-700">
          <div className="w-full md:h-1/3 border-b border-gray-700 relative h-28">
            <h1 className="flex flex-row items-center justify-start text-xl md:text-2xl p-4 gap-2">
              <strong>Área Pix</strong>
              <ArrowBigRight className="w-5 h-5 md:w-6 md:h-6" />
            </h1>
            <SendIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-[#003c0a] transition-colors text-[#6dd63a] w-10 h-10 md:w-12 md:h-12" />
          </div>

          <div className="w-full md:h-1/3 border-b border-gray-700 relative h-28">
            <h1 className="flex flex-row items-center justify-start text-xl md:text-2xl p-4 gap-2">
              <strong>Extrato</strong>
              <ArrowBigRight className="w-5 h-5 md:w-6 md:h-6" />
            </h1>
            <FileTextIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-[#003c0a] transition-colors text-[#6dd63a] w-10 h-10 md:w-12 md:h-12" />
          </div>

          <div className="w-full md:h-1/3 border-b border-gray-700 relative h-28">
            <h1 className="flex flex-row items-center justify-start text-xl md:text-2xl p-4 gap-2">
              <strong>Investimento</strong>
              <ArrowBigRight className="w-5 h-5 md:w-6 md:h-6" />
            </h1>
            <LineChartIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-[#003c0a] transition-colors text-[#6dd63a] w-10 h-10 md:w-12 md:h-12" />
          </div>
        </aside>

        <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-sm border-t border-gray-700 z-40 flex justify-around p-2">
          <button
            className="flex flex-col items-center gap-1"
            aria-label="Área Pix"
          >
            <SendIcon className="w-8 h-8 text-[#6dd63a] hover:text-[#003c0a] transition-colors" />
            <span className="text-xs text-gray-700">Pix</span>
          </button>

          <button
            className="flex flex-col items-center gap-1"
            aria-label="Extrato"
          >
            <FileTextIcon className="w-8 h-8 text-[#6dd63a] hover:text-[#003c0a] transition-colors" />
            <span className="text-xs text-gray-700">Extrato</span>
          </button>

          <button
            className="flex flex-col items-center gap-1"
            aria-label="Investimento"
          >
            <LineChartIcon className="w-8 h-8 text-[#6dd63a] hover:text-[#003c0a] transition-colors" />
            <span className="text-xs text-gray-700">Invest.</span>
          </button>
        </div>
      </div>
    </Pagina>
  );
}
