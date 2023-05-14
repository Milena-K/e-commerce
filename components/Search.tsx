'use client'
import { Center, Flex, Input, Spacer } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'

export default function Search() {
    return (
        <Flex w='60%' border='1px' borderColor='gray.200' borderRadius='lg' _focus={{ border: '1px solid blue' }}>
            <Center>
                <SearchIcon
                    mx={2}
                    color='black'
                    boxSize={6}
                />
            </Center>
            <Input variant='flushed' colorScheme="white" textColor='white' placeholder="Search" size='lg' />
        </Flex>
    );
}
