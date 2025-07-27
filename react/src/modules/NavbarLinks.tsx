import { NavLink } from "@mantine/core";
import { useState } from "react";
import { BsBag, BsChevronRight, BsCreditCard, BsGraphUp } from "react-icons/bs";
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
          rightSection={<BsChevronRight size={20} 
          href={link.path}
            onClick={(index)=>{console.log("clickado")}}
          />
            
        }
        />
      )}
      <NavLink label="sdadsa"  onClick={()=>{console.log("a")}}/>

    </>
  );
}
