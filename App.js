import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import MenuScreen from './screens/MenuScreen';
import GeradorScreen from './screens/GeradorScreen';
import SenhasScreen from './screens/SenhasScreen';

import { SenhasProvider } from './SenhasContext';
import { AuthProvider } from './AuthContext';
import ClimaScreen from './screens/ClimaScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <SenhasProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            {}
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}  
            />
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="Gerador" component={GeradorScreen} />
            <Stack.Screen name="Senhas" component={SenhasScreen} />
            <Stack.Screen name="Clima" component={ClimaScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SenhasProvider>
    </AuthProvider>
  );
}
