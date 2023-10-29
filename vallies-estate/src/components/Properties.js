import React from 'react';
import {
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Card, CardHeader, CardBody } from '@chakra-ui/card';
import ThePalace from '../assets/images/image 2.png';
import IvyRory from '../assets/images/image 3.png';
import Rexona from '../assets/images/image 4.png';

export const Properties = () => {
  return (
    <>
      <Center>
        <Stack justify="space-between" pt={8} mt={12} mb={16}>
          <VStack pt={6}>
            <Card borderRadius="5px" color="black" w="1477px" h="500px" mb={8}>
              <CardHeader>
                <Heading color="blue">Our Featured Properties</Heading>
                <Text>
                  One of our biggest product to be featured and that has sold{' '}
                  <br />
                  out the most.
                </Text>
              </CardHeader>
              <Flex direction="row" fontSize="md" mt={20} m="auto">
                <Card background="white" borderRadius="5px" cursor="pointer">
                  <Center>
                    <CardBody pt={4}>
                      <Stack>
                        <Image
                          src={ThePalace}
                          alt="The Palace"
                          width={64}
                          height={32}
                        />
                        <Flex gap={16}>
                          <Heading size="md" pl={6}>
                            The Palace
                          </Heading>
                          <Text>Duplex</Text>
                        </Flex>
                        <Flex direction="row" gap={16}>
                          <Text pl={6}>Lekki, Phase 2</Text>
                          <Text color="blue">$2000</Text>
                        </Flex>
                      </Stack>
                    </CardBody>
                  </Center>
                </Card>
                <Card
                  background="white"
                  borderRadius="5px"
                  ml={6}
                  cursor="pointer"
                >
                  <Center>
                    <CardBody pt={4}>
                      <Stack>
                        <Image
                          src={IvyRory}
                          alt="Ivy Rory"
                          width={64}
                          height={32}
                        />
                        <Flex gap={16}>
                          <Heading size="md" pl={6}>
                            IVY RORY
                          </Heading>
                          <Text>Duplex</Text>
                        </Flex>
                        <Flex direction="row" gap={16}>
                          <Text pl={6}>Lekki, Phase 2</Text>
                          <Text color="blue">$2000</Text>
                        </Flex>
                      </Stack>
                    </CardBody>
                  </Center>
                </Card>
                <Card
                  background="white"
                  borderRadius="5px"
                  ml={6}
                  cursor="pointer"
                >
                  <Center>
                    <CardBody pt={4}>
                      <Stack>
                        <Image
                          src={Rexona}
                          alt="Rexona"
                          width={64}
                          height={32}
                        />
                        <Flex gap={24}>
                          <Heading size="md" pl={6}>
                            Rexona
                          </Heading>
                          <Text>Duplex</Text>
                        </Flex>
                        <Flex direction="row" gap={16}>
                          <Text pl={6}>Lekki, Phase 2</Text>
                          <Text color="blue">$2000</Text>
                        </Flex>
                      </Stack>
                    </CardBody>
                  </Center>
                </Card>
              </Flex>
            </Card>
          </VStack>
        </Stack>
      </Center>
    </>
  );
};
