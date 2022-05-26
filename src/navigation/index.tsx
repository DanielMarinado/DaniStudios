import { View, Text } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './StackNavigator';
import { Camera } from 'react-native-vision-camera';


export const PeliculasContext = createContext({});


const Index = () => {

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
          <StackNavigator />
        </NavigationContainer>
    </PeliculasContext.Provider>
  )
}

export default Index