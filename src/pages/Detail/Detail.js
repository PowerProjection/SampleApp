import React from 'react';
import { Text,View, Image } from 'react-native';
import useFetch from '../../hooks/useFetch';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import Config from 'react-native-config';

import styles from './Detail.styles';

function Detail({route}) {
    const prodID = route.params.id
    const URL = Config.API_URL + prodID
    const {data, loading, error} = useFetch(URL)

    if (loading) {
        return(
        <View style={{flex:1}}>
            <Loading />
        </View>
        )
    }

    if (error) {return <Error error={error} />;}

    return(
        <View style={styles.container}>
            <View style={styles.image_container}>
            <Image style={styles.image} source={{uri:data.image}} />
            </View>
            <Text style={styles.prodID} >Product ID:{data.id}</Text>
            <Text style={styles.title} >{data.title}</Text>
            <Text style={styles.desc} >{data.description}</Text>
            <Text style={styles.price} >₺{data.price}</Text>
        </View>
    )
}

export default Detail;