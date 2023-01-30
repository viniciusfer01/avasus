import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Heading,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const ModuloDetail = () => {
  const router = useRouter();
  const { moduloDetail } = router.query;
  const [modulo, setModulo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`http://localhost:3004/cursos?id=${moduloDetail}`).then((res) => {
      console.log(res.data);
      setModulo(res.data[0]);
      console.log(modulo.titulo);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading && <Spinner size={"xl"} />}
      {!isLoading && (
        <>
          <Box
            width={"100%"}
            bgImage={modulo.capa}
            bgRepeat="no-repeat"
            backgroundSize={"100%"}
          >
            <Container
              maxWidth={"60rem"}
              textAlign={"left"}
              textColor={"white"}
            >
              <Breadcrumb padding={"1.5rem 0"}>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Início</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink href="/modulos-educacionais">
                    Cursos
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Módulos</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#">{modulo.titulo}</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <Heading>{modulo.titulo}</Heading>
              <Text>{modulo.parceiros}</Text>
            </Container>
          </Box>
          <Container maxWidth={"60rem"} textAlign={"Center"}>
            <Heading>Informações Gerais do Curso</Heading>
            <Flex>
              <Text>{modulo.duracao}</Text>
              <Text>Desde {modulo.criado_em}</Text>
              <Text>{modulo.matriculados} alunos matriculados</Text>
              <Text>
                {modulo.avaliacao} ({modulo.numero_avaliacoes} avaliações)
              </Text>
            </Flex>
            <Text>Sobre o curso</Text>
            <Text>{modulo.sobre}</Text>
            <Text>Objetivos</Text>
            <Text>Objetivo Geral</Text>
            <Text>{modulo.objetivo_geral}</Text>
            <Text>Objetivos Específicos</Text>
            <Text>{modulo.objetivo_especifico}</Text>
            <Container textAlign={"left"}></Container>
            <Text>Recursos educacionais</Text>
            <Text>
              Serão utilizados textos no formato de PDF, vídeos, ilustrações,
              infográficos, dentre outros recursos.
            </Text>
            <Text>Créditos</Text>
            <Flex justifyContent={"center"}>
              {modulo.creditos &&
                modulo.creditos.map((credito) => (
                  <Image
                    key={credito.titulo}
                    src={credito.capa}
                    maxWidth="12rem"
                  />
                ))}
            </Flex>
          </Container>
        </>
      )}
    </>
  );
};

export default ModuloDetail;
