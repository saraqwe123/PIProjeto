import { useState } from "react";
import { Pagina } from "../components/Pagina";
import { MenuLateral } from "../components/MenuLateral";
import { MenuSuperiorSemBarra } from "../components/MenuSuperiorSemBarra";

import { Line, Scatter } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
);


export function ComprarAcao() {
    const [showBalance, setShowBalance] = useState(false);

    const toggleBalance = () => {
        setShowBalance((prev) => !prev);
    };
    const [graficoTipo, setGraficoTipo] = useState("line");

    const data = {
        labels: ["10:25", "10:30", "10:35", "10:40", "10:45", "10:50"],
        datasets: [
            {
                label: "PETR4",
                data: [28, 30, 29, 31, 32, 33],
                borderColor: "#3bff67",
                backgroundColor: "rgba(59, 255, 103, .15)",
                tension: 0.4,
                borderWidth: 3,
                pointRadius: 0
            }
        ]
    };

    const dataScatter = {
        datasets: [
            {
                label: "PETR4 Scatter",
                data: [
                    { x: 10.25, y: 28 },
                    { x: 10.3, y: 30 },
                    { x: 10.35, y: 29 },
                    { x: 10.4, y: 31 },
                    { x: 10.45, y: 32 },
                    { x: 10.5, y: 33 },
                ],
                backgroundColor: "#3bff67",
                pointRadius: 5,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: "#222",
                titleColor: "#fff",
                bodyColor: "#bbb",
                padding: 8,
            }
        },
        scales: {
            x: {
                ticks: { color: "#aaa" },
                grid: { color: "rgba(255,255,255,0.1)" }
            },
            y: {
                ticks: { color: "#aaa" },
                grid: { color: "rgba(255,255,255,0.1)" }
            }
        }
    };
    return (
        <Pagina>
            <div className="flex flex-wrap w-full h-full min-h-screen">
                <div className="w-full md:w-2/3 flex flex-col items-start bg-black">
                    <MenuSuperiorSemBarra />

                    <div className="mt-6 w-full">
                        <div className="w-12/13 flex items-center justify-around">
                            <button
                                className=" mb-1 bg-blue-500 hover:bg-blue-700 px-5 py-2 rounded-full text-white font-semibold"
                                onClick={() => setGraficoTipo(graficoTipo === "line" ? "scatter" : "line")}
                            >
                                Mudar para {graficoTipo === "line" ? "Dispersão" : "Linha"}
                            </button>
                            <div className="flex flex-row">
                                <img src="/imagens/petrobras.svg" className="w-12" />

                                <span className="text-green-400">+1.17%</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 bg-neutral-900 p-4 rounded-xl w-full h-96 flex justify-center">
                        {graficoTipo === "line" ? (
                            <Line data={data} options={options} />
                        ) : (
                            <Scatter data={dataScatter} options={options} />
                        )}

                    </div>

                    <button
                        className="mt-6 bg-green-600 hover:bg-green-700 px-7 py-2 rounded-full font-semibold"
                    >
                        Comprar
                    </button>


                    <div className="fixed w-3/12 h-1/5 top-3/4 left-180">
                        <img src="/imagens/celular.svg" alt="" />
                    </div>
                </div>
                <MenuLateral />
            </div>
        </Pagina>
    );
}
