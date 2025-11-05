import { useState } from "react";
import { Pagina } from "../components/Pagina";
import {
    ArrowBigUp,
    BadgeQuestionMarkIcon,
    BellIcon,
    MessageCircleMoreIcon,
    PlusIcon,
    SearchIcon,
    SkipBack,
    User,
    UserCircle,
    UserCircle2Icon,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { MenuLateral } from "../components/MenuLateral";
import { MenuSuperior } from "../components/MenuSuperior";

export function Investimentos() {
    const [showBalance, setShowBalance] = useState(false);
    const toggleBalance = () => {
        setShowBalance((prev) => !prev);
    };

    return (
        <Pagina>
            <div className="flex flex-wrap w-full h-full min-h-screen">
                <div className="w-full md:w-2/3 flex flex-col items-center bg-black p-4">
                    <MenuSuperior/>
                    <section className="mt-10 px-4 self-start">
                        <h1 className="text-white text-xl md:text-5xl">
                            Total em <strong className="text-[#6dd63a]">Investimentos</strong>
                        </h1>
                        <h2 className="text-4xl text-[#6dd63a]">R$ 2.500,00</h2>
                        <h3 className="text-2xl text-[#6dd63a] flex items-center gap-2">
                            <ArrowBigUp /> R$ 88,44
                        </h3>

                        <button className="mt-2 w-1/3 bg-[#6dd63a] text-white py-2 border border-[#57b72e]/0 cursor-pointer rounded-2xl hover:border-[#57b72e] hover:bg-white hover:text-[#57b72e] transition-colors font-semibold">
                            Investir
                        </button>
                    </section>

                    <section className="mt-6 px-4 self-start">
                        <h1 className="text-white mb-2">Minha Organização</h1>
                        <NavLink className="w-56 h-56 bg-white flex justify-center items-center rounded-2xl">
                            <PlusIcon size={72} className="text-gray-400" />
                        </NavLink>
                    </section>
                    <section className="mt-6 px-4 self-start w-full flex items-center">
                        <NavLink
                            to='/inicio'
                            className="mt-2 w-1/8 p-5 flex justify-center bg-red-700 text-white py-2 border border-red-700/0 cursor-pointer rounded-2xl hover:border-red-700 hover:bg-white hover:text-red-700 transition-colors font-semibold"
                        >
                            <SkipBack />
                        </NavLink>
                    </section>
                </div>

                <MenuLateral />
            </div>
        </Pagina>

    );
}
