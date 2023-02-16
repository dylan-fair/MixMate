import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from '../Screens/SignIn';
import NewAccount from '../Screens/NewAccount';
import PasswordReset from '../Screens/PasswordReset';
import ActivateAccount from '../Screens/ActivateAccount';
import HomeScreen from '../Screens/HomeScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='SignIn' component={SignIn}/>
                <Stack.Screen name="NewAccount" component={NewAccount}/>
                <Stack.Screen name='PasswordReset' component={PasswordReset}/>
                <Stack.Screen name='ActivateAccount' component={ActivateAccount}/>

                <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;