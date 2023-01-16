import {
  Box,
  Button,
  css,
  Flex,
  Image,
  Link,
  Text,
  // useDisclosure,
} from "@chakra-ui/react";

import {
  PhoneIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  AddIcon,
  WarningIcon,
} from "@chakra-ui/icons";

import { useDisclosure } from "@chakra-ui/react";

import {
  Drawer,
  ChakraProvider,
  // extendTheme,
  Container,
  Heading,
  // Button,
  VStack,
  HStack,
  // Text,
  // Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  AspectRatio,
  Tag,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import videos from "../pages/api/videos";

const Show = () => {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex align={"center"}>
      <Button
        mr={"-16"}
        py={"5rem"}
        px={"0rem"}
        bg="green.900"
        onClick={() => {
          const currentIndex = videos.findIndex(
            (v) => v.id === currentVideo.id
          );
          const prevVideo =
            currentIndex === 0
              ? videos[videos.length - 1]
              : videos[currentIndex - 1];
          setCurrentVideo(prevVideo);
        }}>
        <Flex justify={"center"} align={"center"} fontSize={"9xl"}>
          <ChevronLeftIcon />
        </Flex>
      </Button>
      <Box>
        <Link>
          <Image
            onClick={onOpen}
            src={currentVideo.thumbnail}
            alt={currentVideo.title}
            w={"70rem"}
          />
        </Link>
      </Box>
      <Button
        ml={"-16"}
        py={"5rem"}
        px={"0rem"}
        bg="green.900"
        onClick={() => {
          const currentIndex = videos.findIndex(
            (v) => v.id === currentVideo.id
          );
          const nextVideo =
            currentIndex === videos.length - 1
              ? videos[0]
              : videos[currentIndex + 1];
          setCurrentVideo(nextVideo);
        }}>
        <Flex justify={"center"} align={"center"} fontSize={"9xl"}>
          <ChevronRightIcon />
        </Flex>
      </Button>
      <Modal
        colorScheme="green"
        size={"6xl"}
        isOpen={isOpen}
        onClose={onClose}
        isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="black">{currentVideo.title}</ModalHeader>
          <ModalBody bg="black">
            <AspectRatio ratio={16 / 9}>
              <iframe
                // src="https://drive.google.com/file/d/1tgt1asS_P9h2kRV84pnVr0KVePc-StVK/preview"
                frameborder="0"
                src={currentVideo.videoUrl}
                allowFullScreen
              />
            </AspectRatio>
          </ModalBody>
          <ModalFooter bg="black">
            <Button bg="green.900" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Show;
