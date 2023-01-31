import { Container, Flex, Heading, Text } from "@chakra-ui/react";

const DadosGerais = (props) => {
  return (
    <Container
      textAlign={"center"}
      backgroundColor={"#f5f5f7"}
      maxWidth={"60rem"}
      borderRadius={"0.5rem"}
      marginBottom={"1.5rem"}
    >
      <Heading fontSize={"1.5rem"} textColor={"#D2202C"} padding={"2rem 0"}>
        Dados Gerais
      </Heading>

      <Flex>
        <Container>
          <Text>
            Total de usuários registrados
            {/* {transparencia.dados_gerais.usuarios_registrados} */}
          </Text>
        </Container>

        <Container>
          <Text>
            Inscrições realizadas
            {/* {transparencia.dados_gerais.incricoes_realizadas} */}
          </Text>
        </Container>

        <Container>
          <Text>
            Cursos ativos
            {/* {transparencia.dados_gerais.cursos_ativos} */}
          </Text>
        </Container>

        <Container>
          <Text>
            Direito à Certificação
            {/* {transparencia.dados_gerais.direito_certificacao} */}
          </Text>
        </Container>

        <Container>
          <Text>
            Investimento médio por curso
            {/* {transparencia.dados_gerais.investimento_medio_curso} */}
          </Text>
        </Container>

        <Container>
          <Text>
            Investimento médio por aluno
            {/* {transparencia.dados_gerais.investimento_medio_aluno} */}
          </Text>
        </Container>
      </Flex>
    </Container>
  );
};

export default DadosGerais;
