import ModulosEducacionaisGrid from "@/components/ModulosEducacionaisGrid";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
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
        <Container
          maxWidth={"60rem"}
          textAlign={"center"}
          marginBottom={"10rem"}
        >
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
          <ModulosEducacionaisGrid />
        </Container>
      </main>
    </>
  );
}
