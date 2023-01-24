import Parceiros from "@/components/Parceiros";
import SimpleSlider from "@/components/SimpleSlider";
import { Center } from "@chakra-ui/react";
import Head from "next/head";
import ModulosEducacionais from "../components/ModulosEducacionais";

export default function Home() {
  return (
    <>
      <Head>
        <title>AVASUS</title>
        <meta
          name="description"
          content="Ambiente Virtual de Aprendizagem do SUS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SimpleSlider />
        <Center>
          <ModulosEducacionais />
          <Parceiros />
        </Center>
      </main>
    </>
  );
}
