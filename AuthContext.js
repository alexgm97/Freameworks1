import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [logado, setLogado] = useState(false);

  // Credenciais fixas
  const CREDENCIAIS = {
    username: 'alexgm_97@gmail.com',
    password: '123456',
  };

  const login = (usuario, senha) => {
    if (usuario === CREDENCIAIS.username && senha === CREDENCIAIS.password) {
      setLogado(true);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => setLogado(false);

  return (
    <AuthContext.Provider value={{ logado, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
