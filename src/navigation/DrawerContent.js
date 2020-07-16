import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Drawer } from 'react-native-paper';
import StackNavigation from './StackNavigation';
import { DrawerContentScrollView } from '@react-navigation/drawer';


export default function DrawerContent(props) {
    const {navigation}=props;
    const [active,setActive]= useState('home');
    const onChangeScreen = (screen)=>{
        navigation.navigate(screen);
    }
    return (
        <DrawerContentScrollView>
            <Drawer.Section>
                <Drawer.Item
                    label = 'inicio'
                    active={false}
                    onPress = {()=>onChangeScreen('home')}
                />
                <Drawer.Item
                    label = 'search'
                    active={false}
                    onPress = {()=>onChangeScreen('search')}
                />
                <Drawer.Item
                    label = 'juegos'
                    active={false}
                    onPress = {()=>onChangeScreen('videogames')}
                />

            </Drawer.Section>
        </DrawerContentScrollView>

    )
}
const styles = StyleSheet.create({})