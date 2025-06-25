import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext } from '../AuthContext';

export default function MenuScreen({ navigation }) {
  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <Button title="Gerar Senhas" onPress={() => navigation.navigate('Gerador')} />
      <View style={{ height: 20 }} />
      <Button title="Ver Senhas Geradas" onPress={() => navigation.navigate('Senhas')} />
      <TouchableOpacity
        onPress={() => {
          logout();
          navigation.navigate('Home');
        }}
        style={styles.logoutButton}
      >
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 30, fontWeight: 'bold', textAlign: 'center' },
  logoutButton: {
    marginTop: 40,
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
