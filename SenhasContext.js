import React, { createContext, useState } from 'react';

export const SenhasContext = createContext();

export const SenhasProvider = ({ children }) => {
  const [senhas, setSenhas] = useState([]);

  const adicionarSenha = (senha) => {
    setSenhas((prev) => [senha, ...prev]);
  };

  const removerSenha = (index) => {
    setSenhas((prev) => prev.filter((_, i) => i !== index));
  };

  const limparTodas = () => {
    setSenhas([]);
  };

  return (
    <SenhasContext.Provider value={{ senhas, adicionarSenha, removerSenha, limparTodas }}>
      {children}
    </SenhasContext.Provider>
  );
};
