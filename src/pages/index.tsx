import { Box, Flex, Image, Heading, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";

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
        justify="space-between"
      >
        <Box>
          <Heading>5 Continentes, infinitas possibilidades</Heading>
          <Text>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou
          </Text>
        </Box>
        <Image position="absolute" src="/assets/svg/Airplane.svg" alt="Avião" />
      </Box>
      {/* <Image src="/assets/banners/Background.png" width="100%" /> */}
    </Box>
  );
}
