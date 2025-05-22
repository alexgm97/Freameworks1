import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function GeradorScreen({ navigation }) {
  const [length, setLength] = useState('8');
  const [senhas, setSenhas] = useState([]);

  const gerarSenha = () => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&';
    let novaSenha = '';
    for (let i = 0; i < parseInt(length); i++) {
      const randIndex = Math.floor(Math.random() * caracteres.length);
      novaSenha += caracteres[randIndex];
    }

    setSenhas([...senhas, novaSenha]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerador de Senhas</Text>
      <TextInput
        placeholder="Quantidade de caracteres"
        value={length}
        onChangeText={setLength}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Gerar" onPress={gerarSenha} />
      <TouchableOpacity
        onPress={() => navigation.navigate('Senhas', { senhas })}
        style={styles.link}
      >
        <Text style={styles.linkText}>Ver senhas geradas</Text>
      </TouchableOpacity>
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
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
  link: {
    marginTop: 20,
    alignItems: 'center',
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});