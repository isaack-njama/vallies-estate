// Navbar.js
import * as React from "react";
import { Box, Flex, Spacer, Link, Text, Button } from "@chakra-ui/react";
import { ColorModeSwitcher } from './ColorModeSwitcher';

const Navbar = () => {
  return (
    <Box maxHeight='55%' maxW={"100%"} py={4} color="black">
      <Flex align="center" pb={4} textDecoration={"none"}>
        <Link as={Text} fontSize="xl" fontWeight="bold" ml={40} pl={2} href="/">Vallie's Estate</Link>
        <Spacer />
        <Link as={Text} color="blue" href="/about" px={5}>Home</Link>
        <Link as={Text} href="/contact" px={5}>Rent</Link>
        <Link as={Text} href="/contact" px={5}>Land</Link>
        <Link as={Text} href="/contact" px={5}>Agent</Link>
        <Link as={Text} href="/contact" px={5}>Contact Us</Link>
        <Spacer />
        <Button bg="blue" color="white" mr={64}>Get Started</Button>
        <ColorModeSwitcher />
      </Flex>

      <hr />
    </Box>
  );
};

export default Navbar;
