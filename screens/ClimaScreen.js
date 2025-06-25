import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

const API_KEY = 'a62660dc2fe77abad31c6ca7ff4b9594';

export default function ClimaScreen() {
  const [cidade, setCidade] = useState('');
  const [clima, setClima] = useState(null);

  const buscarClima = async () => {
    if (!cidade) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&lang=pt_br&appid=${API_KEY}`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setClima(data);
      } else {
        alert('Cidade não encontrada');
      }
    } catch (error) {
      alert('Erro ao buscar clima');
      console.error(error);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Text style={styles.title}>Consultar Clima</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome da cidade"
        value={cidade}
        onChangeText={setCidade}
      />
      <TouchableOpacity style={styles.button} onPress={buscarClima}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>

      {clima && (
        <View style={styles.resultBox}>
          <Text style={styles.city}>{clima.name}</Text>
          <Text style={styles.temp}>{clima.main.temp}°C</Text>
          <Text style={styles.desc}>{clima.weather[0].description}</Text>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, borderRadius: 8, marginBottom: 10 },
  button: { backgroundColor: '#1e90ff', padding: 12, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold' },
  resultBox: { marginTop: 20, alignItems: 'center' },
  city: { fontSize: 22, fontWeight: 'bold' },
  temp: { fontSize: 28 },
  desc: { fontSize: 18, textTransform: 'capitalize' },
});
