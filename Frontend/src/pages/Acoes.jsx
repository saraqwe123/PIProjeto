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
    User,
    UserCircle2Icon,
    PiggyBank,
    ChevronLeft
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MenuLateral } from "../components/MenuLateral";
import { MenuSuperiorSemBarra } from "../components/MenuSuperiorSemBarra";

export function Acoes() {
    const [showBalance, setShowBalance] = useState(false);
    const toggleBalance = () => {
        setShowBalance((prev) => !prev);
    };

    return (
        <Pagina>
            <div className="flex flex-wrap w-full h-full min-h-screen">
                <div className="w-full md:w-2/3 flex flex-col items-start bg-black">
                    <MenuSuperiorSemBarra />

                    <h1 className="text-white font-bold text-center text-xl md:text-5xl mt-10 px-4">
                        <div className="flex flex-row">
                            <p className="mr-2">

                                Ações
                            </p>
                            <div>
                                <span className="text-[#ffce01] font-bold">Bra</span>
                                <span className="text-[#278d46] font-bold">sil</span>
                                <span className="text-[#023067] font-bold">eir</span>
                                <span className="text-white font-bold">as</span>
                            </div>
                        </div>
                    </h1>

                    <h2 className="font-bold text-white px-4 p-4">
                        Ações Globais (BDRs)
                    </h2>

                    <p className="text-white px-4 ">
                        Empresas nacionais de capital aberto que oferecem suas ações para serem negociadas
                    </p>

                    <div className="w-full h-full flex flex-row justify-between p-10 mb-5">
                        <div className="w-30 h-30">
                            <img className="" src="/imagens/petrobras.svg" alt="" />
                        </div>
                        <div className="w-40 h-30 flex flex-col text-white">
                            <p className="font-bold text-2xl px-2">
                                R$ 55,02
                            </p>
                            <div className="w-30 flex flex-row justify-around">
                                <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center">
                                    <PiggyBank className="w-6 h-6 text-black left-14" />
                                </div>
                                <p className="font-bold">R$ 0,04</p>
                            </div>
                        </div>
                    </div>
                    <div className=" text-[#00ec6a]">
                        < ChevronLeft className="w-20 h-20"/>
                    </div>
                <div className="fixed w-3/12 h-1/5 top-3/4 left-180">
                    <img src="/imagens/celular.svg" alt=""/>
                </div>
                </div>
                <MenuLateral />
            </div>
        </Pagina>
    );
}
