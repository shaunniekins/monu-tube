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

const Landmark1 = () => {
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
    </>
  );
};
export default Landmark1;
