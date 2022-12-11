import { StyleSheet, Dimensions } from 'react-native';
const deviceSize = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        flexDirection:'column',
        justifyContent:'space-between',
    },
    welcome:{
        fontWeight:'bold',
        fontSize:20,
        color:'indigo',
        textAlign:'center',
        marginVertical:10,
    },
    image:{
        flex:6,
        width:deviceSize.width,
        resizeMode:'center'
    },
    image_container:{
        flex:1,
    }

});