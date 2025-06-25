import React, { useContext } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import styles from '../styles/MenuStyles';
import { AuthContext } from '../AuthContext';

export default function MenuScreen({ navigation }) {
  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.contentBox}>
        <Text style={styles.title}>Menu</Text>

        <View style={styles.whiteBox}>
          <View style={styles.button}>
            <Button title="Gerar Senhas" onPress={() => navigation.navigate('Gerador')} />
          </View>

          <View style={styles.spacer} />

          <View style={styles.button}>
            <Button title="Ver Senhas Geradas" onPress={() => navigation.navigate('Senhas')} />
          </View>

          <View style={styles.spacer} />

          <View style={styles.button}>
            <Button title="Clima" onPress={() => navigation.navigate('Clima')} />
          </View>
        </View>

        <TouchableOpacity
            onPress={() => {
              logout();
              navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
              });
            }}
            style={styles.logoutButton}
          >
            <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
