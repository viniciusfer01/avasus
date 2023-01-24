import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  SearchIcon,
  IconButton,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <nav>
      <Flex justify={"center"}>
        <Link href="#">
          <Image src={logo} alt="AVASUS" />
        </Link>
        <Link href="/">Início</Link>
        <Link href="#">Sobre nós</Link>
        <Link href="#">Cursos</Link>
        <Link href="#">Parceiros</Link>
        <Link href="#">Transparência</Link>
        <Link href="#">Contato</Link>
        <Input placeholder="Busca por um assunto..." size="md" width={"auto"} />
        <Link href="#">Entrar</Link>
        <Link href="#">Cadastrar</Link>
      </Flex>
    </nav>
  );
};

export default Header;
