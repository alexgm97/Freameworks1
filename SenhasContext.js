import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SenhasContext = createContext();

export const SenhasProvider = ({ children }) => {
  const [senhas, setSenhas] = useState([]);

  // Carregar senhas do armazenamento ao iniciar o app
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

  // Salvar senhas no AsyncStorage sempre que a lista mudar
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

  return (
    <SenhasContext.Provider value={{ senhas, adicionarSenha }}>
      {children}
    </SenhasContext.Provider>
  );
};
