import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SenhasContext = createContext();

export const SenhasProvider = ({ children }) => {
  const [senhas, setSenhas] = useState([]);

  useEffect(() => {
    const carregarSenhas = async () => {
      try {
        const senhasSalvas = await AsyncStorage.getItem('senhas');
        if (senhasSalvas) {
          setSenhas(JSON.parse(senhasSalvas));
        }
      } catch (error) {
        console.error('Erro ao carregar senhas:', error);
      }
    };

    carregarSenhas();
  }, []);

  useEffect(() => {
    const salvarSenhas = async () => {
      try {
        await AsyncStorage.setItem('senhas', JSON.stringify(senhas));
      } catch (error) {
        console.error('Erro ao salvar senhas:', error);
      }
    };

    salvarSenhas();
  }, [senhas]);

  const adicionarSenha = (novaSenha) => {
    setSenhas((prevSenhas) => [novaSenha, ...prevSenhas]);
  };

  const limparSenhas = async () => {
    try {
      await AsyncStorage.removeItem('senhas');
      setSenhas([]);
    } catch (error) {
      console.error('Erro ao limpar senhas:', error);
    }
  };

  const removerSenha = async (index) => {
    try {
      const novasSenhas = [...senhas];
      novasSenhas.splice(index, 1);
      setSenhas(novasSenhas);
    } catch (error) {
      console.error('Erro ao remover senha:', error);
    }
  };

  return (
    <SenhasContext.Provider value={{ senhas, adicionarSenha, limparSenhas, removerSenha }}>
      {children}
    </SenhasContext.Provider>
  );
};
