import Parceiros from "@/components/Parceiros";
import SimpleSlider from "@/components/SimpleSlider";
import { Box, Center, Container, Heading } from "@chakra-ui/react";
import Head from "next/head";
import ModulosEducacionais from "../components/ModulosEducacionais";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nossos parceiros</title>
        <meta
          name="description"
          content="Ambiente Virtual de Aprendizagem do SUS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Parceiros</h1>
      </main>
    </>
  );
}
