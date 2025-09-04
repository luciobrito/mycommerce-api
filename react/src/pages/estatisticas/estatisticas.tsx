
import { BarElement, CategoryScale, Chart, Legend, LinearScale, Title,Tooltip } from "chart.js";
import SomaVendasDia from "./graficos/somaVendasDia";
import ProdutosMaisVendidosChart from "./graficos/ProdutosMaisVendidos";
import { Title as MTitle} from "@mantine/core";
export default function Estatisticas(){
    Chart.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend)
    return <div>
        <MTitle order={2}>Estatísticas</MTitle>
        <div>
        <SomaVendasDia/>
        <ProdutosMaisVendidosChart/>
        </div>
    </div>
}