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
import axios from "axios";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const COLORS = ["#FFFFFF", "#D2202C", "#707070", "#2F2E41"];

export default function Transparencia() {
  const [dadosGerais, setDadosGerais] = useState({});
  const [usuariosPorCurso, setUsuariosPorCurso] = useState({});
  const [usuariosPorEstado, setUsuariosPorEstado] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios.get("http://localhost:3004/transparecia").then((response) => {
      setDadosGerais(response.data.dados_gerais);
      setUsuariosPorCurso(response.data.usuarios_por_curso);
      setUsuariosPorEstado(response.data.usuarios_por_estado);
      setIsLoading(false);
    });
  }, []);

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
        <Container maxWidth={"60rem"} textAlign={"left"} marginBottom={"6rem"}>
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
          {!isLoading && (
            <>
              <DadosGerais data={dadosGerais} />
              <Flex alignContent={"space-between"}>
                <UsuariosPorCurso data={usuariosPorCurso} colors={COLORS} />
                <UsuariosPorEstado data={usuariosPorEstado} colors={COLORS} />
              </Flex>
            </>
          )}
        </Container>
      </main>
    </>
  );
}
