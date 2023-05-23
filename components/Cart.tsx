import { Icon } from '@chakra-ui/icons'
import { Box, Button, Flex, Input, useDisclosure } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { IProduct } from '@/ts/interfaces/product.interfaces'
import store, { RootState } from '@/store/store'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import { emptyCart } from '@/store/cartSlice'


const Cart = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef<HTMLButtonElement>(null)
    const cartItems = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch()


    return (
        <>
            <Button ref={btnRef} bg='white' border='solid 1px black' onClick={onOpen}>
                <Icon as={FaShoppingCart} />
            </Button>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size='md'
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Cart</DrawerHeader>

                    <DrawerBody>
                        <Flex direction='row-reverse' gap={2}>
                            <Button colorScheme='blue'>Buy</Button>
                            <Button variant='outline' mr={3} onClick={() => dispatch(emptyCart())}>
                                Clear
                            </Button>
                        </Flex>
                        {
                            cartItems.cart.map((item: IProduct) => (
                                <CartItem key={item.id} item={item} />
                            ))
                        }

                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )

}

export default Cart
