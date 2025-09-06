import { NavLink, Text } from "@mantine/core";
import {
  FaArrowRightToBracket,
  FaArrowTrendUp,
  FaBagShopping,
  FaChevronRight,
  FaClockRotateLeft,
  FaCreditCard,
} from "react-icons/fa6";
import { routerConst } from "../Router";
export default function NavbarLinks({ toggle }: { toggle: any }) {
  const links = [
    { title: "Nova Venda", path: "venda", icon: FaCreditCard },
    { title: "Nova Compra", path: "compra", icon: FaBagShopping },
    { title: "Estatísticas", path: "estatisticas", icon: FaArrowTrendUp },
    { title: "Histórico", path: "historico", icon: FaClockRotateLeft },
  ];
  return (
    <>
      {links.map((link, index) => (
        <NavLink
          key={index}
          variant="subtle"
          active={window.location.href.split("/")[3] == link.path}
          label={<Text fw={500}>{link.title}</Text>}
          leftSection={<link.icon size={20} />}
          rightSection={<FaChevronRight size={15} />}
          onClick={() => {
            routerConst.navigate("/" + link.path);
            toggle();
          }}
        />
      ))}
      <NavLink
        label={<Text fw={500}>Sair</Text>}
        leftSection={<FaArrowRightToBracket size={20} />}
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("compra");
          localStorage.removeItem("venda");
          window.location.replace("/login")
        }}
      />
    </>
  );
}
