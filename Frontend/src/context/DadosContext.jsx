import { createContext, useEffect, useState } from "react";

export const DadosContext = createContext();

export function DadosProvider({ children }) {
    const [dados, setDados] = useState([]);

    function adicionarDados(novosDadosPorTabela) {
        if (!novosDadosPorTabela || typeof novosDadosPorTabela !== "object") return;

        setDados((prev) => {
            const novoEstado = { ...prev };
            for (const [tabela, registros] of Object.entries(novosDadosPorTabela)) {
                if (!Array.isArray(registros)) continue;

                const existentes = new Set(
                    (novoEstado[tabela] || []).map((item) => JSON.stringify(item))
                );
                const novosUnicos = registros.filter(
                    (item) => !existentes.has(JSON.stringify(item))
                );
                novoEstado[tabela] = [...(novoEstado[tabela] || []), ...novosUnicos];
            }
            return novoEstado;
        });
    }

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const response = await fetch("http://localhost:3000/Clientes");
                if (!response.ok) throw new Error("Erro ao buscar os dados do servidor");
    
                const json = await response.json();
                console.log("RETORNO DO BACKEND:", json);
    
                // Se backend retorna { message: { cliente: [...] } }
                if (json.message && typeof json.message === "object") {
                    adicionarDados(json.message);
                }
    
                // Se backend retorna { message: [...] }
                else if (Array.isArray(json.message)) {
                    adicionarDados({ cliente: json.message });
                }
    
                // Se backend retorna um array direto
                else if (Array.isArray(json)) {
                    adicionarDados({ cliente: json });
                }
    
            } catch (err) {
                console.error("❌ Erro na requisição:", err.message);
            }
        };
    
        fetchAPI();
    }, []);
    
    const exportar = {
        dados,
        adicionarDados,
    };

    return (
        <DadosContext.Provider value={exportar}>{children}</DadosContext.Provider>
    );
}