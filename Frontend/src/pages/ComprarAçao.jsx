import { useState } from "react";
import { Pagina } from "../components/Pagina";
import { MenuLateral } from "../components/MenuLateral";
import { MenuSuperiorSemBarra } from "../components/MenuSuperiorSemBarra";

export function ComprarAcao() {
    const [showBalance, setShowBalance] = useState(false);
    const toggleBalance = () => {
        setShowBalance((prev) => !prev);
    };

    return (
        <Pagina>
            <div className="flex flex-wrap w-full h-full min-h-screen">
                <div className="w-full md:w-2/3 flex flex-col items-start bg-black">
                    <MenuSuperiorSemBarra />

                    <div className="fixed w-3/12 h-1/5 top-3/4 left-180">
                        <img src="/imagens/celular.svg" alt=""/>
                    </div>
                </div>
                <MenuLateral />
            </div>
        </Pagina>
    );
}
