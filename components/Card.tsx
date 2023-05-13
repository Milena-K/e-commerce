'use client'
import {
    Card, CardBody, Image,
    Text, Divider, CardFooter,
    Button, ButtonGroup, Stack, Heading,
} from "@chakra-ui/react"
import { itemAdded, itemRemoved, clearCart } from '../store/cartSlice'
import { useDispatch, useSelector } from "react-redux"

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
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{title}</Heading>
                    <Text>{description}</Text>
                    <Text color='blue.600' fontSize='2xl'>
                        {price}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Buy now
                    </Button>
                    <Button
                        onClick={() => dispatch(itemAdded(product))}
                        aria-label="Add to cart"
                        variant='ghost'
                        colorScheme='blue'>
                        Add to cart
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}
