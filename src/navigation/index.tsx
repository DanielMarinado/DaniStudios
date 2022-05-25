import { View, Text } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './StackNavigator';

export const PeliculasContext = createContext({});


const Index = () => {

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