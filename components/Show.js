import React from "react";
import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import Slider from "react-slick";
import videos from "../pages/api/videos";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  AspectRatio,
} from "@chakra-ui/react";

// Settings for the slider
import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";

export default function Show() {
  // const [currentVideo, setCurrentVideo] = useState(videos[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const [slider, setSlider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  // const openModal = () => {
  //   onOpen();
  // };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const settings = {
    // dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    // speed: 500,
    autoplaySpeed: 5000,
    // slidesToShow: 1,
    // slidesToScroll: 1,

    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentIndex(current),
  };

  return (
    <Box
      position={"relative"}
      height={{ base: "600px", lg: "800px" }}
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

      {/* Slider */}
      <Slider ref={(slider) => setSlider(slider)} {...settings}>
        {videos.map((card, index) => (
          <Flex h={"6xl"} cursor={"pointer"} onClick={toggleModal} key={index}>
            <Flex
              h={"6xl"}
              mb={"-75rem"}
              // onClick={onOpen}
              py={{ base: "8rem", md: "15rem", lg: "15rem" }}
              px={{ base: "2rem", md: "10rem", lg: "6rem" }}
              // spacing={6}
              // w={"full"}
              maxW={"4xl"}
              direction={"column"}
              align={{ base: "center", xl: "flex-start" }}
              // justify={{ base: "flex-start", lg: "center" }}
            >
              <Heading
                letterSpacing={{ base: "-1px", md: "-3px" }}
                textAlign={{ base: "center", md: "left" }}
                fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}>
                {card.title.toUpperCase()}
              </Heading>
              <Text
                pt={"1rem"}
                pb={"4rem"}
                textAlign={{ base: "center", md: "justify" }}
                fontSize={{ base: "md", lg: "lg" }}
                color="white">
                {card.description}
              </Text>
              {/* <Button
                size={{ base: "sm", md: "lg" }}
                bg="green.900"
                color={"white"}
                cursor={"pointer"}
                onClick={toggleModal}
                >
                <Text fontSize={{ base: "xs", md: "xl" }}>PLAY</Text>
              </Button> */}
            </Flex>
            <Box
              // key={index}
              zIndex={-1}
              h={"6xl"}
              position="relative"
              filter="auto"
              brightness="40%"
              // src={currentVideo.thumbnail}
              // alt={currentVideo.title}
              src={card.thumbnail}
              alt={card.title}
              backgroundPosition={{ base: "right", lg: "center" }}
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${card.thumbnail})`}
            />
          </Flex>
        ))}
      </Slider>

      <Modal
        colorScheme="green"
        size={{ base: "1xl", lg: "6xl" }}
        isOpen={modalOpen}
        onClose={toggleModal}
        isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            bg="black"
            color={"white"}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}>
            {videos[currentIndex].title}
          </ModalHeader>
          {/* <ModalBody justify={"center"} bg={"gray.800"}>
            <VideoPlayer video={videos[currentIndex]} />
          </ModalBody> */}
          <ModalBody justify={"center"} bg="black">
            <AspectRatio ratio={16 / 9}>
              <iframe
                frameBorder="0"
                // src={currentVideo.videoUrl}
                src={videos[currentIndex].videoUrl}
                allowFullScreen
              />
            </AspectRatio>
          </ModalBody>
          <ModalFooter bg="black"></ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
