import { AppShell, AppShellMain, Burger, Button, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import App from "../App";
import Router, { routerConst } from "../Router";
import NavbarLinks from "./NavbarLinks";
import { RouterProvider } from "react-router";

export default function AppBar(){
    const [open, {toggle}] = useDisclosure();
    return   <AppShell padding={'md'} header={{height: 60}} navbar={{width: 300, breakpoint:'sm', collapsed: {mobile: !open}}}>
        <AppShell.Header withBorder  bg={"indigo"}>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", padding: "0.5rem"}}>

            <Title style={{color:"white", textShadow:"text-shadow: 2px 2px 2px #5B5B5B"}}>MyCommerce</Title>
            <Burger opened={open} onClick={toggle} color="white" hiddenFrom="sm" size={"md"}/>
            </div>
        </AppShell.Header>
        <AppShell.Navbar>
            <NavbarLinks toggle={toggle}/>
        </AppShell.Navbar>
            <AppShell.Main>
                <RouterProvider router={routerConst}/>
            </AppShell.Main>
         </AppShell>
}