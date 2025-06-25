import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import { SenhasContext } from '../SenhasContext';
import { MaterialIcons } from '@expo/vector-icons';

export default function SenhasScreen() {
  const { senhas, removerSenha, limparTodas } = useContext(SenhasContext);
  const [modalConfirmar, setModalConfirmar] = useState(false);
  const [modalIndex, setModalIndex] = useState(null);

  const confirmarRemover = (index) => {
    setModalIndex(index);
    setModalConfirmar(true);
  };

  const confirmarLimparTodas = () => {
    setModalIndex(null);
    setModalConfirmar(true);
  };

  const executarRemocao = () => {
    if (modalIndex === null) {
      limparTodas();
    } else {
      removerSenha(modalIndex);
    }
    setModalConfirmar(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Senhas Geradas</Text>
      <FlatList
        data={senhas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.itemRow}>
            <Text style={styles.item}>{item}</Text>
            <TouchableOpacity onPress={() => confirmarRemover(index)}>
              <MaterialIcons name="delete" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
      {senhas.length > 0 && (
        <TouchableOpacity
          style={styles.clearButton}
          onPress={confirmarLimparTodas}
        >
          <Text style={styles.clearText}>Apagar todas</Text>
        </TouchableOpacity>
      )}

      <Modal visible={modalConfirmar} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>
              Tem certeza que deseja apagar {modalIndex === null ? 'todas as senhas' : 'essa senha'}?
            </Text>
            <View style={styles.modalActions}>
              <Pressable onPress={executarRemocao} style={styles.modalBtn}>
                <Text style={styles.modalBtnText}>Sim</Text>
              </Pressable>
              <Pressable onPress={() => setModalConfirmar(false)} style={styles.modalBtn}>
                <Text style={styles.modalBtnText}>Cancelar</Text>
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
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  item: { fontSize: 16 },
  clearButton: {
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
  },
  clearText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  modalText: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
  modalActions: { flexDirection: 'row', gap: 16 },
  modalBtn: {
    backgroundColor: '#2196F3',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  modalBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
