import { View, Text, StatusBar } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './StackNavigator';
import { Camera } from 'react-native-vision-camera';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Cam from '../screens/Camera';
import Gallery from '../screens/Gallery';


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
  const [photo, setPhoto] = useState();
  const [photoTaken, setPhotoTaken] = useState(0);



  return (
    <PeliculasContext.Provider value={{
      peliculas, 
      setPeliculas,
      photo,
      setPhoto,
      photoTaken,
      setPhotoTaken
    }}>
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
            drawerActiveTintColor: 'orange',
            drawerInactiveTintColor: '#EFFFFD',
            headerStyle: {
              backgroundColor: '#42C2FF',
            },
            headerTintColor: '#fff'
          }}
        >
          <Drawer.Screen 
            name="StackNavigator" 
            component={StackNavigator} 
            options={{ 
              title: 'Home',
              headerTitle: 'Home' 
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
            name="Gallery" 
            component={Gallery} 
            options={{ 
              unmountOnBlur: true, 
              headerTitle: 'Gallery' ,
            }} 
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </PeliculasContext.Provider>
  )
}

export default Index