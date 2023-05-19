'use client'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import store from '../store/store'
import Home from "@/components/Home"
import { createContext, useState } from 'react'

export interface ISearchContext {
    filter: string,
    setSearchFilter: (filter: string) => void
}

export const SearchContext = createContext<ISearchContext>({
    filter: '',
    setSearchFilter: () => {}
})

export function Providers({ children }: { children: React.ReactNode }) {
    const setSearchFilter = (newFilter: string) => {
        setFilter((newF) => ({
            filter: newFilter,
            setSearchFilter
        }))
    }
    const [filter, setFilter] = useState<ISearchContext>({
        filter: '',
        setSearchFilter
    })

    return (
        <ChakraProvider>
            <Provider store={store}>
                <SearchContext.Provider value={filter}>
                    {children}
                </SearchContext.Provider>
            </Provider>
        </ChakraProvider >
    )
}
