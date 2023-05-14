'use client'

import { SimpleGrid, Spinner } from "@chakra-ui/react"
import { ProductCard } from "./Card"
// import { useEffect, useState } from "react"
import { useGetAllProductsQuery } from "@/api/apiSlice"
import { IProduct } from "@/ts/interfaces/product.interfaces"
import useHasMounted from "@/hooks/useHasMounted"


export default function ListProducts() {
    // const [products, setProducts] = useState([]);

    const {
        data: products,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetAllProductsQuery();


    const hasMounted = useHasMounted();

    if (!hasMounted) {
        return null;
    }

    let content;

    if (isLoading) {
        content = <Spinner color="blue" />
    } else if (isSuccess) {
        content = products.map(({ id, title, price, description, category, image }: IProduct) => {
            return (
                <ProductCard
                    key={id}
                    id={id}
                    category={category}
                    title={title}
                    price={price}
                    description={description}
                    image={image}
                />)
        })
    } else if (isError) {
        content = <div>{error.toString()}</div>
    }

    return (
        <SimpleGrid columns={{ sm: 2, md: 3, lg: 6 }} spacing={4}>
            {content}
        </SimpleGrid>
    )
}
