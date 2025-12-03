import { BadgeQuestionMarkIcon, BellIcon, MessageCircleMoreIcon, SearchIcon, UserCircle2Icon } from "lucide-react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DadosContext } from "../context/DadosContext";

export function MenuSuperior() {
    const [showMenu, setShowMenu] = useState(false)
    const [showFormUpdate, setShowFormUpdate] = useState(false)
    const [showAccountData, setShowAccountData] = useState(false)
    const [showChangePix, setShowChangePix] = useState(false)
    const [showChangePhoto, setShowChangePhoto] = useState(false)
    const [imagePreview, setImagePreview] = useState(null);
    const [deletados, setDeletados] = useState([])
    const [atualizados, setAtualizados] = useState([])
    const [novoUsuario, setNovoUsuario] = useState({ senha: "", login: "", email: "", telefone: "", cep: "", rua: "", numeroCasa: "", complemento: "", bairro: "", cidade: "", estado: ""})
    const navigate = useNavigate()
    const { dados, adicionarDados } = useContext(DadosContext)
    const cliente = JSON.parse(localStorage.getItem("usuario"));
    const conta = JSON.parse(localStorage.getItem("conta"));
    const endereco = JSON.parse(localStorage.getItem("endereco"));



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

    const handleClose = (e) => {
        localStorage.clear()
        navigate("/")
    };

    async function handleExcluir(e) {
        try {

            const resposta = await fetch(`http://localhost:3000/EnderecosExcluir/${endereco.id}`, {
                method: "put",

            })
            if (!resposta.ok) {
                console.error(resposta);
                const texto = await resposta.text()
            } else {

                setDeletados((prevDeletados) => [...prevDeletados, endereco.id])
                const novosDados = {
                    ...dados,
                    enderecos: dados.enderecos?.filter(dado => dado.id !== endereco.id),
                };
                adicionarDados(novosDados);
            }
            const respostaCliente = await fetch(`http://localhost:3000/ClientesExcluir/${cliente.id}`, {
                method: "put",

            })
            if (!respostaCliente.ok) {
                console.error(respostaCliente);
                const texto = await respostaCliente.text()
            } else {

                setDeletados((prevDeletados) => [...prevDeletados, cliente.id])
                const novosDados = {
                    ...dados,
                    clientes: dados.clientes?.filter(dado => dado.id !== cliente.id),
                };
                adicionarDados(novosDados);
            }
            const respostaConta = await fetch(`http://localhost:3000/ContasExcluir/${conta.id}`, {
                method: "put",

            })
            if (!respostaConta.ok) {
                console.error(respostaConta);
                const texto = await respostaConta.text()
            } else {

                setDeletados((prevDeletados) => [...prevDeletados, conta.id])
                const novosDados = {
                    ...dados,
                    contas: dados.contas?.filter(dado => dado.id !== conta.id),
                };
                adicionarDados(novosDados);
            }
            localStorage.clear()
            navigate("/")

        } catch (error) {
            console.error(error);

        }
    };

    async function handleAtualizar(e) {
        e.preventDefault();
        try {
            const enderecoData = {
                rua: novoUsuario.rua,
                numeroCasa: novoUsuario.numeroCasa,
                complemento: novoUsuario.complemento,
                bairro: novoUsuario.bairro,
                cidade: novoUsuario.cidade,
                estado: novoUsuario.estado,
                cep: novoUsuario.cep,
            };
    
            const clienteData = {
                login: novoUsuario.login,
                senha: novoUsuario.senha,
                email: novoUsuario.email,
                telefone: novoUsuario.telefone,
            };
    
            await fetch(`http://localhost:3000/Enderecos/${endereco.id}`, {
                method: "put",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(enderecoData),
            });
    
            await fetch(`http://localhost:3000/Clientes/${cliente.id}`, {
                method: "put",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(clienteData),
            });
    
            const novosDados = {
                ...dados,
                enderecos: dados.enderecos?.map(e => e.id === endereco.id ? { ...e, ...enderecoData } : e),
                clientes: dados.clientes?.map(c => c.id === cliente.id ? { ...c, ...clienteData } : c),
            };
            adicionarDados(novosDados);
    
            const enderecoAtualizado = novosDados.enderecos.find(e => e.id === endereco.id);
            const usuarioAtualizado = novosDados.clientes.find(c => c.id === cliente.id);
    
            if (enderecoAtualizado) localStorage.setItem("endereco", JSON.stringify(enderecoAtualizado));
            if (usuarioAtualizado) localStorage.setItem("usuario", JSON.stringify(usuarioAtualizado));
    
        } catch (error) {
            console.error(error);
        }
    }
    

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
                        <div className="absolute left-[-130px] lg:left-0 top-12 bg-white text-black rounded-lg shadow-lg z-50 p-4 w-64">
                            <ul className="flex flex-col gap-2">
                                <li onClick={toggleFormUpdate} className="hover:text-[#6dd63a] cursor-pointer">
                                    Atualizar dados cadastrais
                                </li>
                                <li onClick={toggleAccountData} className="hover:text-[#6dd63a] cursor-pointer">
                                    Dados da conta
                                </li>
                                {/* <li onClick={toggleChangePhoto} className="hover:text-[#6dd63a] cursor-pointer">
                                    Atualizar foto
                                </li> */}
                                <li onClick={toggleChangePix} className="hover:text-[#6dd63a] cursor-pointer">
                                    Mudar chave pix
                                </li>
                                <li onClick={handleClose} className="hover:text-red-500 cursor-pointer">
                                    Sair
                                </li>
                                <li onClick={handleExcluir} className="hover:text-red-500 cursor-pointer">
                                    Excluir conta
                                </li>
                            </ul>
                        </div>
                    )}

                    {showFormUpdate && (
                        <div className="absolute left-[-130px] lg:left-0 top-12 bg-white text-black rounded-xl shadow-xl z-50 p-6 w-80 max-h-[70vh] overflow-y-auto">
                            <h1 className="text-lg font-bold text-gray-800 mb-2">Atualize seu cadastro</h1>
                            <p className="text-sm text-gray-600 mb-4">
                                Confirme se as informações sobre você estão atualizadas.
                            </p>

                            <form className="flex flex-col gap-6" onSubmit={handleAtualizar}>
                                <div>
                                    <h2 className="text-md font-semibold text-gray-700 mb-2">Endereço</h2>
                                    <div className="flex flex-col gap-3">
                                        <input
                                            type="text"
                                            placeholder="CEP"
                                            value={novoUsuario.cep}
                                            onChange={(e) => setNovoUsuario({ ...novoUsuario, cep: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6dd63a] focus:border-transparent"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Rua"
                                            value={novoUsuario.rua}
                                            onChange={(e) => setNovoUsuario({ ...novoUsuario, rua: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6dd63a] focus:border-transparent"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Número da casa"
                                            value={novoUsuario.numeroCasa}
                                            onChange={(e) => setNovoUsuario({ ...novoUsuario, numeroCasa: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6dd63a] focus:border-transparent"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Complemento"
                                            value={novoUsuario.complemento}
                                            onChange={(e) => setNovoUsuario({ ...novoUsuario, complemento: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6dd63a] focus:border-transparent"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Bairro"
                                            value={novoUsuario.bairro}
                                            onChange={(e) => setNovoUsuario({ ...novoUsuario, bairro: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6dd63a] focus:border-transparent"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Cidade"
                                            value={novoUsuario.cidade}
                                            onChange={(e) => setNovoUsuario({ ...novoUsuario, cidade: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6dd63a] focus:border-transparent"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Estado"
                                            value={novoUsuario.estado}
                                            onChange={(e) => setNovoUsuario({ ...novoUsuario, estado: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6dd63a] focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-md font-semibold text-gray-700 mb-2">Dados Pessoais</h2>
                                    <div className="flex flex-col gap-3">
                                        <input
                                            type="text"
                                            placeholder="Login"
                                            value={novoUsuario.login}
                                            onChange={(e) => setNovoUsuario({ ...novoUsuario, login: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6dd63a] focus:border-transparent"
                                        />
                                        <input
                                            type="password"
                                            placeholder="Senha"
                                            value={novoUsuario.senha}
                                            onChange={(e) => setNovoUsuario({ ...novoUsuario, senha: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6dd63a] focus:border-transparent"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            value={novoUsuario.email}
                                            onChange={(e) => setNovoUsuario({ ...novoUsuario, email: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6dd63a] focus:border-transparent"
                                        />
                                        <input
                                            type="tel"
                                            placeholder="Telefone"
                                            value={novoUsuario.telefone}
                                            onChange={(e) => setNovoUsuario({ ...novoUsuario, telefone: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6dd63a] focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 mt-2">
                                    <button
                                        type="submit"
                                        className="w-full bg-[#6dd63a] text-white py-2 border cursor-pointer rounded-md hover:border-[#57b72e] hover:bg-white hover:text-[#57b72e] transition-colors font-semibold"
                                    >
                                        Atualizar
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setShowFormUpdate(false)}
                                        className="w-full bg-[#e21e1e] text-white py-2 border cursor-pointer rounded-md hover:bg-white hover:border-[#e21e1e] hover:text-[#e21e1e] transition-colors font-semibold"
                                    >
                                        Fechar
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}


                    {showAccountData && (
                        <div className="absolute left-[-130px] lg:left-0 top-12 bg-white text-black rounded-xl shadow-xl z-50 p-6 w-80">
                            <h1 className="text-lg font-semibold text-gray-800 mb-3">Dados da Conta</h1>

                            <div className="flex flex-col gap-3 text-sm text-gray-700">
                                <div className="flex justify-between">
                                    <span className="font-medium">Nome:</span>
                                    <span>{cliente?.login}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="font-medium">CPF:</span>
                                    <span>{cliente?.cpf}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="font-medium">Telefone:</span>
                                    <span>{cliente?.telefone}</span>
                                </div>

                                <div className="flex justify-between items-start w-full">
                                    <span className="font-medium">Chave pix:</span>

                                    <details className="text-right w-fit cursor-pointer">
                                        <summary className="list-none text-blue-600 hover:underline">
                                            Mostrar
                                        </summary>

                                        <ul className="mt-1 flex flex-col gap-1 text-sm text-gray-700 max-w-[180px]">
                                            {conta?.chavepixcpf && <li className="truncate">{conta.chavepixcpf}</li>}
                                            {conta?.chavepixtel && <li className="truncate">{conta.chavepixtel}</li>}
                                            {conta?.chavepixaleatorio && (
                                                <li className="truncate" title={conta.chavepixaleatorio}>
                                                    {conta.chavepixaleatorio}
                                                </li>
                                            )}
                                            {conta?.chavepixemail && <li className="truncate">{conta.chavepixemail}</li>}
                                        </ul>
                                    </details>
                                </div>


                                <div className="flex justify-between">
                                    <span className="font-medium">Conta:</span>
                                    <span>{conta?.numerodaconta}</span>
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
                        <div className="absolute left-[-130px] lg:left-0 top-12 bg-white text-black rounded-xl shadow-xl z-50 p-6 w-80">
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
                        <form className="absolute left-[-130px] lg:left-0 top-12 bg-white text-black rounded-xl shadow-xl z-50 p-6 w-80">
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