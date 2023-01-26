import { Center, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <Container
        minWidth={"100%"}
        backgroundColor={"red.500"}
        textAlign={"Center"}
      >
        <Text color={"whitesmoke"} fontSize={"1.5rem"}>
          Realização
        </Text>
        <Center>
          <Text color={"whitesmoke"} fontSize={"1.5rem"} padding={".5rem 2rem"}>
            LAIS
          </Text>
          <Text color={"whitesmoke"} fontSize={"1.5rem"} padding={".5rem 2rem"}>
            UFRN
          </Text>
        </Center>
      </Container>
      <Flex
        alignItems={"flex-start"}
        justifyContent={"center"}
        backgroundColor={"#323237"}
        textColor={"whitesmoke"}
      >
        <Container>
          <Heading>Lais</Heading>
          <Text>Laboratório de Inovação Tecnológica em Saúde.</Text>
        </Container>
        <Container>
          <Heading>Links Úteis</Heading>
          <Text>Laboratório de Inovação Tecnológica em Saúde.</Text>
          <Text>
            <Link href="/">Início</Link>
          </Text>
          <Text>
            <Link href="#">Sobre nós</Link>
          </Text>
          <Text>
            <Link href="#">Módulos</Link>
          </Text>
          <Text>
            <Link href="#">Parceiros</Link>
          </Text>
          <Text>
            <Link href="#">Transparência</Link>
          </Text>
        </Container>
        <Container>
          <Heading>Redes Sociais</Heading>
          <Link href="#">Facebook</Link>
          <Link href="#">Twitter</Link>
          <Link href="#">Instagram</Link>
        </Container>
      </Flex>
      <Center backgroundColor={"#424146"} padding={"1.5rem"}>
        <Text color={"whitesmoke"}>
          2022 © LAIS (HUOL). Todos os direitos reservados
        </Text>
      </Center>
    </>
  );
};

export default Footer;
