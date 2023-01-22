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

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import { useDisclosure } from "@chakra-ui/react";

import {
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
        mr={{ base: "-5", lg: "-16" }}
        py={{ base: "1rem", md: "2rem", lg: "5rem" }}
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
        <Flex
          justify={"center"}
          align={"center"}
          fontSize={{ base: "lg", lg: "9xl" }}>
          <ChevronLeftIcon />
        </Flex>
      </Button>
      <Box>
        <Link>
          <Image
            onClick={onOpen}
            src={currentVideo.thumbnail}
            alt={currentVideo.title}
            w={{ base: "80vw", lg: "60vw" }}
          />
        </Link>
      </Box>
      <Button
        ml={{ base: "-5", lg: "-16" }}
        py={{ base: "1rem", md: "2rem", lg: "5rem" }}
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
        <Flex
          justify={"center"}
          align={"center"}
          fontSize={{ base: "lg", lg: "9xl" }}>
          <ChevronRightIcon />
        </Flex>
      </Button>
      <Modal
        colorScheme="green"
        size={{ base: "1xl", lg: "6xl" }}
        isOpen={isOpen}
        onClose={onClose}
        isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="black">{currentVideo.title}</ModalHeader>
          <ModalBody justify={"center"} bg="black">
            <AspectRatio ratio={16 / 9}>
              <iframe
                frameborder="0"
                src={currentVideo.videoUrl}
                allowFullScreen
              />
            </AspectRatio>
          </ModalBody>
          <ModalFooter bg="black">
            <Button
              size={{ base: "sm", md: "lg" }}
              bg="green.900"
              onClick={onClose}>
              <Text fontSize={{ base: "xs", md: "2xl" }}>Close</Text>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Show;
