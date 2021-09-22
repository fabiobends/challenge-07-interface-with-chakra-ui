import { Box, Flex, Image, Heading, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Home() {
  return (
    <Box vh="100vh" width="100vw">
      <Header />
      <Box
        backgroundImage="/assets/banners/Background.png"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        height={400}
        display="flex"
      >
        <Box py="100" ml="100">
          <Heading>5 Continentes, infinitas possibilidades</Heading>
          <Text>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou
          </Text>
        </Box>
        <Image
          // position="absolute"
          width="500px"
          right="200"
          bottom="-50"
          src="/assets/svg/Airplane.svg"
          alt="Avião"
        />
      </Box>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Image
            src="/assets/banners/banner_europe.png"
            alt="banner"
            fit="contain"
            width="100%"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/assets/banners/banner_europe.png"
            alt="banner"
            fit="contain"
            width="100%"
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
