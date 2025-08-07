import { NavLink, Text } from "@mantine/core";
import { useState } from "react";
import { FaArrowRightToBracket, FaArrowTrendUp, FaBagShopping, FaChevronRight, FaClockRotateLeft, FaCreditCard } from "react-icons/fa6";
import { routerConst } from "../Router";
import { patch } from "@mui/material";
export default function NavbarLinks({toggle}: {toggle: any}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const links = [
    { title: "Nova Venda", path: "venda", icon: FaCreditCard },
    { title: "Nova Compra", path: "compra", icon: FaBagShopping},
    {title:"Estatísticas", path:"estatisticas", icon: FaArrowTrendUp},
    {title:"Histórico", path:"historico", icon:FaClockRotateLeft }
  ];
  return (
    <>
      {links.map((link, index) => 
        <NavLink
            key={index}
          variant="subtle"
          active={activeIndex == index}
          label={<Text fw={500}>{link.title}</Text>}
          leftSection={<link.icon size={20} />}
          rightSection={<FaChevronRight size={15} />}
          onClick={()=>{routerConst.navigate('/'+link.path);toggle();setActiveIndex(index)}}
          />
        
      )}
      <NavLink label={<Text fw={500}>Sair</Text>} leftSection={<FaArrowRightToBracket size={20} />}  onClick={()=>{console.log("a")}}/>

    </>
  );
}
