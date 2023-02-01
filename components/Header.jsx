import Image from "next/image";
import logo from "../public/logo.png";
import { Flex, Input, Link, Button, Box, Container } from "@chakra-ui/react";

const Header = () => {
  return (
    <nav>
      <Box
        display={{ md: "flex" }}
        alignItems={"center"}
        justifyContent={"Center"}
        position={{ md: "fixed" }}
        zIndex={200}
        backgroundColor={"#FFF"}
        width={"100%"}
        boxShadow={"0 0 10px rgba(0,0,0,0.5)"}
      >
        <Container>
          <Link href="/" padding={".8rem 3rem"} w={"20%"}>
            <Image src={logo} alt="AVASUS" />
          </Link>
        </Container>
        <Container>
          <Link href="/" padding={"1rem"}>
            Início
          </Link>
        </Container>
        <Container>
          <Link href="#" padding={"1rem"}>
            Sobre nós
          </Link>
        </Container>
        <Container>
          <Link href="/modulos-educacionais" padding={"1rem"}>
            Cursos
          </Link>
        </Container>
        <Container>
          <Link href="/parceiros" padding={"1rem"}>
            Parceiros
          </Link>
        </Container>
        <Container>
          <Link href="/transparencia" padding={"1rem"}>
            Transparência
          </Link>
        </Container>
        <Container>
          <Link href="#" padding={"1rem"}>
            Contato
          </Link>
        </Container>
        <Container>
          <Input
            margin={".5rem"}
            placeholder="Busca por um assunto..."
            size="md"
            width={"auto"}
          />
        </Container>
        <Container>
          <Button
            margin={".5rem"}
            backgroundColor={"white"}
            border={"1px #ddd solid"}
          >
            Entrar
          </Button>
        </Container>
        <Container>
          <Button margin={".5rem"}>Cadastrar</Button>
        </Container>
      </Box>
    </nav>
  );
};

export default Header;
