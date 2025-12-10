import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";


export function MudarChave(props) {


  
 return (
   <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
     <form  className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 animate-fade-in">


       <header className="text-xl font-semibold text-gray-800 text-center mb-4">
         Você vai pagar
         <span className="text-green-600 font-bold"> </span>
         para
         <span className="font-bold"> </span>
       </header>


       <div className="bg-gray-100 rounded-xl p-4 mb-6">
         <h1 className="text-lg font-medium text-gray-700">Mudar Chave Pix:</h1>
         <p className="text-gray-600">
           {props.chavepixcpf}
           <span className="font-semibold text-green-700"> </span>
         </p>
       </div>


       <div className="bg-gray-100 rounded-xl p-4 mb-6">
         <h1 className="text-lg font-medium text-gray-700 mb-2">Digite sua nova chave:</h1>


         <div className="relative">
           <input
             className="
               w-full py-3 px-4 rounded-xl
               border border-gray-300
               text-gray-700
               focus:ring-2 focus:ring-green-500 focus:border-green-500
               outline-none transition
             "
           />


           <button
             type="button"
            
             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
           >
           </button>
         </div>
       </div>


       <button type="submit" className="w-full border border-green-500/0 hover:border-green-500 bg-green-600 hover:bg-white text-white hover:text-green-500 py-3 rounded-xl font-semibold transition-all shadow-md active:scale-95 cursor-pointer duration-300">
         Confirmar Mudança
       </button>
     </form>


     <style>{`
       .animate-fade-in {
         animation: fade 0.25s ease-out;
       }
       @keyframes fade {
         from { opacity: 0; transform: scale(0.95); }
         to { opacity: 1; transform: scale(1); }
       }
     `}</style>
   </div>
 );
}
