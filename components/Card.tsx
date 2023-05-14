'use client'
import {
    Card, CardBody, Image,
    Text, Divider, CardFooter,
    Button, ButtonGroup, Stack, Heading, Icon, Box, Spacer, Flex, Center, Tooltip,
} from "@chakra-ui/react"
import { itemAdded, itemRemoved, clearCart } from '../store/cartSlice'
import { useDispatch, useSelector } from "react-redux"
import { AddIcon } from "@chakra-ui/icons";

interface Props {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export const ProductCard: React.FC<Props> = ({
    id,
    title,
    price,
    description,
    category,
    image,
}) => {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const product = {
        id,
        title,
        price,
        description,
        category,
        image,
    }

    return (
        <Card maxW='sm'>
            <CardBody>
                <Image
                    src={image}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
            </CardBody>
            <Divider />
            <Box m={4} >
                <Text fontSize='md'>{title}</Text>
                <Flex alignItems='center'>
                    <Box ml={2}>
                        <Text color='blue.600' fontSize='2xl'>
                            $ {price}
                        </Text>
                    </Box>
                    <Spacer />
                    <Box>
                        <Tooltip label='Add to cart' fontSize='md'>
                            <Button
                                onClick={() => dispatch(itemAdded(product))}
                                aria-label="Add to cart"
                                variant='outline'
                                colorScheme='blue'>
                                <AddIcon />
                            </Button>
                        </Tooltip>
                    </Box>
                </Flex>
            </Box>
        </Card>
    )
}
