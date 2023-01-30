import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const ModuloEducacional = (props) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={props.capa} alt="Capa do módulo" borderRadius="lg" />

        <Stack mt="6" spacing="3">
          <Container textAlign={"left"} padding={"0"}>
            <Heading size="md" noOfLines={[2]}>
              {props.titulo}
            </Heading>
            <Text color="gray.500" fontSize=".8rem">
              {props.parceiros}
            </Text>
          </Container>
          <Flex justifyContent={"space-between"}>
            <Center>
              <Text paddingRight={"1rem"}>{props.matriculados}</Text>
              <Text>{props.duracao}</Text>
            </Center>
            <Text>{props.avaliacao}</Text>
          </Flex>
          <Text noOfLines={[5]} textAlign={"left"}>
            {props.sobre}
          </Text>
          <Button>
            <Link href={`modulos-educacionais/` + props.id}>Ver curso</Link>
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ModuloEducacional;
