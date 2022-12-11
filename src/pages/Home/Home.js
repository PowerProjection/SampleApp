import React from 'react';
import { Text,View, Button,Image } from 'react-native';
import styles from './Home.styles';

function Home({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to our shopping application.</Text>
            <View style={styles.image_container}>
            <Image style={styles.image} source={require('../../assets/welcome.jpg')} />
            </View>
            <Button title="Click here to go to Products page" onPress={() => navigation.navigate('ProductScreen')} />
        </View>
    )
}

export default Home;