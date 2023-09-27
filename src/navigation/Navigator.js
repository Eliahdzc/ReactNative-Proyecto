import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Principal from '../screens/Principal';
import Productos from '../screens/Productos';
import Descripcion from '../screens/Descripcion';

const Stack = createNativeStackNavigator();

export const Navigator = () =>  {
    return (
        <NavigationContainer>
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
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;