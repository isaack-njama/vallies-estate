import { Button, Card, Text, Flex, Spacer, Heading } from '@chakra-ui/react'
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';

export const SearchCard = () => {
    return (
        // <Flex direction='row'>
            <Card direction='row' m={20} p={10} gap={35}>
                <Flex direction='column'>
                    <Heading color='blue'>
                        Location <ChevronDownIcon />
                    </Heading>
                    <Text>Lekki</Text>
                </Flex>
                <Spacer />
                <Flex direction='column'>
                    <Heading color='blue'>
                        Property Type <ChevronDownIcon />
                    </Heading>
                    <Text>Duplex</Text>
                </Flex>
                <Spacer />
                <Flex direction='column'>
                    <Heading color='blue'>
                        Max Price <ChevronDownIcon />
                    </Heading>
                    <Text>$10,000</Text>
                </Flex>
                <Button bg='blue' color={'white'} m={5} w="120px">
                    <SearchIcon m={5} /> Search
                </Button>
            </Card>
        // </Flex>
    )
}