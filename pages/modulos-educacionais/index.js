import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Center,
  Container,
  Flex,
  Heading,
} from "@chakra-ui/react";
import Head from "next/head";

export default function ModulosEducacionais() {
  return (
    <>
      <Head>
        <title>AVASUS / Modulos Educacionais</title>
        <meta
          name="description"
          content="Ambiente Virtual de Aprendizagem do SUS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container width={"100%"} backgroundColor={"#F5F5F5"}></Container>
        <Container maxWidth={"60rem"} textAlign={"center"}>
          <nav>
            <Breadcrumb padding={"1.5rem 0"}>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Início</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="#">Cursos</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Módulos</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </nav>
          <Heading paddingTop={"2rem"} paddingBottom={"2rem"}>
            Módulos Educacionais
          </Heading>
          <Flex>
            <Button
              margin={".5rem"}
              backgroundColor={"white"}
              onClick={console.log("fui clicado!")}
            >
              Covid 19
            </Button>
            <Button
              margin={".5rem"}
              backgroundColor={"white"}
              onClick={console.log("fui clicado!")}
            >
              Sífilis e outras Ist’s
            </Button>
            <Button
              margin={".5rem"}
              backgroundColor={"white"}
              onClick={console.log("fui clicado!")}
            >
              OPAS
            </Button>
            <Button
              margin={".5rem"}
              backgroundColor={"white"}
              onClick={console.log("fui clicado!")}
            >
              Doenças raras
            </Button>
            <Button
              margin={".5rem"}
              backgroundColor={"white"}
              onClick={console.log("fui clicado!")}
            >
              Web Palestras
            </Button>
            <Button
              margin={".5rem"}
              backgroundColor={"white"}
              onClick={console.log("fui clicado!")}
            >
              Sistemas prisional
            </Button>
            <Button
              margin={".5rem"}
              backgroundColor={"white"}
              onClick={console.log("fui clicado!")}
            >
              Preceptoria
            </Button>
          </Flex>
        </Container>
      </main>
    </>
  );
}
