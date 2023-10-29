import React from "react";
import { Flex, Box, Button, Heading, Image, Text, Icon, HStack } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";
import { MdPlayCircleFilled } from 'react-icons/md';
import BlueHouse from "../assets/images/image 1.png";

export const Banner = () => {
  return (
    <Flex gap={40}>
        <Box textAlign='left' pl={24}>
            <Heading color="blue">
                Helping you find the <br /> property of your dreams.
            </Heading>
            <Text fontSize="2xl" pt={4}>
                Creating quality urban lifestyles, building <br /> 
                stronger communities
            </Text>
            <HStack direction='row' gap={6} pt={3}>
              <Button bg="blue" color="white" mt={8}>Learn More</Button>
              <Icon as={MdPlayCircleFilled} fill="blue" mt={8} boxSize={9} />
            </HStack>
        </Box>
        <Box ml={64}>
            <Image src={BlueHouse} alt="Banner House" width={700} height={450} mr={8} />
        </Box>
    </Flex>
  );
};
