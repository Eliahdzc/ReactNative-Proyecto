import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0F1E9",
    alignItems: "center",
    justifyContent: "top",
    paddingTop: 0,
  },

  containerButton: {
    top: 20,
    bottom: 20,
  },

  containerLogo: {
   
    paddingTop: 5,
  },

  logo: {
    width: 200,
    height: 200,
  },

    recepies: {
    fontSize: 20,
    fontWeight: "100",
    padding: 10,
    fontFamily: "Frederica",
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
    fontSize: 15,
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
    fontSize: 15,
    paddingLeft: 15,
    color: "#fff",
    fontWeight: "100",
    fontVariant: "no-common-ligatures",
    fontFamily: "GrandHotel",
  },
  textList: {
    fontSize: 20,
    paddingLeft: 15,
    fontWeight: "100",
    fontVariant: "no-common-ligatures",
    fontFamily: "GrandHotel",
  },
});
