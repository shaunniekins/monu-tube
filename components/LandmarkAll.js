import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Text,
  useDisclosure,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  AspectRatio,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import videos from "../pages/api/videos";

const randomizeVideos = (videos) => {
  return videos.sort(() => Math.random() - 0.5);
};

const Landmark1 = () => {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  // const [currentVideo, setCurrentVideo] = useState(randomizeVideos(videos)[0]);
  const [currentPreview, setCurrentPreview] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const previewsPerPage = useBreakpointValue({
    base: 1,
    md: 2,
    lg: 3,
  });

  const handleNext = () => {
    const currentIndex = videos.findIndex((v) => v.id === currentVideo.id);
    setCurrentPreview(currentIndex);
    const nextIndex = (currentIndex + 1) % videos.length;
    setCurrentVideo(videos[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = videos.findIndex((v) => v.id === currentVideo.id);
    setCurrentPreview(currentIndex);
    const prevIndex = (currentIndex - 1 + videos.length) % videos.length;
    setCurrentVideo(videos[prevIndex]);
  };

  // const firstFiveVideos = videos.slice(0);

  return (
    <>
      <Flex direction={"column"} pt={{ base: "1rem", md: "6rem" }} pb={"3rem"}>
        <Text
          as={"b"}
          pl={{ lg: "4rem" }}
          align={{ base: "center", lg: "left" }}
          fontSize={{ base: "lg", md: "xl", lg: "2xl" }}>
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
                      onClick={() => {
                        setCurrentVideo(video);
                        onOpen();
                      }}
                      src={video.thumbnail}
                      alt={video.title}
                      w={{ md: "xs", lg: "md" }}
                      h={{ base: "5xs", md: "2xs" }}
                      size={"cover"}
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
            size={{ base: "1xl", lg: "6xl" }}
            isOpen={isOpen}
            onClose={onClose}
            isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader
                fontSize={{ base: "md", md: "lg", lg: "xl" }}
                bg={"black"}
                color={"white"}>
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
              <ModalFooter bg="black" />
              {/* <ModalFooter bg={"black"}>
                {/* <Button
                  size={{ base: "sm", md: "lg" }}
                  bg="green.900"
                  color={"white"}
                  onClick={onClose}>
                  <Text fontSize={{ base: "xs", md: "xl" }}>Close</Text>
                </Button>
              </ModalFooter> */}
            </ModalContent>
          </Modal>
        </Flex>
      </Flex>
    </>
  );
};
export default Landmark1;
