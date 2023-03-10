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
          <Text>Total de usuários registrados</Text>
          <Text>{props.data && props.data.usuarios_registrados}</Text>
        </Container>

        <Container>
          <Text>Inscrições realizadas</Text>
          <Text>{props.data && props.data.incricoes_realizadas}</Text>
        </Container>

        <Container>
          <Text>Cursos ativos</Text>
          <Text>{props.data && props.data.cursos_ativos}</Text>
        </Container>

        <Container>
          <Text>Direito à Certificação</Text>
          <Text>{props.data && props.data.direito_certificacao}</Text>
        </Container>

        <Container>
          <Text>Investimento médio por curso</Text>
          <Text>{props.data && props.data.investimento_medio_curso}</Text>
        </Container>

        <Container>
          <Text>Investimento médio por aluno</Text>
          <Text>{props.data && props.data.investimento_medio_aluno}</Text>
        </Container>
      </Flex>
    </Container>
  );
};

export default DadosGerais;
