"use client";
import { Box, Divider } from "@chakra-ui/react";
import Search from "./Search";
import Link from "next/link";
import useHasMounted from "@/hooks/useHasMounted";
import { useGetAllCategoriesQuery } from "@/api/apiSlice";

/*
 * "electronics",
            "jewelery",
            "men's clothing",
            "women's clothing"
 */

export default function Header() {
  const hasMounted = useHasMounted()
  const {
    data: categories,
    isSuccess,
  } = useGetAllCategoriesQuery()

  if (!hasMounted) return null;

  return (
    <Box>
      <Search />
      <Divider />
      <Box>
        {
          isSuccess && categories.map((category: string) => {
            return (<Link href="/"> {category}</Link>)
          })

        }
      </Box>
    </Box >
  );
}
