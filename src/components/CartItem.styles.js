import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#C5E3AC',
  },
  name: {
    fontSize: 30,
  },
  image: {
    width: 150,
    height: 150,
  },
  details: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
