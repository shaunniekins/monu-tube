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
  extendTheme,
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

// import { useState } from "react";
import { useBreakpointValue } from "@chakra-ui/react";

const Show = () => {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  const [currentPreview, setCurrentPreview] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const previewsPerPage = useBreakpointValue({ base: 2, md: 3 });

  const handleNext = () => {
    if (currentPreview === 2) {
      setCurrentPreview(0);
    } else {
      setCurrentPreview(currentPreview + 1);
    }
    const currentIndex = videos.findIndex((v) => v.id === currentVideo.id);
    const nextVideo =
      currentIndex === videos.length - 1 ? videos[0] : videos[currentIndex + 1];
    setCurrentVideo(nextVideo);
  };

  const handlePrev = () => {
    if (currentPreview === 0) {
      setCurrentPreview(2);
    } else {
      setCurrentPreview(currentPreview - 1);
    }
    const currentIndex = videos.findIndex((v) => v.id === currentVideo.id);
    const prevVideo =
      currentIndex === 0 ? videos[videos.length - 1] : videos[currentIndex - 1];
    setCurrentVideo(prevVideo);
  };

  return (
    <Flex direction={"column"} align={"center"}>
      <Text as={"b"} fontSize={"xl"}>
        All Videos
      </Text>
      <Flex align={"center"}>
        <Button m={"0"} p={"0"} bg="transparent" onClick={handlePrev}>
          <Flex justify={"center"} align={"center"} fontSize={"6xl"}>
            <ChevronLeftIcon />
          </Flex>
        </Button>
        <HStack>
          {videos
            .slice(currentPreview, currentPreview + previewsPerPage)
            .map((video) => (
              <Box key={video.id}>
                <Link>
                  <Image
                    onClick={onOpen}
                    src={video.thumbnail}
                    alt={video.title}
                    w={"md"}
                  />
                </Link>
              </Box>
            ))}
        </HStack>
        <Button m={"0"} p={"0"} bg="transparent" onClick={handleNext}>
          <Flex justify={"center"} align={"center"} fontSize={"6xl"}>
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
    </Flex>
  );
};
export default Show;
