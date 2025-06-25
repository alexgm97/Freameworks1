import React, { useState, useContext } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import styles from '../styles/LoginStyles';  
import { SenhasContext } from '../SenhasContext';

export default function GeradorScreen({ navigation }) {
  const [length, setLength] = useState(8);
  const { adicionarSenha } = useContext(SenhasContext);

  const gerarSenha = () => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&';
    let novaSenha = '';
    for (let i = 0; i < length; i++) {
      const randIndex = Math.floor(Math.random() * caracteres.length);
      novaSenha += caracteres[randIndex];
    }

    adicionarSenha(novaSenha);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formBox}>
        <Text style={styles.title}>Gerador de Senhas</Text>

        <Text style={styles.label}>Comprimento da senha: {length} caracteres</Text>

        <Slider
          style={{ width: '100%', height: 40, marginBottom: 20 }}
          minimumValue={4}
          maximumValue={20}
          step={1}
          value={length}
          onValueChange={setLength}
          minimumTrackTintColor="#1fb28a"
          maximumTrackTintColor="#ccc"
          thumbTintColor="#1fb28a"
        />

        <View style={styles.button}>
          <Button title="Gerar" onPress={gerarSenha} />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Senhas')}
          style={{ marginTop: 20, alignItems: 'center' }}
        >
          <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
            Ver senhas geradas
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
