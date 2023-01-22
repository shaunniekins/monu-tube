import Footer from "./Footer";
import Navbar from "./Navbar";
import { Flex } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Flex flexDirection="column" minH={"100vh"}>
      <Flex
        px={{ base: "0", lg: "10rem" }}
        as={"nav"}
        bg="black"
        color="white.900"
        py={"5"}
        align={"center"}
        justify={{ base: "center", lg: "flex-start" }}>
        <Navbar />
      </Flex>
      <Flex
        // px={{ base: "0", lg: "10rem" }}
        flexDirection="column"
        flex={1}
        // px={"7rem"}
        bg="black"
        minH={"100vh"}
        color={"white"}
        direction={"column"}
        // justify={{ base: "space-around", sm: "center" }}
        align={"center"}
        // py={{ base: "15rem", lg: "8rem" }}
      >
        {children}
      </Flex>
      <Flex
        as={"footer"}
        py={"4"}
        bg="black"
        color="white.900"
        justify="center">
        <Footer />
      </Flex>
    </Flex>
  );
};

export default Layout;
