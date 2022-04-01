import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import Questions from '../screens/Questions';
import Results from '../screens/Results';




const Stack = createNativeStackNavigator();

const Navigation = () => {

   
  return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={Welcome} options={{title: "Bienvenido"}} />
                <Stack.Screen name="Questions" component={Questions} options={{title: "Preguntas"}} />
                <Stack.Screen name="Results" component={Results} options={{title: "Resultados"}} />
            </Stack.Navigator>
        </NavigationContainer>
  )
}

export default Navigation;
