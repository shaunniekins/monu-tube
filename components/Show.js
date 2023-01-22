import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Button,
  Link,
  Container,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import videos from "@/pages/api/videos";
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

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";

export default function Show() {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server

  return (
    <Box
      cursor={"pointer"}
      position={"relative"}
      height={"700px"}
      width={"full"}
      overflow={"hidden"}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => {
          slider?.slickPrev();
          const currentIndex = videos.findIndex(
            (v) => v.id === currentVideo.id
          );
          const prevVideo =
            currentIndex === 0
              ? videos[videos.length - 1]
              : videos[currentIndex - 1];
          setCurrentVideo(prevVideo);
        }}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => {
          slider?.slickNext();
          const currentIndex = videos.findIndex(
            (v) => v.id === currentVideo.id
          );
          const nextVideo =
            currentIndex === videos.length - 1
              ? videos[0]
              : videos[currentIndex + 1];
          setCurrentVideo(nextVideo);
        }}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider ref={(slider) => setSlider(slider)} {...settings}>
        {videos.map((card, index) => (
          <Box
            key={index}
            height={"6xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            onClick={onOpen}
            src={currentVideo.thumbnail}
            alt={currentVideo.title}
            backgroundImage={`url(${card.thumbnail})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                {/* <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: "md", lg: "lg" }} color="GrayText">
                  {card.text}
                </Text> */}
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>

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
                frameBorder="0"
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
    </Box>
  );
}
