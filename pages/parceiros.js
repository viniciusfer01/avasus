import React, { useState } from "react";
import PaginatedItems from "@/components/ParceirosPagination";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  const [resultados, setResultados] = useState(0);
  const changeResultadosHandler = (resultados) => {
    setResultados(resultados);
  };
  return (
    <>
      <Head>
        <title>Nossos parceiros</title>
        <meta
          name="description"
          content="Ambiente Virtual de Aprendizagem do SUS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container maxWidth={"60rem"} textAlign={"left"}>
          <Breadcrumb padding={"1.5rem 0"}>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Início</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Parceiros</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading textColor={"#D2202C"} padding={"1rem 0"}>
            Nossos parceiros
          </Heading>
          <Text textAlign={"left"} textColor={"gray"} padding={"1rem 0"}>
            6 de {resultados} Resultados
          </Text>
          <PaginatedItems
            itemsPerPage={6}
            resultadosNumber={changeResultadosHandler}
          />
        </Container>
      </main>
    </>
  );
}
