import Footer from "./Footer";
import Navbar from "./Navbar";
import { Flex, Box } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Flex flexDirection="column" w="100%">
      <Flex
        as={"nav"}
        w={"100%"}
        // bg={"white"}
        colorScheme="green"
        color="white.900"
        // color={"blue"}
        justify={{ base: "center", lg: "flex-start" }}
        pl={{
          base: 0,
          lg: 40,
        }}
        py={{
          base: "4",
          lg: "5",
        }}>
        <Navbar />
      </Flex>
      {/* <Flex align={"center"} justify={"center"} w={"100%"}> */}
      {children}
      {/* </Flex> */}
      <Flex
        as={"footer"}
        py={"1rem"}
        colorScheme={"green"}
        justify={"center"}
        w={"100%"}>
        <Footer />
      </Flex>
    </Flex>
  );
};

export default Layout;
