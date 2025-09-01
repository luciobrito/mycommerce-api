import { Dialog, Text, ThemeIcon } from "@mantine/core";
import { FaCheck } from "react-icons/fa6";

export default function SuccessNotification({opened, message}: {opened : boolean, message:string}) {
  return (
    <>
      <Dialog opened={opened} style={{ backgroundColor: "#27c241ff" }}>
        {" "}
        <div style={{display:"flex", alignItems:"center", gap:10}}>        
        <Text style={{color:"white"}} fw={600}>{message}</Text>
        <ThemeIcon color="green" radius="xl" size="xl">
          <FaCheck size={20}/>
        </ThemeIcon>
        </div>

      </Dialog>
    </>
  );
}
