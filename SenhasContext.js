import React, { createContext, useState } from 'react';

// Criação do contexto
export const SenhasContext = createContext();

// Provider que será usado no App.js
export const SenhasProvider = ({ children }) => {
  const [senhas, setSenhas] = useState([]);

  // Adiciona nova senha ao array
  const adicionarSenha = (novaSenha) => {
    setSenhas((prev) => [...prev, novaSenha]);
  };

  // Remove senha por índice
  const removerSenha = (index) => {
    setSenhas((prev) => prev.filter((_, i) => i !== index));
  };

  // Limpa todas as senhas
  const limparSenhas = () => {
    setSenhas([]);
  };

  return (
    <SenhasContext.Provider
      value={{ senhas, adicionarSenha, removerSenha, limparSenhas }}
    >
      {children}
    </SenhasContext.Provider>
  );
};
