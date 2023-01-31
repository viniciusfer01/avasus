const { Container, Heading, Text } = require("@chakra-ui/react");

const UsuariosPorCurso = () => {
  return (
    <Container
      textAlign={"center"}
      backgroundColor={"#f5f5f7"}
      maxWidth={"28rem"}
      borderRadius={"0.5rem"}
      marginBottom={"1.5rem"}
    >
      <Heading fontSize={"1.5rem"} textColor={"#D2202C"} padding={"2rem 0"}>
        Usuários por curso
      </Heading>

      <Text>Curso de prevenção ao suicídio: 43.412</Text>
      <Text>A covid-19 e seus sintomas: 120.000</Text>
      <Text>Pai presente: Cuidado e Compromisso: 105.301</Text>
      <Text>Outros: 1.669.402</Text>
    </Container>
  );
};

export default UsuariosPorCurso;
