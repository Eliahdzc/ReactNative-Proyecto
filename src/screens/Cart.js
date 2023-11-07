import { FlatList, Pressable, Text, View } from 'react-native'
import React, { useEffect } from 'react'

import CartItem from '../components/CartItem'
import styles from './Cart.styles'
import { usePostOrderMutation } from '../services/shopApi'
import { clearCart } from '../features/cart/cartSlice'
import { useSelector, useDispatch } from 'react-redux'

const Cart = ({navigation}) => {
    const cart = useSelector(state => state.cart.items)
    const total = useSelector(state => state.cart.total)
    const [triggerPost, result] = usePostOrderMutation()
    const dispatch = useDispatch()

    const renderItem = ({ item }) => <CartItem item={item} />

    const confirmCart = async () => {
        try{
            const orderNumber = await triggerPost({ total, cart, user: 'LoggedUser' }).unwrap()
            console.log('good', orderNumber)
            dispatch(clearCart())
            navigation.navigate('Pedidos', {orderId: orderNumber.name})
        } catch(error) {
            console.log('error', error)
        }
    }

    return (
        <View style={styles.container}>
        <View style={styles.listContainer}>
            <FlatList
                data={cart}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
        <View style={styles.buttonContainer}>
            <Pressable onPress={confirmCart}>
                <Text style={{textAlign: 'center', color: 'black', fontSize: 20 }}>Confirmar</Text>
                <View>
                    <Text style={{textAlign: 'center', color: 'black', fontSize: 20 }}>{`Total $${total}`}</Text>
                </View>
            </Pressable>
        </View>
        </View>
    )
}

export default Cart
