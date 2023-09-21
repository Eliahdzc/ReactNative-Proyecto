import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Principal from '../screens/Principal';
import Productos from '../screens/Productos';

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
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;