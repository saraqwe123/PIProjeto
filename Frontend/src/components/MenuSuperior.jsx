import { BadgeQuestionMarkIcon, BellIcon, MessageCircleMoreIcon, SearchIcon, UserCircle2Icon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function MenuSuperior() {
    const [showMenu, setShowMenu] = useState(false)
    const [showFormUpdate, setShowFormUpdate] = useState(false)
    const [showAccountData, setShowAccountData] = useState(false)
    const [showChangePix, setShowChangePix] = useState(false)
    const [showChangePhoto, setShowChangePhoto] = useState(false)
    const [imagePreview, setImagePreview] = useState(null);
    const navigate = useNavigate()


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

    const toggleChangePix = () => {
        setShowChangePix((prev) => !prev);
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
        <>
            <div className="flex flex-col md:flex-row w-full items-center justify-between gap-4 mt-3">
                <div className="relative">
                    {imagePreview ? (
                        <img
                            src=""
                            alt=""
                            className="bg-gray-300 object-contain rounded-full w-20 h-20 cursor-pointer"
                            onClick={toggleMenu}
                        />

                    ) : (
                        <UserCircle2Icon className="w-15 h-15 text-gray-300 hover:text-[#6dd63a] transition-all cursor-pointer" onClick={toggleMenu} />
                    )}

                    {showMenu && (
                        <div className="absolute top-12 bg-white text-black rounded-lg shadow-lg z-50 p-4 w-64">
                            <ul className="flex flex-col gap-2">
                                <li onClick={toggleFormUpdate} className="hover:text-[#6dd63a] cursor-pointer">
                                    Atualizar dados cadastrais
                                </li>
                                <li onClick={toggleAccountData} className="hover:text-[#6dd63a] cursor-pointer">
                                    Dados da conta
                                </li>
                                <li onClick={toggleChangePhoto} className="hover:text-[#6dd63a] cursor-pointer">
                                    Atualizar foto
                                </li>
                                <li onClick={toggleChangePix} className="hover:text-[#6dd63a] cursor-pointer">
                                    Mudar chave pix
                                </li>
                                <li onClick={() => navigate("/")} className="hover:text-red-500 cursor-pointer">
                                    Sair
                                </li>
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
                                        type="tel"
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

                    {showChangePix && (
                        <div className="absolute top-12 bg-white text-black rounded-xl shadow-xl z-50 p-6 w-80">
                            <h1 className="text-lg font-bold text-gray-800 mb-2">Atualize sua chave pix</h1>
                            <p className="text-sm text-gray-600 mb-4">
                                Confirme se a nova chave está atualizada.
                            </p>

                            <form className="flex flex-col gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Nova chave pix</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6dd63a] focus:border-transparent"
                                        placeholder="exemplodechave@gmail.com "
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
                                        onClick={() => setShowChangePix(false)}
                                        className="mt-6 w-full bg-[#e21e1e] text-white py-2 border cursor-pointer rounded-md hover:bg-white hover:border-[#e21e1e] hover:text-[#e21e1e] transition-colors font-semibold"
                                    >
                                        Fechar
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {showChangePhoto && (
                        <form className="absolute top-12 bg-white text-black rounded-xl shadow-xl z-50 p-6 w-80">
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
                                type="submit"
                                className="mt-2 w-full bg-[#6dd63a] text-white py-2 border cursor-pointer rounded-md hover:border-[#57b72e] hover:bg-white hover:text-[#57b72e] transition-colors font-semibold"
                            >
                                Atualizar
                            </button>

                            <button
                                onClick={() => setShowChangePhoto(false)}
                                className="mt-6 w-full bg-[#e21e1e] text-white py-2 border cursor-pointer rounded-md hover:bg-white hover:border-[#e21e1e] hover:text-[#e21e1e] transition-colors font-semibold"
                            >
                                Fechar
                            </button>
                        </form>
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
        </>
    )
}