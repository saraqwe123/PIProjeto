import { NavLink } from "react-router-dom";
import { MenuLateral } from "../components/MenuLateral";
import { MenuSuperior } from "../components/MenuSuperior";
import { Pagina } from "../components/Pagina";
import { ArrowBigUp, PlusIcon, SkipBack } from "lucide-react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Caixinha() {
    const navigate = useNavigate();

    const conta = JSON.parse(localStorage.getItem("conta"));
    const minhasCaixinhas = conta.caixinhas || [];

    return (
        <Pagina>
            <div className="flex flex-wrap w-full h-full min-h-screen">
                <div className="w-full md:w-2/3 flex flex-col items-center bg-black p-4">
                    <MenuSuperior />
                    <section className="mt-6 px-4 self-start">
                        <h1 className="text-white mb-2">Minhas Caixinhas</h1>
                        <div className="flex flex-row">
                            {minhasCaixinhas.map((c) => (
                                <div
                                    key={c.id}
                                    className="w-44 h-44 m-2 lg:w-56 lg:h-56 bg-white flex justify-center items-center rounded-2xl cursor-pointer"
                                    onClick={() => navigate(`/investimentos/caixinha/${c.id}`)}
                                >
                                    <img
                                        src={c.imagem} 
                                        alt={`Caixinha ${c.id}`}
                                        className="object-cover w-full h-full rounded-2xl"
                                    />
                                </div>
                            ))}
                        </div>
                        <div
                            className="w-44 h-44 m-2 lg:w-56 lg:h-56 bg-gray-200 flex justify-center items-center rounded-2xl cursor-pointer hover:bg-gray-300"
                            onClick={() => navigate("/investimentos/caixinha/caixinhanova")}
                        >
                            <PlusIcon size={72} className="text-gray-500" />
                        </div>
                    </section>
                    <section className="mt-6 px-4 self-start w-full flex items-center">
                        <NavLink
                            to='/investimentos'
                            className="mt-2 w-20 lg:w-1/8 p-5 flex justify-center bg-red-700 text-white py-2 border border-red-700/0 cursor-pointer rounded-2xl hover:border-red-700 hover:bg-white hover:text-red-700 transition-colors font-semibold"
                        >
                            <SkipBack />
                        </NavLink>
                    </section>
                </div>

                <MenuLateral />
            </div>
        </Pagina>
    )
}