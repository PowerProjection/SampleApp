import React from 'react';
import {Text, View, Image,TouchableWithoutFeedback  } from 'react-native';
import styles from './ProductCard.styles';

function ProductCard({product,navigation}) {
  const id = product.id
    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate('DetailScreen', {id})}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{uri: product.image}}
          />
          <View
            style={styles.detailt_cont}>
            <Text style={styles.title} >{product.title}</Text>
            <Text style={styles.price}>₺{product.price}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
}

export default ProductCard;