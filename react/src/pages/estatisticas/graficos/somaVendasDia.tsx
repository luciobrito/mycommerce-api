import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { getSomaVendasDia, SomaDiaria } from "../../../services/estatisticasService";

export default function SomaVendasDia(){
    const [dados, setDados] = useState<SomaDiaria[]>([]);
    useEffect(() => {getSomaVendasDia().then((res)=> {setDados(res.data)})},[])
    return <div>
         <Bar
        data={{
            labels: dados.map((s)=> `${s.dia}/${s.mes}/${s.ano}`),
            datasets: [
                {
                    label: '',
                    data: dados.map(x=>x.total),
                    backgroundColor:[
                        "rgba(75,192,192,1)",
                        "rgb(75, 139, 192)"
                    ],
                    borderColor: "white",
                    borderWidth: 1
                }
            ]
        }}
        options={{
            responsive:true,
          plugins: {
            title: {
              display: true,
              text: "Soma de vendas por dia em R$"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
}