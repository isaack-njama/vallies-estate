import React from 'react';
import {
  Flex,
  Box,
  Button,
  Heading,
  Image,
  Text,
  Icon,
  HStack,
  Center,
} from '@chakra-ui/react';
import { MdPlayCircleFilled } from 'react-icons/md';
import BlueHouse from '../assets/images/image 1.png';

export const Banner = () => {
  return (
    <Center>
      <Flex gap={40} m={16}>
        <Box textAlign="left" ml={24} pl={2}>
          <Heading color="blue">
            Helping you find the <br /> property of your dreams.
          </Heading>
          <Text fontSize="2xl" pt={4}>
            Creating quality urban lifestyles, building <br />
            stronger communities
          </Text>
          <HStack direction="row" gap={6} pt={3}>
            <Button bg="blue" color="white" mt={8}>
              Learn More
            </Button>
            <Icon as={MdPlayCircleFilled} fill="blue" mt={8} boxSize={9} />
          </HStack>
        </Box>
        <Box mr={40}>
          <Image
            src={BlueHouse}
            alt="Banner House"
            width={750}
            height={450}
            mr={8}
          />
        </Box>
      </Flex>
    </Center>
  );
};
