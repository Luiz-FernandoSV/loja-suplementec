import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Produto from './screens/Produto';
import Header from './componentes/navbar';

export default function App() {

  const stack = createStackNavigator();

  return (
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen
           name ='Home' 
           component = {Home} 
           options={{ headerShown: false }}/>
          <stack.Screen
           name ='Produto' 
           component = {Produto} 
           options={{ header: () => <Header/> }}/>
        </stack.Navigator>
      </NavigationContainer>
  );
}