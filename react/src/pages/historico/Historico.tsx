import { Loader, Pagination, Tabs, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { defaultPageResponse, PageResponse } from "../../types/PageResponse";
import Dados from "./dados";
import { Compra, getCompra } from "../../services/compraService";
import { getVenda, Venda } from "../../services/vendaService";

export default function Historico() {
  const loaderStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "30rem",
  };
  const pagStyle = { display: "flex", marginTop: 20, justifyContent: "center" };
  const [venda, setVenda] = useState<PageResponse<Venda>>(defaultPageResponse);
  const [compra, setCompra] =
    useState<PageResponse<Compra>>(defaultPageResponse);
  const [activePage, setPage] = useState({ compra: 0, venda: 0 });
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    getCompra(activePage.compra)
      .then((res) => {
        setCompra(res.data);
        console.debug(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
    getVenda(activePage.venda)
      .then((res) => {
        setVenda(res.data);
        console.debug(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [activePage]);
  return (
    <>
      <Title>Histórico</Title>
      <Tabs defaultValue={"compra"}>
        <Tabs.List grow justify="center">
          <Tabs.Tab value="compra">Compra</Tabs.Tab>

          <Tabs.Tab value="venda">Venda</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="venda">
          <Title order={3} style={{ margin: 10 }}>
            Vendas mais recentes:
          </Title>
          {loading ? <Loader style={loaderStyle}/> :( <Dados tipo="Venda" dados={venda} />)}
         

          <div style={pagStyle}>
            <Pagination
              total={venda.page.totalPages}
              value={venda.activePage}
              onChange={(e) => {
                setPage({ ...activePage, venda: e - 1 });
                console.debug(venda);
              }}
            />
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="compra" style={{ height: "25rem" }}>
                    <Title order={3} style={{ margin: 10 }}>
            Compras mais recentes:
          </Title>
          <div>
            {loading ? (
              <Loader style={loaderStyle} />
            ) : (
              <Dados tipo="Compra" dados={compra} />
            )}
          </div>
          <div style={pagStyle}>
            <Pagination
              total={compra.page.totalPages}
              value={compra.activePage}
              onChange={(e) => {
                setPage({ ...activePage, compra: e - 1 });
              }}
            />
          </div>
        </Tabs.Panel>
      </Tabs>
    </>
  );
}
