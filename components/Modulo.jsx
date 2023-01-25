import { Button, Card, CardBody, Image, Stack, Text } from "@chakra-ui/react";

const Modulo = (props) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={props.capa}
        alt={props.titulo}
      />

      <Stack>
        <CardBody>
          <Text>{props.titulo}</Text>
          <Text>{props.matriculados}</Text>
          <Text>{props.duracao}</Text>
          <Text>{props.avaliacao}</Text>

          <Button variant="solid" colorScheme="blue">
            Ver Módulo
          </Button>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default Modulo;
