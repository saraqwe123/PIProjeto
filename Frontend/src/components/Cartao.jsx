import {
  EyeIcon,
  EyeOffIcon,
} from "lucide-react";
import { useState } from "react";

export function Cartao({nome, saldo}) {
    const [showBalance, setShowBalance] = useState(false);
    const toggleBalance = () => {
      setShowBalance((prev) => !prev);
    };
  return (
    <>
        <div className="w-130 h-80 bg-white rounded-4xl p-6 shadow-xl relative overflow-hidden flex justify-between items-start">
            <div className="flex flex-col gap-2">
                <img src="imagens/logoSite.svg" alt="Logo" className="w-55" />
                <p className="text-lg text-gray-700">{nome}</p>
                <h2 className="tracking-widest text-3xl font-semibold"> **** **** **** 0038 </h2>
                <div className="flex flex-col gap-1 w-full mt-2">
                    <div className="flex justify-around w-full">
                    <div className="h-2 bg-black rounded w-1/4"></div>
                    <div className="h-2 bg-black rounded w-1/4"></div>
                    <div className="h-2 bg-black rounded w-1/4"></div>
                    </div>
                    <div className="h-2 bg-black rounded w-full"></div>
                </div>
                </div>

                <div className="flex flex-col justify-between items-end h-full">
                    <div className="flex flex-col gap-1">
                        <p className="text-sm text-gray-600">Saldo em conta</p>

                        <div className="flex items-center gap-2">
                            <div className="relative w-32">  

                            {!showBalance && (
                                <div className="absolute inset-0 z-10"></div>
                            )}

                            <p className="text-xl font-semibold text-gray-900 tracking-wide">
                                {showBalance ? {saldo} : "R$ ******"}
                            </p>
                            </div>

                            <button
                            onClick={toggleBalance}
                            className="cursor-pointer hover:text-green-600 transition"
                            >
                            {showBalance ? (
                                <EyeIcon className="w-5 h-5" />
                            ) : (
                                <EyeOffIcon className="w-5 h-5" />
                            )}
                            </button>
                        </div>
                    </div>

                <div className="relative w-28 h-16 mb-4">
                    <div className="absolute w-20 h-20 bg-gray-700/40 rounded-full left-8 top-0 z-10"></div>
                    <div className="absolute w-20 h-20 bg-green-700 rounded-full left-0 top-0 z-0"></div>
                </div>
            </div>
        </div>
    </>
                  
  );
}

