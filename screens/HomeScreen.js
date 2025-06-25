import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/HomeStyles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.contentBox}>
        <Text style={styles.title}>Bem-vindo ao Gerador de Senhas</Text>
        <View style={styles.button}>
          <Button title="Fazer Login" onPress={() => navigation.navigate('Login')} />
        </View>
      </View>
    </View>
  );
}