import { createContext, useEffect, useState } from "react";

export const DadosContext = createContext();

export function DadosProvider({ children }) {
  const [dados, setDados] = useState({ clientes: [], contas: [] });

  // Adiciona novos clientes ou contas ao estado, sem duplicar
  function adicionarDados(novosDados, tabela) {
    if (!Array.isArray(novosDados)) return;
    if (!tabela) return;

    setDados((prev) => {
      const existentes = new Set((prev[tabela] || []).map((item) => item.id));
      const novosUnicos = novosDados.filter((item) => !existentes.has(item.id));

      return {
        ...prev,
        [tabela]: [...(prev[tabela] || []), ...novosUnicos],
      };
    });
  }

  // Busca clientes
  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await fetch("http://localhost:3001/Clientes");
        if (!response.ok) throw new Error("Erro ao buscar clientes");

        const json = await response.json();
        const clientes = Array.isArray(json.message) ? json.message : Array.isArray(json) ? json : [];
        adicionarDados(clientes, "clientes");
      } catch (err) {
        console.error("❌ Erro clientes:", err.message);
      }
    };
    fetchClientes();
  }, []);

  // Busca contas
  useEffect(() => {
    const fetchContas = async () => {
      try {
        const response = await fetch("http://localhost:3001/Contas");
        if (!response.ok) throw new Error("Erro ao buscar contas");

        const json = await response.json();
        const contas = Array.isArray(json.message) ? json.message : Array.isArray(json) ? json : [];
        adicionarDados(contas, "contas");
      } catch (err) {
        console.error("❌ Erro contas:", err.message);
      }
    };
    fetchContas();
  }, []);

  useEffect(() => {
    const fetchEnderecos = async () => {
      try {
        const response = await fetch("http://localhost:3001/Enderecos");
        if (!response.ok) throw new Error("Erro ao buscar Enderecos");

        const json = await response.json();
        const enderecos = Array.isArray(json.message) ? json.message : Array.isArray(json) ? json : [];
        adicionarDados(enderecos, "enderecos");
      } catch (err) {
        console.error("❌ Erro enderecos:", err.message);
      }
    };
    fetchEnderecos();
  }, []);

  // Debug
  useEffect(() => {
    console.log("DADOS ATUALIZADOS:", dados);
  }, [dados]);

  const exportar = { dados, adicionarDados };

  return <DadosContext.Provider value={exportar}>{children}</DadosContext.Provider>;
}
