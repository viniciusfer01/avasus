import DadosGerais from "@/components/DadosGerais";
import UsuariosPorCurso from "@/components/UsuariosPorCurso";
import UsuariosPorEstado from "@/components/UsuariosPorEstado";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Heading,
} from "@chakra-ui/react";
import Head from "next/head";
import React, { useState } from "react";

export default function Transparencia() {
  return (
    <>
      <Head>
        <title>Transparencia</title>
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
              <BreadcrumbLink href="#">Transparência</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading
            textColor={"#D2202C"}
            padding={"1rem 0"}
            textAlign={"center"}
          >
            Transparência
          </Heading>
          <DadosGerais />
          <Flex alignContent={"space-between"}>
            <UsuariosPorCurso />
            <UsuariosPorEstado />
          </Flex>
        </Container>
      </main>
    </>
  );
}
