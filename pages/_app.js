// import '@/styles/globals.css'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import theme from "../components/theme";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
