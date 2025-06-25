import React, { useState, useContext } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { SenhasContext } from '../SenhasContext';
import { AuthContext } from '../AuthContext'; // ⬅️ Importa o contexto de autenticação

export default function GeradorScreen({ navigation }) {
  const [length, setLength] = useState(8);
  const { adicionarSenha } = useContext(SenhasContext);
  const { logout } = useContext(AuthContext); // ⬅️ Usa o logout

  const gerarSenha = () => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&';
    let novaSenha = '';
    for (let i = 0; i < length; i++) {
      const randIndex = Math.floor(Math.random() * caracteres.length);
      novaSenha += caracteres[randIndex];
    }

    adicionarSenha(novaSenha);
  };

  const handleLogout = () => {
    logout(); // Desloga
    navigation.navigate('Home'); // Volta pra Home
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerador de Senhas</Text>

      <Text style={styles.label}>Comprimento da senha: {length} caracteres</Text>
      <Slider
        style={styles.slider}
        minimumValue={4}
        maximumValue={20}
        step={1}
        value={length}
        onValueChange={setLength}
        minimumTrackTintColor="#1fb28a"
        maximumTrackTintColor="#ccc"
        thumbTintColor="#1fb28a"
      />

      <Button title="Gerar" onPress={gerarSenha} />

      <TouchableOpacity
        onPress={() => navigation.navigate('Senhas')}
        style={styles.link}
      >
        <Text style={styles.linkText}>Ver senhas geradas</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  title: { fontSize: 22, marginBottom: 20, textAlign: 'center', fontWeight: 'bold' },
  label: { textAlign: 'center', marginBottom: 10, fontSize: 16 },
  slider: { width: '100%', height: 40, marginBottom: 20 },
  link: { marginTop: 20, alignItems: 'center' },
  linkText: { color: 'blue', textDecorationLine: 'underline' },
  logoutButton: {
    marginTop: 30,
    alignSelf: 'center',
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 8,
  },
  logoutText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
