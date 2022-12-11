import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home'
import Product from './pages/Product'
import Detail from './pages/Detail'


const Stack = createNativeStackNavigator();

function Router() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={Home} options={{title:'~SHOPPING~',headerTitleAlign:'center', headerTitleStyle:{fontWeight:'bold'}}} />
                <Stack.Screen name="ProductScreen" component={Product} options={{title:'PRODUCTS'}} />
                <Stack.Screen name="DetailScreen" component={Detail} options={{title:'PRODUCT'}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;