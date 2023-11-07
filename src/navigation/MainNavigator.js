import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Principal from '../screens/Principal';
import Productos from '../screens/Productos';
import Descripcion from '../screens/Descripcion';
import Cart from '../screens/Cart';

const Stack = createNativeStackNavigator();

export const MainNavigator = () =>  {
    return (
        <Stack.Navigator initialRouteName='Principal'>
            <Stack.Screen
                name="Principal"
                component={Principal}
                options={{
                    title: "Pagina principal"
                }}
            />
            <Stack.Screen
                name="Productos"
                component={Productos}
                options={{
                    title: "Productos"
                }}
            />
            <Stack.Screen
                name="Descripcion"
                component={Descripcion}
                options={{
                    title: "Descripción de Producto"
                }}
            />
            <Stack.Screen
                name="Cart"
                component={Cart}
                options={{
                    title: "Productos en Carrito"
                }}
            />
             <Stack.Screen
                name="Cart"
                component={Cart}
                options={{
                    title: "Productos en Carrito"
                }}
            /> <Stack.Screen
                name="Cart"
                component={Cart}
                options={{
                    title: "Productos en Carrito"
            }}
            /> <Stack.Screen
                name="Cart"
                component={Cart}
                options={{
                title: "Productos en Carrito"
            }}
            />
             <Stack.Screen
                name="Cart"
                component={Cart}
                options={{
                    title: "Productos en Carrito"
                }}
            />
        </Stack.Navigator>
    )
}

export default MainNavigator;