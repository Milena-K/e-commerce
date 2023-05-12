'use client'
import ListProducts from '../components/ListProducts'
import { Providers } from './Providers'

export default function Home() {
    return (
        <Providers>
            <ListProducts />
        </Providers>

    )
}
