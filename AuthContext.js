import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [logado, setLogado] = useState(false);

  const CREDENCIAIS = {
    username: 'admin',
    password: '1234',
  };

  const login = (usuario, senha) => {
    if (usuario === CREDENCIAIS.username && senha === CREDENCIAIS.password) {
      setLogado(true);
      return true;
    }
    return false;
  };

  const logout = () => setLogado(false);

  return (
    <AuthContext.Provider value={{ logado, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
