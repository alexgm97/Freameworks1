import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import { SenhasContext } from '../SenhasContext';
import styles from '../styles/SenhasStyles';
import { MaterialIcons, Feather } from '@expo/vector-icons';

export default function SenhasScreen() {
  const { senhas, removerSenha, limparSenhas } = useContext(SenhasContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalIndividualIndex, setModalIndividualIndex] = useState(null);
  const [mostrarSenhas, setMostrarSenhas] = useState(true);

  const confirmarExclusao = () => {
    if (modalIndividualIndex !== null) {
      removerSenha(modalIndividualIndex);
      setModalIndividualIndex(null);
    } else {
      limparSenhas();
    }
    setModalVisible(false);
  };

  const abrirModal = (index = null) => {
    setModalIndividualIndex(index);
    setModalVisible(true);
  };

  const cancelar = () => {
    setModalIndividualIndex(null);
    setModalVisible(false);
  };

  const alternarVisibilidade = () => {
    setMostrarSenhas(!mostrarSenhas);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Senhas Geradas</Text>

      <FlatList
        data={senhas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.itemRow}>
            <Text style={styles.item}>
              {mostrarSenhas ? item : '••••••••'}
            </Text>

            <View style={{ flexDirection: 'row', gap: 12 }}>
              <TouchableOpacity onPress={alternarVisibilidade}>
                {mostrarSenhas ? (
                  <Feather name="eye-off" size={20} color="gray" />
                ) : (
                  <Feather name="eye" size={20} color="gray" />
                )}
              </TouchableOpacity>

              <TouchableOpacity onPress={() => abrirModal(index)}>
                <MaterialIcons name="delete" size={20} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {senhas.length > 0 && (
        <TouchableOpacity style={styles.redButton} onPress={() => abrirModal()}>
          <Text style={styles.redButtonText}>Apagar todas</Text>
        </TouchableOpacity>
      )}

      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>
              Tem certeza que deseja apagar
              {modalIndividualIndex !== null ? ' esta senha?' : ' todas as senhas?'}
            </Text>

            <View style={styles.modalActions}>
              <Pressable style={[styles.modalBtn, { backgroundColor: 'red' }]} onPress={confirmarExclusao}>
                <Text style={styles.modalBtnText}>Sim</Text>
              </Pressable>
              <Pressable style={styles.modalBtn} onPress={cancelar}>
                <Text style={styles.modalBtnText}>Cancelar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
