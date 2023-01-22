import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";

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
  VStack,
  HStack,
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
  const previewsPerPage = useBreakpointValue({
    base: 1,
    md: 2,
    lg: 3,
  });

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

  const firstFiveVideos = videos.slice(0, 5);
  const remainingVideos = videos.slice(5);

  // new useState hook for CSU Landmarks
  const [csuCurrentVideo, setCsuCurrentVideo] = useState(remainingVideos[0]);
  const [csuCurrentPreview, setCsuCurrentPreview] = useState(0);
  // new useDisclosure hook for CSU Landmarks
  const { csuIsOpen, csuOnOpen, csuOnClose } = useDisclosure();

  // new handleNext and handlePrev functions for CSU Landmarks
  const handleCsuNext = () => {
    if (csuCurrentPreview === 2) {
      setCsuCurrentPreview(0);
    } else {
      setCsuCurrentPreview(csuCurrentPreview + 1);
    }
    const currentIndex = remainingVideos.findIndex(
      (v) => v.id === csuCurrentVideo.id
    );
    const csuNextVideo =
      currentIndex === remainingVideos.length - 1
        ? remainingVideos[0]
        : remainingVideos[currentIndex + 1];
    setCsuCurrentVideo(csuNextVideo);
  };

  const handleCsuPrev = () => {
    if (csuCurrentPreview === 0) {
      setCsuCurrentPreview(2);
    } else {
      setCsuCurrentPreview(csuCurrentPreview - 1);
    }
    const currentIndex = remainingVideos.findIndex(
      (v) => v.id === csuCurrentVideo.id
    );
    const csuPrevVideo =
      currentIndex === 0
        ? remainingVideos[remainingVideos.length - 1]
        : remainingVideos[currentIndex - 1];
    setCsuCurrentVideo(csuPrevVideo);
  };

  return (
    <>
      <Flex direction={"column"} pt={"6rem"}>
        <Text
          as={"b"}
          pl={{ lg: "4rem" }}
          align={{ base: "center", lg: "left" }}
          fontSize={"2xl"}>
          Butuan Landmarks
        </Text>
        <Flex align={"center"}>
          <Button m={"0"} p={"0"} bg="transparent" onClick={handlePrev}>
            <Flex justify={"center"} align={"center"} fontSize={"6xl"}>
              <ChevronLeftIcon />
            </Flex>
          </Button>
          <HStack>
            {firstFiveVideos
              .slice(currentPreview, currentPreview + previewsPerPage)
              .map((video) => (
                <Box key={video.id}>
                  <Link>
                    <Image
                      onClick={() => {
                        setCurrentVideo(video);
                        onOpen();
                      }}
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
              <ModalHeader bg={"black"} color={"white"}>
                {currentVideo.title}
              </ModalHeader>
              <ModalBody bg="black">
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    frameBorder="0"
                    src={currentVideo.videoUrl}
                    allowFullScreen
                  />
                </AspectRatio>
              </ModalBody>
              <ModalFooter bg={"black"}>
                <Button bg="green.900" color={"white"} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      </Flex>
      {/* CSU Landmarks */}
      <Flex direction={"column"} pt={"6rem"}>
        <Text
          as={"b"}
          pl={{ lg: "4rem" }}
          align={{ base: "center", lg: "left" }}
          fontSize={"2xl"}>
          CSU Landmarks
        </Text>
        <Flex align={"center"}>
          <Button m={"0"} p={"0"} bg="transparent" onClick={handleCsuPrev}>
            <Flex justify={"center"} align={"center"} fontSize={"6xl"}>
              <ChevronLeftIcon />
            </Flex>
          </Button>
          <HStack>
            {remainingVideos
              .slice(csuCurrentPreview, csuCurrentPreview + previewsPerPage)
              .map((video) => (
                <Box key={video.id}>
                  <Link>
                    <Image
                      onClick={() => {
                        setCsuCurrentVideo(video);
                        csuOnOpen();
                      }}
                      src={video.thumbnail}
                      alt={video.title}
                      w={"md"}
                    />
                  </Link>
                </Box>
              ))}
          </HStack>
          <Button m={"0"} p={"0"} bg="transparent" onClick={handleCsuNext}>
            <Flex justify={"center"} align={"center"} fontSize={"6xl"}>
              <ChevronRightIcon />
            </Flex>
          </Button>
          <Modal
            colorScheme="green"
            size={"6xl"}
            isOpen={csuIsOpen}
            onClose={csuOnClose}
            isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader bg={"black"} color={"white"}>
                {csuCurrentVideo.title}
              </ModalHeader>
              <ModalBody bg="black">
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    frameBorder="0"
                    src={csuCurrentVideo.videoUrl}
                    allowFullScreen
                  />
                </AspectRatio>
              </ModalBody>
              <ModalFooter bg={"black"}>
                <Button bg="green.900" color={"white"} onClick={csuOnClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      </Flex>
    </>
  );
};
export default Show;
