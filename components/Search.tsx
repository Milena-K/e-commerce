'use client'
import { Input } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import './search.css'

export default function Search() {
    return (
        <div className="search">
            <SearchIcon
                mx={2}
                color='white'
                boxSize={6}
            />
            <Input focusBorderColor='white' colorScheme="white" textColor='white' placeholder="Search" size='lg' />
        </div>
    );
}
