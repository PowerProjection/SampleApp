import React from 'react';
import { FlatList, Text, View,  } from 'react-native';
import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import ProductCard from '../../components/ProductCard/ProductCard';

import styles from './Product.styles';

function Product({navigation}) {
    const URL = Config.API_URL;
    
    const {data,loading,error} = useFetch(URL)
    function renderProducts({item}) {return <ProductCard product={item} navigation={navigation} /> ;}

    if (loading) {
        return(
        <View style={{flex:1}}>
            <Loading />
        </View>
        )
    }

    if (error) {
        return <Error error={error} />;
    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.welcome}>
                Welcome Mr./Mrs. Customer :{')'}
            </Text>
            <FlatList style={styles.flatlist} data={data} renderItem={renderProducts} />
        </View>
    )
}

export default Product;