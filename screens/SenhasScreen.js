import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable
} from 'react-native';
import { SenhasContext } from '../SenhasContext';
import { Ionicons } from '@expo/vector-icons';

export default function SenhasScreen() {
  const { senhas, limparSenhas, removerSenha } = useContext(SenhasContext);

  const [modalVisivel, setModalVisivel] = useState(false);
  const [modalIndex, setModalIndex] = useState(null);
  const [modalTipo, setModalTipo] = useState(''); // 'remover' ou 'limpar'

  const abrirModalRemover = (index) => {
    setModalTipo('remover');
    setModalIndex(index);
    setModalVisivel(true);
  };

  const abrirModalLimparTudo = () => {
    setModalTipo('limpar');
    setModalVisivel(true);
  };

  const confirmarAcao = () => {
    if (modalTipo === 'remover' && modalIndex !== null) {
      removerSenha(modalIndex);
    } else if (modalTipo === 'limpar') {
      limparSenhas();
    }
    setModalVisivel(false);
    setModalIndex(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Senhas Geradas</Text>

      {senhas.length > 0 && (
        <TouchableOpacity onPress={abrirModalLimparTudo} style={styles.clearButton}>
          <Text style={styles.clearText}>Limpar todas as senhas</Text>
        </TouchableOpacity>
      )}

      <FlatList
        data={senhas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.itemRow}>
            <Text style={styles.itemText}>{item}</Text>
            <TouchableOpacity onPress={() => abrirModalRemover(index)}>
              <Ionicons name="trash" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>Nenhuma senha gerada ainda.</Text>}
      />

      {/* Modal de confirmação */}
      <Modal
        transparent
        animationType="fade"
        visible={modalVisivel}
        onRequestClose={() => setModalVisivel(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {modalTipo === 'remover'
                ? 'Deseja remover esta senha?'
                : 'Deseja apagar todas as senhas?'}
            </Text>

            <View style={styles.modalButtons}>
              <Pressable
                style={[styles.modalButton, { backgroundColor: '#ccc' }]}
                onPress={() => setModalVisivel(false)}
              >
                <Text>Cancelar</Text>
              </Pressable>
              <Pressable
                style={[styles.modalButton, { backgroundColor: 'red' }]}
                onPress={confirmarAcao}
              >
                <Text style={{ color: '#fff' }}>Confirmar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  itemText: { fontSize: 16 },
  clearButton: {
    marginBottom: 10,
    alignSelf: 'center',
  },
  clearText: {
    color: 'red',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    gap: 16,
  },
  modalTitle: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
});
