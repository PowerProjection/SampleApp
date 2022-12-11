import React from 'react';
import { View,Text } from 'react-native';
import LottieView from 'lottie-react-native';

function Error({error}) {
    return (
      <View style={{flex: 1}}>
        <LottieView source={require('../../assets/error.json')} autoPlay loop />
        <Text>Error:{error}</Text>
      </View>
    ); 
}

export default Error;