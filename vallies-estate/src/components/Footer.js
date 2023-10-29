import React from "react";
import {
  Box,
  Container,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

export function Footer() {
  return (
    <Box color={"white"} bg='blue'>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={8}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
      >
        <Stack direction={"column"} spacing={3}>
            <Heading>Vallie's Estate</Heading>
            <Text fontSize="lg" fontFamily="heading">
                Solution for easy and flexible <br />
                house hunting. You can trust us <br />
                anywhere through this platform.
            </Text>
        </Stack>
        <Stack direction={"column"} spacing={3}>
          <Heading>Property</Heading>
          <Link>Learning Modules</Link>
          <Link>Partnership</Link>
          <Link>Watch demo</Link>
          <Link>Event</Link>
        </Stack>
        <Stack direction={"column"} spacing={3}>
          <Heading>About</Heading>
          <Link>Our Company</Link>
          <Link>Career</Link>
          <Link>Investor Relations</Link>
          <Link>Social Impact</Link>
        </Stack>
        <Stack direction={"column"} spacing={3}>
          <Heading>Resources</Heading>
          <Link>Contact</Link>
          <Link>Give feedback</Link>
          <Link>System status</Link>
          <Link>Privacy Policy</Link>
        </Stack>
      </Container>
    </Box>
  );
}
