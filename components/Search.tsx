'use client'
import { Center, Flex, Input, Spacer } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import { FormEvent, useContext, useEffect, useRef } from "react";
import { ISearchContext, SearchContext } from "@/app/providers";

export default function Search() {
    const filter = useContext<ISearchContext>(SearchContext)

    return (
        <Flex border='1px' borderColor='gray.200' borderRadius='lg' _focus={{ border: '1px solid blue' }}>
            <Center>
                <SearchIcon
                    mx={2}
                    color='black'
                    boxSize={6}
                />
            </Center>
            <Input onChange={(e: FormEvent<HTMLInputElement>) => filter.setSearchFilter(e.currentTarget.value)} variant='flushed' colorScheme="white" textColor='black' placeholder="Search" size='lg' />
        </Flex>
    );
}
