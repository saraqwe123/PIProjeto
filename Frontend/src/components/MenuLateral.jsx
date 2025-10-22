import { ArrowBigRight, FileTextIcon, LineChartIcon, SendIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

export function MenuLateral() {
    return (
        <>
            <aside className="w-full md:w-1/3 md:flex flex-col hidden md:h-full border-t md:border-t-0 md:border-l border-gray-700">
                <div className="w-full md:h-1/3 border-b border-gray-700 relative h-28">
                    <h1 className="flex flex-row items-center justify-start text-xl md:text-2xl p-4 gap-2">
                        <strong>Área Pix</strong>
                        <ArrowBigRight className="w-5 h-5 md:w-6 md:h-6" />
                    </h1>
                    <NavLink to='/areapix'>
                        <SendIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-[#003c0a] transition-colors text-[#6dd63a] w-10 h-10 md:w-12 md:h-12" />
                    </NavLink>
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
                    <NavLink to="/investimentos">
                        <LineChartIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-[#003c0a] transition-colors text-[#6dd63a] w-10 h-10 md:w-12 md:h-12" />
                    </NavLink>
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
        </>
    )
}