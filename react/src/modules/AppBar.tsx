import { AppShell, AppShellMain, Burger, Button, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import App from "../App";
import Router from "../Router";
import NavbarLinks from "./NavbarLinks";

export default function AppBar(){
    const [open, {toggle}] = useDisclosure();
    return   <AppShell padding={'md'} header={{height: 60}} navbar={{width: 300, breakpoint:'sm', collapsed: {mobile: !open}}}>
        <AppShell.Header withBorder  bg={"indigo"}>
            <div>

            <Title style={{color:"white"}}>MyCommerce</Title>
            <Burger opened={open} onClick={toggle} hiddenFrom="sm" size={"sm"}/>
            </div>
        </AppShell.Header>
        <AppShell.Navbar>
            <NavbarLinks/>
        </AppShell.Navbar>
            <AppShell.Main>
                <Router/>
            </AppShell.Main>
         </AppShell>
}