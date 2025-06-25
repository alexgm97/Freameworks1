import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import styles from '../styles/ClimaStyles';

const API_KEY = 'a62660dc2fe77abad31c6ca7ff4b9594'; // Substitua pela sua chave OpenWeatherMap

export default function ClimaScreen() {
  const [cidade, setCidade] = useState('');
  const [clima, setClima] = useState(null);

  const buscarClima = async () => {
    if (!cidade.trim()) {
      Alert.alert('Erro', 'Digite o nome da cidade');
      return;
    }
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&lang=pt_br&appid=${API_KEY}`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setClima(data);
      } else {
        Alert.alert('Erro', 'Cidade não encontrada');
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível buscar o clima');
      console.error(error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.title}>Consultar Clima</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o nome da cidade"
        value={cidade}
        onChangeText={setCidade}
        returnKeyType="search"
        onSubmitEditing={buscarClima}
      />

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={styles.button} onPress={buscarClima}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
      </View>

      {clima && (
        <View style={styles.resultBox}>
          <Text style={styles.city}>{clima.name}</Text>
          <Text style={styles.temp}>{Math.round(clima.main.temp)}°C</Text>
          <Text style={styles.desc}>{clima.weather[0].description}</Text>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}
