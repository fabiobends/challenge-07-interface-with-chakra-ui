import { Flex, Button, Icon, Image, useColorMode } from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";
import Link from "next/link";

export function Header() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Flex align="center" justify="space-between" p={10} width="100%">
      <Flex align="center" justifySelf="flex-end" visibility="hidden">
        <Button onClick={toggleColorMode}>Mude o tema</Button>
        <Icon fontSize="24" as={colorMode === "light" ? FiSun : FiMoon} />
      </Flex>
      <Link href="/" passHref>
        <Image
          cursor="pointer"
          src="/assets/svg/Logo.svg"
          alt="Logo"
          justifySelf="center"
        />
      </Link>
      <Flex align="center" justifySelf="flex-end">
        <Button onClick={toggleColorMode}>Change theme</Button>
        <Icon
          ml={10}
          fontSize="24"
          as={colorMode === "light" ? FiSun : FiMoon}
        />
      </Flex>
    </Flex>
  );
}
