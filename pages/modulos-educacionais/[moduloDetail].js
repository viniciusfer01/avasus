import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
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
      console.log(res.data[0]);
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
              <Heading padding={"1.5rem 0"}>{modulo.titulo}</Heading>
              <Text padding={"1.5rem 0"}>{modulo.parceiros}</Text>
            </Container>
          </Box>
          <Container maxWidth={"60rem"} textAlign={"Center"}>
            <Heading padding={"1.5rem 0"} color={"#D2202C"}>
              Informações Gerais do Curso
            </Heading>
            <Center>
              <Text padding={"0 0.5rem"} fontSize={"1.4rem"}>
                {modulo.duracao}
              </Text>
              <Text padding={"0 0.5rem"} fontSize={"1.4rem"}>
                Desde {modulo.criado_em}
              </Text>
              <Text padding={"0 0.5rem"} fontSize={"1.4rem"}>
                {modulo.matriculados} alunos matriculados
              </Text>
              <Text padding={"0 0.5rem"} fontSize={"1.4rem"}>
                {modulo.avaliacao} ({modulo.numero_avaliacoes} avaliações)
              </Text>
            </Center>
            <Text color={"#D2202C"} padding={"1.5rem 0"}>
              Sobre o curso
            </Text>
            <Text>{modulo.sobre}</Text>
            <Text color={"#D2202C"} paddingTop={"1.5rem"}>
              Objetivos
            </Text>
            <Text textAlign={"left"} fontWeight={"bold"} padding={"1.5rem 0"}>
              Objetivo Geral
            </Text>
            <Text>{modulo.objetivo_geral}</Text>
            <Text textAlign={"left"} fontWeight={"bold"} padding={"1.5rem 0"}>
              Objetivos Específicos
            </Text>
            <Text>{modulo.objetivo_especifico}</Text>
            <Container textAlign={"left"}></Container>
            <Text color={"#D2202C"} padding={"1.5rem 0"}>
              Recursos educacionais
            </Text>
            <Text>
              Serão utilizados textos no formato de PDF, vídeos, ilustrações,
              infográficos, dentre outros recursos.
            </Text>
            <Text color={"#D2202C"} padding={"1.5rem 0"}>
              Créditos
            </Text>
            <Center marginBottom={"5rem"} width={"100%"}>
              {modulo.creditos &&
                modulo.creditos.map((credito) => (
                  <Image
                    key={credito.titulo}
                    src={credito.capa}
                    maxWidth="12rem"
                    padding={"0 0.5rem"}
                  />
                ))}
            </Center>
          </Container>
        </>
      )}
    </>
  );
};

export default ModuloDetail;
