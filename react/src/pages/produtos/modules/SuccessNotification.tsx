import { Dialog, ThemeIcon } from "@mantine/core";
import { FaCheck } from "react-icons/fa6";

export default function SuccessNotification() {
  return (
    <>
      <Dialog opened style={{ backgroundColor: "green" }}>
        {" "}
        <ThemeIcon color="green" radius="xl" size="xl">
          <FaCheck />
        </ThemeIcon>
        Compra finalizada com sucesso!
      </Dialog>
    </>
  );
}
