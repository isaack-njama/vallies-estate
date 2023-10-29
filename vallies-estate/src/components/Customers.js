import React from "react";
import { Center, Flex, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { Card, CardHeader, CardBody } from "@chakra-ui/card";

export const Customers = () => {

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
                <Heading color="blue">Our Esteemed Customers</Heading>
                <Text>This is what our clients are saying</Text>
            </CardHeader>
            <Flex direction="row" fontSize="md" mt={20} m="auto">
              <Card background="white" borderRadius="5px" cursor='pointer'>
                <Center>
                  <CardBody
                    pt={4}
                  >
                    <Stack>
                        <Heading size='md'>Alex Godwin</Heading>
                        <Text>South Africa</Text>
                        <Text>
                            Lorem ipsum dolor sit amet, <br />
                            consectetur adipiscing elit. Fames ut <br /> 
                            dictumst urna, lorem nibh. Pretium leo <br />
                            hendrerit interdum netus
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
                    <Stack>
                        <Heading size='md'>Alex Godwin</Heading>
                        <Text>South Africa</Text>
                        <Text>
                            Lorem ipsum dolor sit amet, <br />
                            consectetur adipiscing elit. Fames ut <br /> 
                            dictumst urna, lorem nibh. Pretium leo <br />
                            hendrerit interdum netus
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
                    <Stack>
                        <Heading size='md'>Alex Godwin</Heading>
                        <Text>South Africa</Text>
                        <Text>
                            Lorem ipsum dolor sit amet, <br />
                            consectetur adipiscing elit. Fames ut <br /> 
                            dictumst urna, lorem nibh. Pretium leo <br />
                            hendrerit interdum netus
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
