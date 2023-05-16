"use client";
import { Box, Button, Divider, Center } from "@chakra-ui/react";
import Search from "./Search";
import { useGetAllCategoriesQuery } from "@/api/apiSlice";
import { useDispatch } from "react-redux";
import { showCategory } from "@/store/productsSlice";

export default function Header() {
  const {
    data: categories,
    isSuccess,
  } = useGetAllCategoriesQuery()

  const dispatch = useDispatch()

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
              <Button key={category} variant='ghost' onClick={() => dispatch(showCategory(category))}>
                {category}
              </Button>
            )
          })

        }
      </Center>
    </Box >
  );
}
