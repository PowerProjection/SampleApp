import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: '#e5e5e5',
    flex: 1,
    flexDirection: 'row',
    borderRadius:1
  },
  image: {
    width: 100,
    minHeight: 100,
    backgroundColor: 'white',
    resizeMode: 'contain',
    borderRadius: 25,
  },
  detailt_cont: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 5,
  },
  title: {
    fontWeight:'bold',
    color:'#5c5c5c',
    fontSize:15
  },
  price: {
    textAlign: 'right',
    color:'red',
    fontWeight:'bold',
    fontSize:18,
  },
});
