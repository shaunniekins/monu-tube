import Footer from "./Footer";
import Navbar from "./Navbar";
import { Flex } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Flex flexDirection="column" minH={"100vh"}>
      <Flex
        px={{ base: "0", lg: "10rem" }}
        as={"nav"}
        bg="gray.900"
        color="white.900"
        py={{ base: "4", md: "5", lg: "6" }}
        align={"center"}
        // boxShadow="xl"
        borderBottom="8px"
        borderColor="green.900"
        justify={{ base: "center", lg: "flex-start" }}>
        <Navbar />
      </Flex>
      <Flex
        flexDirection="column"
        flex={1}
        bg="black"
        minH={"100vh"}
        color={"white"}
        direction={"column"}
        align={"center"}>
        {children}
      </Flex>
      <Flex
        as={"footer"}
        py={"4"}
        bg="gray.900"
        color="white.900"
        borderTop="4px"
        borderColor="green.900"
        justify="center">
        <Footer />
      </Flex>
    </Flex>
  );
};

export default Layout;
