import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  const date = new Date();
  let current_year = date.getFullYear();
  return (
    <Flex>
      <Text fontSize="xs" color="white">
        &copy; {current_year} All Rights Reserved
      </Text>
    </Flex>
  );
};

export default Footer;
