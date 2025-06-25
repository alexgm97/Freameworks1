import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Modal,
  Pressable,
} from 'react-native';
import { AuthContext } from '../AuthContext';

export default function HomeScreen({ navigation }) {
  const { logado } = useContext(AuthContext);
  const [modalVisivel, setModalVisivel] = useState(false);

  const irParaGerador = () => {
    if (logado) {
      navigation.navigate('Gerador');
    } else {
      setModalVisivel(true); // mostra o modal de aviso
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Gerador de Senhas</Text>
      <Button title="Fazer Login" onPress={() => navigation.navigate('Login')} />
      <View style={{ height: 20 }} />
      <Button title="Ir direto para o Gerador" onPress={irParaGerador} />

      {/* Modal de acesso negado */}
      <Modal
        transparent
        visible={modalVisivel}
        animationType="fade"
        onRequestClose={() => setModalVisivel(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Acesso negado</Text>
            <Text style={styles.modalMessage}>
              Você precisa estar logado para acessar o gerador de senhas.
            </Text>
            <Pressable
              onPress={() => setModalVisivel(false)}
              style={styles.modalButton}
            >
              <Text style={styles.modalButtonText}>Entendi</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  title: {
    fontSize: 22,
    marginBottom: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 10,
    alignItems: 'center',
    gap: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalMessage: {
    fontSize: 16,
    textAlign: 'center',
  },
  modalButton: {
    marginTop: 12,
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
