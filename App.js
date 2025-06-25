import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import GeradorScreen from './screens/GeradorScreen';
import SenhasScreen from './screens/SenhasScreen';

import { SenhasProvider } from './SenhasContext';
import { AuthProvider } from './AuthContext'; // ⬅️ NOVO

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <SenhasProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Gerador" component={GeradorScreen} />
            <Stack.Screen name="Senhas" component={SenhasScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SenhasProvider>
    </AuthProvider>
  );
}
