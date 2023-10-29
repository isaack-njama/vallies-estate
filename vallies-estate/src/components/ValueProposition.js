import React from "react";
import { Flex, Box, Heading, Image, Text } from "@chakra-ui/react";
import BeautifulHouse from "../assets/images/image 2.png";

export const ValueProposition = () => {

  return (
    <Flex justify='space-between'>
        <Box top={2}>
            <Image src={BeautifulHouse} alt="Banner House" width={700} height={450} mr={8} />
        </Box>
        <Box textAlign='left' pl={8}>
            <Heading color="blue">
                Why you should choose us.
            </Heading>
            <Text fontSize="2xl" pt={4}>
                Creating quality urban lifestyles, building <br /> 
                stronger communities
            </Text>
        </Box>
    </Flex>
  );
};
