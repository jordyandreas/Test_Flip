import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import pages
import transList from '../pages/transactionList';
import detList from '../pages/detailTransaction';

const StackTransaction = createNativeStackNavigator();

const Navigation = () => (
    <NavigationContainer>
        <StackTransaction.Navigator
            initialRouteName='TransList'
            screenOptions={{ headerShown: false }}
        >
            <StackTransaction.Screen name='TransList' component={transList} />
            <StackTransaction.Screen name='DetList' component={detList} />
        </StackTransaction.Navigator>
    </NavigationContainer >
);

export default Navigation;