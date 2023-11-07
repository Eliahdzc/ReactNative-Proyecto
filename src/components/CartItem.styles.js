import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#C5E3AC',
  },
  name: {
    fontSize: 15,
  },
  image: {
    width: 100,
    height: 100,
    justifyContent: 'center',
  },
  details: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
