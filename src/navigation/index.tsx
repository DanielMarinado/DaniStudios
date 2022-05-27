import { View, Text, StatusBar } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './StackNavigator';
import { Camera } from 'react-native-vision-camera';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Cam from '../screens/Camera';


export const PeliculasContext = createContext({});




const Index = () => {
  const Drawer = createDrawerNavigator();

  const initCamera = async() =>{
    const newCameraPermission = await Camera.requestCameraPermission()
    const newMicrophonePermission = await Camera.requestMicrophonePermission()
  }

  useEffect(() => {
    initCamera()
  }, [])
  

  const [peliculas, setPeliculas] = useState([]);

  return (
    <PeliculasContext.Provider value={{peliculas, setPeliculas}}>
        <NavigationContainer>
          <StatusBar 
            backgroundColor = {'black'}
            barStyle = "light-content"
          />
          <Drawer.Navigator
            initialRouteName='Stack'
            screenOptions={{
              headerShown: false,
              drawerContentStyle: {
                backgroundColor: 'black'
              },
              // drawerActiveBackgroundColor: '#85F4FF',
              // drawerInactiveBackgroundColor: '#B8FFF9',
              drawerActiveTintColor: 'orange',
              drawerInactiveTintColor: '#EFFFFD',
              headerStyle: {
                backgroundColor: '#42C2FF',
              },
              headerTintColor: '#fff'
            }}
          >
            <Drawer.Screen 
              name="Inicio" 
              component={StackNavigator} 
              options={{ 
                headerTitle: 'Inicio' 
              }} 
            />
            <Drawer.Screen 
              name="Camera" 
              component={Cam} 
              options={{ 
                unmountOnBlur: true, 
                headerTitle: 'Camera' ,
              }} 
            />
            <Drawer.Screen 
              name="See Photo" 
              component={Cam} 
              options={{ 
                unmountOnBlur: true, 
                headerTitle: 'See Photo' ,
              }} 
            />
          </Drawer.Navigator>
        </NavigationContainer>
    </PeliculasContext.Provider>
  )
}

export default Index