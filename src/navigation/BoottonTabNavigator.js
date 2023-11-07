import { StyleSheet, View } from 'react-native'

// import CartNavigator from './CartNavigator'
import Feather from '@expo/vector-icons/Feather'
// import OrdersNavigator from './OrdersNavigator'
// import ProfileNavigator from './ProfileNavigator'
// import StackNavigator from './StackNavigator'

import Principal from '../screens/Principal';
import Productos from '../screens/Productos';
import Orders from '../screens/Orders';
import Descripcion from '../screens/Descripcion';
import Categorias from '../screens/Categorias';
import Profile from '../screens/Profile';
import Cart from '../screens/Cart';
import { createDrawerNavigator } from '@react-navigation/drawer';



import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const BottomTab = createBottomTabNavigator()
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Inicio" component={Principal} />
            <Drawer.Screen name="Productos" component={Categorias} />
            <Drawer.Screen name="Carrito" component={Cart} />
            <Drawer.Screen name="Pedidos" component={Orders} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    )
}

function BottomTabNavigator() {
    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            }}
        >
            <BottomTab.Screen
                name='Home'
                component={DrawerNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={focused ? styles.iconContainer : null}>
                            <Feather name="home" size={24} color={'#FFFFFF'} />
                        </View>
                    ),
                    }}
            />
            <BottomTab.Screen
                name="Inicio"
                component={Principal}
                options={{
                tabBarIcon: ({ focused }) => (

                    <View style={focused ? styles.iconContainer : null}>
                        <Feather name="shopping-bag" size={24} color={'#FFFFFF'} />
                    </View>
                ),
                }}
            />
            <BottomTab.Screen
                name="Carrito"
                component={Cart}
                options={{
                tabBarIcon: ({ focused }) => (
                    <View style={focused ? styles.iconContainer : null}>
                        <Feather name="shopping-cart" size={24} color={'#FFFFFF'} />
                    </View>
                ),
                }}
            />
            <BottomTab.Screen
                name="ProductosPorCategoria"
                component={Productos}
                options={{
                tabBarIcon: ({ focused }) => (
                    <View style={focused ? styles.iconContainer : null}>
                        <Feather name="list" size={24} color={'#FFFFFF'} />
                    </View>
                ),
                }}
            />
            <BottomTab.Screen
                name="Descripcion"
                component={Descripcion}
                options={{
                tabBarIcon: ({ focused }) => (
                    <View style={focused ? styles.iconContainer : null}>
                        <Feather name="grid" size={24} color={'#FFFFFF'} />
                    </View>
                ),
                }}
            />
        </BottomTab.Navigator>
    )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#131627',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingTop: 5,
    },
    iconContainer: {
        backgroundColor: '#5F54B2',
        borderRadius: 5,
        padding: 5,
        width: 36,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
