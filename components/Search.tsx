'use client'
import { Center, Flex, Input, Spacer } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import { useContext, useEffect, useRef } from "react";
import { ISearchContext, SearchContext } from "@/app/providers";

export default function Search() {
    const filter = useContext<ISearchContext>(SearchContext)

    const setFilter = (e) => {
        filter.setSearchFilter(e.target.value)
    }

    return (
        <Flex border='1px' borderColor='gray.200' borderRadius='lg' _focus={{ border: '1px solid blue' }}>
            <Center>
                <SearchIcon
                    mx={2}
                    color='black'
                    boxSize={6}
                />
            </Center>
            <Input onChange={setFilter} variant='flushed' colorScheme="white" textColor='black' placeholder="Search" size='lg' />
        </Flex>
    );
}
