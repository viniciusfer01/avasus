import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <Container
        minWidth={"100%"}
        backgroundColor={"red.500"}
        textAlign={"Center"}
        padding={"2rem 0"}
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

      <Container
        backgroundColor={"#323237"}
        textColor={"whitesmoke"}
        maxWidth={"100%"}
        padding={"3rem 0"}
      >
        <Center>
          <Box maxWidth={"60rem"} display={{ md: "flex" }}>
            <Container maxWidth={"15rem"}>
              <Heading>Lais</Heading>
              <Text>Laboratório de Inovação Tecnológica em Saúde.</Text>
            </Container>
            <Container>
              <Heading marginBottom={"2rem"}>Links Úteis</Heading>
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
            <Container maxWidth={"17.5rem"}>
              <Heading>Redes Sociais</Heading>
              <Center maxWidth={"100%"}>
                <Link href="#">Facebook</Link>
                <Spacer />
                <Link href="#">Twitter</Link>
                <Spacer />
                <Link href="#">Instagram</Link>
              </Center>
            </Container>
          </Box>
        </Center>
      </Container>

      <Center backgroundColor={"#424146"} padding={"1.5rem"}>
        <Text color={"whitesmoke"}>
          2022 © LAIS (HUOL). Todos os direitos reservados
        </Text>
      </Center>
    </>
  );
};

export default Footer;
