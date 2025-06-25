import React, { useContext, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../styles/LoginStyles'; // reaproveitando estilos do login
import { SenhasContext } from '../SenhasContext';

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
      <View style={styles.formBox}>
        <Text style={styles.title}>Senhas Geradas</Text>
        <FlatList
          data={senhas}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 8,
                borderBottomWidth: 1,
                borderColor: '#ccc',
              }}
            >
              <Text style={{ fontSize: 16 }}>{item}</Text>
              <TouchableOpacity onPress={() => confirmarRemover(index)}>
                <MaterialIcons name="delete" size={24} color="red" />
              </TouchableOpacity>
            </View>
          )}
        />

        {senhas.length > 0 && (
          <View style={styles.button}>
            <TouchableOpacity onPress={confirmarLimparTodas} style={{
              backgroundColor: '#b21f1f',
              paddingVertical: 12,
              borderRadius: 8,
              alignItems: 'center',
            }}>
              <Text style={{ color: '#fff', fontWeight: '600', fontSize: 16 }}>
                Apagar todas
              </Text>
            </TouchableOpacity>
          </View>
        )}

        <Modal visible={modalConfirmar} transparent animationType="fade">
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.5)',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 16,
            }}
          >
            <View
              style={{
                backgroundColor: '#fff',
                borderRadius: 10,
                padding: 24,
                width: '90%',
                maxWidth: 400,
                alignItems: 'center',
              }}
            >
              <Text style={{ fontSize: 18, marginBottom: 20, textAlign: 'center' }}>
                Tem certeza que deseja apagar {modalIndex === null ? 'todas as senhas' : 'essa senha'}?
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Pressable
                  onPress={executarRemocao}
                  style={{
                    backgroundColor: '#b21f1f',
                    paddingVertical: 12,
                    paddingHorizontal: 20,
                    borderRadius: 8,
                    marginHorizontal: 8,
                  }}
                >
                  <Text style={{ color: '#fff', fontWeight: '600', fontSize: 16 }}>
                    Sim
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setModalConfirmar(false)}
                  style={{
                    backgroundColor: '#ccc',
                    paddingVertical: 12,
                    paddingHorizontal: 20,
                    borderRadius: 8,
                    marginHorizontal: 8,
                  }}
                >
                  <Text style={{ color: '#333', fontWeight: '600', fontSize: 16 }}>
                    Cancelar
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
