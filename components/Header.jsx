import Image from "next/image";
import logo from "../public/logo.png";
import { Flex, Input, Link, Button } from "@chakra-ui/react";

const Header = () => {
  return (
    <nav>
      <Flex justify={"center"}>
        <Link href="#" padding={".8rem 3rem"}>
          <Image src={logo} alt="AVASUS" />
        </Link>
        <Link href="/" padding={"1rem"}>
          Início
        </Link>
        <Link href="#" padding={"1rem"}>
          Sobre nós
        </Link>
        <Link href="#" padding={"1rem"}>
          Cursos
        </Link>
        <Link href="#" padding={"1rem"}>
          Parceiros
        </Link>
        <Link href="#" padding={"1rem"}>
          Transparência
        </Link>
        <Link href="#" padding={"1rem"}>
          Contato
        </Link>
        <Input
          margin={".5rem"}
          placeholder="Busca por um assunto..."
          size="md"
          width={"auto"}
        />
        <Button margin={".5rem"} backgroundColor={"white"}>
          Entrar
        </Button>
        <Button margin={".5rem"}>Cadastrar</Button>
      </Flex>
    </nav>
  );
};

export default Header;
