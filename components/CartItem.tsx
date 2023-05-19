import { itemRemoved } from "@/store/cartSlice"
import { IProduct } from "@/ts/interfaces/product.interfaces"
import { CloseIcon } from "@chakra-ui/icons"
import { Box, Button, Divider, Flex, Grid, GridItem, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react"
import { useDispatch } from "react-redux"

interface ICartItem {
    item: IProduct,
}

const CartItem = ({ item }: ICartItem) => {
    const dispatch = useDispatch()

    return (
        <>
            <Grid templateColumns='repeat(5, 0.25fr)' paddingTop={4} paddingBottom={2}>
                <GridItem>
                    <Image src={item.image} boxSize='100px' objectFit='contain' />
                </GridItem>
                <GridItem colSpan={3}>
                    <Text fontSize='lg'>{item.title}</Text>
                </GridItem>
                <GridItem>
                    <Flex direction='row-reverse' paddingBottom={2}>
                        <Button size='xs'
                            bgColor='lightpink'
                            color='white'
                            onClick={() => dispatch(itemRemoved(item))}>
                            <CloseIcon />
                        </Button>
                    </Flex>
                    <Text width='100%' align='end' fontWeight='bold' fontSize='xl'>${item.price}</Text>
                </GridItem>
            </Grid>
            <Divider />
        </>

    )

}

export default CartItem
