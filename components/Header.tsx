"use client";
import { Box, Button, Divider, Flex, Center } from "@chakra-ui/react";
import Search from "./Search";
import Link from "next/link";
import useHasMounted from "@/hooks/useHasMounted";
import { useGetAllCategoriesQuery } from "@/api/apiSlice";

export default function Header() {
    const hasMounted = useHasMounted()
    const {
        data: categories,
        isSuccess,
    } = useGetAllCategoriesQuery()

    if (!hasMounted) return null;

    return (
        <Box>
            <Center my='2'>
                <Search />
            </Center>
            <Divider />

            <Center >
                {
                    isSuccess && categories.map((category: string) => {
                        return (
                            <Link href="/">
                                <Button variant='ghost'>
                                    {category}
                                </Button>
                            </Link>
                        )
                    })

                }
            </Center>
        </Box >
    );
}
