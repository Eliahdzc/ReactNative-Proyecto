import {Text, View, Button, FlatList, TouchableOpacity, Image} from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import styles from './Productos.styles.js'
import { useGetProductsQuery } from '../services/shopApi'
// import fonts from "../global/fonts";
// import { useFonts } from "expo-font";

export const Productos = ({navigation}) => {
    const { data, isLoading } = useGetProductsQuery();


    console.log(data)

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Productos</Text>
                    {data?.map((elem, index) => {
                        return (
                            <Text key={index}>{elem.id}</Text>
                        )
                    })}

<View style={styles.listContainer}>
          <FlatList
            data={data}
            numColumns={2}
            columnWrapperStyle={styles.weapperStyle}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.productContainer}
                onPress={() => navigation.navigate('Details', { product: item })}
              >
                <Image
                  style={styles.image}
                  source={{
                    uri: item.imagen,
                  }}
                />
                <Text style={styles.title}>{item.titulo}</Text>
                <Text style={styles.price}>{`$${item.precio}`}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </View>

            <Button
                title="Ir a Principal"
                onPress={() => navigation.navigate('Principal')}
            />
        </View>
    )
};

export default Productos;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#E0F1E9",
//         alignItems: "center",
//         justifyContent: "top",
//         paddingTop: 50,
//     }
// });