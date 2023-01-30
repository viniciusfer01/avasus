import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const Parceiro = (props) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Box maxH={"12rem"} maxWidth={"16rem"}>
          <Image src={props.capa} />
        </Box>
        <Stack mt="6" spacing="3">
          <Heading textAlign={"center"} size="md">
            {props.titulo}
          </Heading>
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  );
};

export default Parceiro;
