"use client";
import { Box, Button, Divider, Center, Flex, Grid, SimpleGrid, Spacer, GridItem } from "@chakra-ui/react";
import Search from "./Search";
import { useGetAllCategoriesQuery } from "@/api/apiSlice";
import { useDispatch } from "react-redux";
import { showCategory } from "@/store/productsSlice";
import Cart from "./Cart";

export default function Header() {
  const {
    data: categories,
    isSuccess,
  } = useGetAllCategoriesQuery()

  const dispatch = useDispatch()

  return (
    <Box>
      <Grid p={1} templateColumns='repeat(5, 0.25fr)'>
        <GridItem colSpan={1}>
        </GridItem>
        <GridItem colSpan={3}>
          <Search />
        </GridItem>
        <GridItem colSpan={1}>
          <Center pt={1}>
            <Cart />
          </Center>
        </GridItem>
      </Grid>
      <Divider />

      <Center p={2}>
        <Button key='all' variant='ghost' onClick={() => dispatch(showCategory('all'))}>
          all
        </Button>
        {
          isSuccess && categories.map(category => {
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
