import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image_container: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    minWidth: 200,
    minHeight: 200,
    resizeMode: 'contain',
  },
  prodID: {
    margin: 10,
    marginBottom: 10,
    fontSize: 10,
    textAlign: 'right',
  },
  title: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  desc: {
    margin: 10,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'red',
  },
});
