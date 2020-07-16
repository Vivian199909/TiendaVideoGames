import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import {IconButton} from 'react-native-paper';
import Home from '../screens/Home';
import Search from '../screens/Search';
import VideoGames from '../screens/VideoGames';
//import StackNavigation from './StackNavigation';
import Navigation from './Navigation';

const Stack = createStackNavigator();
export default function StackNavigation(props) {
    console.log(props);
    const buttonLeft= ()=>{
        <IconButton
        icon = 'menu'
        onPress={()=> navigation.openDrawer()}
        />

        
    }
    return (
            <Stack.Navigator>
            <Stack.Screen
                name="home"
                component={Home}
                options={{
                title: 'Tienda de videoJuegos',
                headerLeft: () => buttonLeft(),
                //headerRight: () => buttonRight(),
                }}
            />
            <Stack.Screen
                name="search"
                component={Search}
                options={{
                title: 'Lista de juegos',
                headerLeft: () => buttonLeft(),
                //headerRight: () => buttonRight(),
                }}
            />
            <Stack.Screen
                name="videogames"
                component={VideoGames}
                options={{
                title: 'VideoJuegos',
                headerLeft: () => buttonLeft(),
                //headerRight: () => buttonRight(),
                }}
            />
            </Stack.Navigator>
            )
}
