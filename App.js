import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import Modal from "./components/Modal";
import Logo from "./components/Logo";
import fonts from "./src/global/fonts";
import { useFonts } from "expo-font";



export default function App() {
  const [textValue, setTextValue] = useState("");
  const [itemsList, setItemsList] = useState([]);
  const [itemSelected, setItemSelected] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [fontsLoaded] = useFonts(fonts);

  const onHandleChangeItem = (text) => setTextValue(text);

  const addItem = () => {
    if (textValue === "") {
      return;
    }
    setItemsList((prevState) => [
      ...prevState,
      { id: Math.random(), value: textValue },
    ]);
    setTextValue("");
  };

  const renderListItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onHandleModal(index)}
    >
      <Text style={styles.textItem}>{item?.value}</Text>
    </TouchableOpacity>
  );

  const onHandleDelete = () => {
    console.log(itemSelected);
    let arr = itemsList;
    arr.splice(itemSelected, 1);
    setItemsList(arr);
    setModalVisible(false);
  };

  const onHandleModal = (index) => {
    setModalVisible(true);
    setItemSelected(index);
  };

  if (!fontsLoaded) return null

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
          <Logo />
      <View>
        </View>
        <Text style={styles.recepies}>
          Recetas de postres que te gustaría recibir
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ingresa la Receta"
          value={textValue}
          onChangeText={onHandleChangeItem}
        />
        <Button
          title="Agregar a mi lista"
          color={"#646cff"}
          borderRadius={30}
          onPress={addItem}
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={itemsList}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Modal modalVisible={modalVisible} onHandleDelete={onHandleDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0F1E9",
    alignItems: "center",
    justifyContent: "top",
    paddingTop: 50,
  },

  containerLogo: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },

  logo: {
    width: 200,
    height: 200,
  },

  title: {
    fontSize: 50,
    fontWeight: "800",
    fontFamily: 'AbrilFatface',
  },

  recepies: {
    fontSize: 40,
    fontWeight: "500",
    padding: 30,
    fontFamily: 'AbrilFatface'
  },

  inputContainer: {
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  input: {
    width: 200,
    height: 50,
    fontSize: 17,
    paddingLeft: 10,
    borderRadius: 20,
  },
  listContainer: {
    marginTop: 25,
  },
  itemContainer: {
    height: 40,
    width: 150,
    marginVertical: 8,
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#646cff",
    shadowColor: "#646cff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 2,
  },
  textItem: {
    fontSize: 18,
    paddingLeft: 15,
    color: "#fff",
    fontWeight: "600",
    fontVariant: "no-common-ligatures",
    fontFamily: 'GrandHotel',
  },
});
