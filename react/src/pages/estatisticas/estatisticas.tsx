import {  Typography } from "@mui/material";
import { BarElement, CategoryScale, Chart, Legend, LinearScale, Title,Tooltip } from "chart.js";
import SomaVendasDia from "./graficos/somaVendasDia";
export default function Estatisticas(){
    Chart.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend)
    return <div>
        <Typography>Estatísticas</Typography>
        <SomaVendasDia/>
    </div>
}