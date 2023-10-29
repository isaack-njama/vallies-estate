import React from "react";
import { Center, Flex, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { Card, CardHeader, CardBody } from "@chakra-ui/card";
import AddressMark from '../assets/images/address mark.png';
import SmartHouse from '../assets/images/Smart house.png';
import SecureDataProtection from '../assets/images/Secure data protection with fingerprint and lock.png';

export const Products = () => {

  return (
    <Center>
      <Stack justify="space-between" pt={8} mt={12} mb={16}>
        <VStack pt={6}>
          <Card
            borderRadius="5px"
            color="black"
            w="1477px"
            h="500px"
            mb={8}
          >

            <CardHeader>
                <Heading size="lg" color="blue" mt={6} textAlign="left">
                    Our Products
                </Heading>
                <Heading color="blue">How it works.</Heading>
                <Text>This is how our products work</Text>
            </CardHeader>
            <Flex direction="row" fontSize="md" mt={20} m="auto">
              <Card background="white" borderRadius="5px" cursor='pointer'>
                <Center>
                  <CardBody
                    pt={4}
                  >
                    <Center pb={3}>
                        <Image src={AddressMark} alt="Address Mark" height={16} />
                    </Center>
                    <Stack>
                        <Heading size='md'>Find Home</Heading>
                        <Text>
                            Our properties are located at <br />
                            prime areas where by there <br /> 
                            won't be problem with <br />
                            transportation
                        </Text>
                    </Stack>
                  </CardBody>
                </Center>
              </Card>
              <Card
                background="white"
                borderRadius="5px"
                ml={6}
                cursor='pointer'
              >
                <Center>
                  <CardBody
                    pt={4}
                  >
                    <Center pb={3}>
                        <Image src={SmartHouse} alt="Address Mark" height={16} />
                    </Center>
                    <Stack>
                        <Heading size='md'>Make payments</Heading>
                        <Text>
                            Our estates come with <br />
                            good network, portable <br /> 
                            water, 24hrs light and round <br />
                            the clock security.
                        </Text>
                    </Stack>
                  </CardBody>
                </Center>
              </Card>
              <Card
                background="white"
                borderRadius="5px"
                ml={6}
                cursor='pointer'
              >
                <Center>
                  <CardBody
                    pt={4}
                  >
                    <Center pb={3}>
                        <Image src={SecureDataProtection} alt="Address Mark" height={16} />
                    </Center>
                    <Stack>
                        <Heading size='md'>Make it Official</Heading>
                        <Text>
                            We have been in business for <br />
                            over 32 years, for client <br /> 
                            outside the country you can <br />
                            trust us to deliver well.
                        </Text>
                    </Stack>
                  </CardBody>
                </Center>
              </Card>
            </Flex>
          </Card>
        </VStack>
      </Stack>
    </Center>
  );
};
