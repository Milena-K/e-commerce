'use client'

import { SimpleGrid } from "@chakra-ui/react"
import { ProductCard } from "./Card"
import { useEffect, useState } from "react"


export default function ListProducts() {
    const [products, setProducts] = useState([]);

    const fetchProducts = () => {
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res => res.json())
            .then(res => setProducts(res))
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <SimpleGrid
            columns={4}
            spacing={4}
        >

            {
                products.map(({ id, title, price, description, category, image }) => {
                    return (
                        <ProductCard
                            key={id}
                            id={id}
                            category={category}
                            title={title}
                            price={price}
                            description={description}
                            image={image}
                        />
                    )
                })
            }

        </SimpleGrid>
    )
}
