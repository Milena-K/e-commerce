'use client'
import { Box, Spacer, Flex } from "@chakra-ui/react"
import ListProducts from "./ListProducts"

const Home = () => {
    return (
        <Flex>
            <Spacer />
            <Box w='80%'>
                <ListProducts />
            </Box>
            <Spacer />
        </Flex >
    )
}

export default Home
