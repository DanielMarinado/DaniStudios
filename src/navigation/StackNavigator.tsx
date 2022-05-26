import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Details from '../screens/Details'
import Cam from '../screens/Camera';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator 
      screenOptions={{ 
        headerBackTitle: 'Atrás',
        headerStyle: { 
          backgroundColor: '#D49624' 
        },
        headerTintColor: 'white' 
      }}
      initialRouteName="Home"
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{
          title: 'Detalles'
        }}
        name="Details"
        component={Details}
      />
      <Stack.Screen name="Cam" component={Cam} />
    </Stack.Navigator>
  );
}
