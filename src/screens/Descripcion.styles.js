import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    backgroundColor:'#E0F1E9',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: "Frederica",
  },
  imageContainer: {
    padding: 5,
  },
  image: {
    alignSelf: 'center',
    margin: 10,
    height: 200,
    width: 200,
  },
  descripcionContainer: {
    height: '30%',
    width: '100%', 
    alignContent: 'center',
  },
  descripcion: {
    alignSelf: 'center',
    margin: 0,
    height: '100%' ,
    width: '100%',
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 0,
    alignSelf: 'center',
    padding: 10,
  },
  buttonATC: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    backgroundColor: '#C5E3AC',
    marginBottom: 30,
    height: 50,
    width: '50%',
    padding: 10,
  }
})

 