import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Gerador de Senhas</Text>
      <Button title="Fazer Login" onPress={() => navigation.navigate('Login')} />
      <View style={{ height: 20 }} />
      <Button title="Ir direto para o Gerador" onPress={() => navigation.navigate('Gerador')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});