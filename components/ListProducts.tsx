'use client'
import { SimpleGrid, Spinner } from "@chakra-ui/react"
import { ProductCard } from "./Card"
import { useGetAllProductsQuery, useGetProductsInCategoryQuery } from "@/api/apiSlice"
import { IProduct } from "@/ts/interfaces/product.interfaces"
import { useSelector } from "react-redux"
import { useContext, useEffect, useMemo } from "react"
import { SearchContext } from "@/app/providers"


export default function ListProducts() {

    // TODO: show products based od category
    const showCategory = useSelector((state) => state.products.showCategory)
    const searcFilter = useContext(SearchContext)

    let productsQueryResult;

    if (showCategory == 'all') {
        productsQueryResult = useGetAllProductsQuery();
    } else {
        productsQueryResult = useGetProductsInCategoryQuery(showCategory);
    }



    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
    } = productsQueryResult

    const products: IProduct[] = data


    let content;
    if (isLoading) {
        content = <Spinner color="blue" />
    } else if (isSuccess) {
        const filteredProducts = products.filter((prod: IProduct) => prod.title.toLowerCase().startsWith(searcFilter.filter.toLowerCase()))
        content = filteredProducts.map(({ id, title, price, description, category, image }: IProduct) => {
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
