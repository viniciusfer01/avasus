import { Center, Container, Heading } from "@chakra-ui/react";

const Parceiros = () => {
  return (
    <>
      <Center marginTop={"3rem"}>
        <Heading>Parceiros</Heading>
      </Center>
      <Center marginBottom={"4rem"}>
        <Container
          maxW="60rem"
          bg="gray.100"
          borderRadius={"2rem"}
          padding={"1rem"}
          margin={"1rem"}
          display={"flex"}
          textAlign={"center"}
        >
          <div>
            <Heading fontSize={"1.2rem"} padding={".5rem"}>
              Governo do RN
            </Heading>
            <p>Governo do Estado do Rio Grande do Norte.</p>
          </div>
          <div>
            <Heading fontSize={"1.2rem"} padding={".5rem"}>
              SESAP
            </Heading>
            <p>Secretaria de Saúde Pública do Estado do Rio Grande do Norte.</p>
          </div>
          <div>
            <Heading fontSize={"1.2rem"} padding={".5rem"}>
              UFRN
            </Heading>
            <p>Universidade Federal do Rio Grande do Norte.</p>
          </div>
          <div>
            <Heading fontSize={"1.2rem"} padding={".5rem"}>
              HUOL
            </Heading>
            <p>
              Hospital Onofre Lopes: Hospital Universitário da UFRN
              (Universidade Federal do Rio Grande do Norte).
            </p>
          </div>
        </Container>
      </Center>
    </>
  );
};

export default Parceiros;
