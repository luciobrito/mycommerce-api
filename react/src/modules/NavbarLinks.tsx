import { NavLink } from "@mantine/core";
import { useState } from "react";
import { BsArrowBarLeft, BsArrowLeft, BsBag, BsChevronRight, BsCreditCard, BsGraphUp } from "react-icons/bs";
import { routerConst } from "../Router";
export default function NavbarLinks() {
  const iconSize = 20;
  const [active, setActive] = useState(0);
  const links = [
    { title: "Nova Venda", path: "venda", icon: BsCreditCard },
    { title: "Nova Compra", path: "compra", icon: BsBag},
    {title:"Estatísticas", path:"estatisticas", icon: BsGraphUp},
  ];
  return (
    <>
      {links.map((link, index) => 
        <NavLink
            key={index}
          variant="subtle"
          label={link.title}
          leftSection={<link.icon size={20} />}
          rightSection={<BsChevronRight size={20} />}
          onClick={()=>{routerConst.navigate('/'+link.path)}}
          />
        
      )}
      <NavLink label="Sair" leftSection={<BsArrowBarLeft size={20} />}  onClick={()=>{console.log("a")}}/>

    </>
  );
}
