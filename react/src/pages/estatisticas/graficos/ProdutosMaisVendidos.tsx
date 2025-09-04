import { useEffect, useState } from "react";
import {
  getProdutosMaisVendidos,
  ProdutosMaisVendidos,
} from "../../../services/estatisticasService";
import { Bar } from "react-chartjs-2";
import { SegmentedControl } from "@mantine/core";

export default function ProdutosMaisVendidosChart() {
  var date = new Date();
  var dateLocale = date.toLocaleString("pt-br", {
    month: "long",
    year: "numeric",
  });
  const [dados, setDados] = useState<ProdutosMaisVendidos[]>();
  const [segmentValue, setSegmentValue] = useState("0");
  const [parametros, setParametros] = useState({
    mes: date.getMonth() + 1,
    ano: date.getFullYear(),
  });
  useEffect(() => {
    console.log(segmentValue);
    getProdutosMaisVendidos(parametros.mes, parametros.ano).then((res) => {
      console.debug(dados);
      setDados(res.data);
      console.debug(res.data);
    });
  }, [parametros, segmentValue]);
  const chartData = [
    {
      data: dados?.map((x) => x.qntVendida),
      label: "Unidades vendidas",
      backgroundColor: ["#5A92E0", "#785AE0", "#5A67E0"],
    },
    {
      data: dados?.map((x) => x.total),
      label: "Valor em R$",
      backgroundColor: ["#5A92E0", "#785AE0", "#5A67E0"],
    },
  ];
  return (
    <>
      <Bar
        data={{
          labels: dados?.map((x) => x.nome),
          datasets: [{...chartData[parseInt(segmentValue)]}],
        }}
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Produtos mais vendidos do mês de " + dateLocale,
            },
          },
        }}
      />
      <SegmentedControl
        value={segmentValue}
        onChange={setSegmentValue}
        data={[
          { label: "Quantidade Vendida", value: "0" },
          { label: "Valor total em R$", value: "1" },
        ]}
      />
    </>
  );
}
