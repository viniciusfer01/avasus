import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { Box, ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <ChakraProvider>
        <Header />
        <Box paddingTop={"4rem"}>
          <Component {...pageProps} />
          <Footer />
        </Box>
      </ChakraProvider>
    </>
  );
}
