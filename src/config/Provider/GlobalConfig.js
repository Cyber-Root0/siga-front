/**
 * @fileoverview Integração de um Front-End em React com a API do Siga (PHP)
 * @author Bruno Venancio Alves
 * @contact boteistem@gmail.com
 *
 * Copyright (c) 2024 Bruno Venancio Alves
 * 
 * Permission is granted to use, copy, modify, and distribute this software,
 * provided that this notice remains in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
 */
import React, { createContext, useState } from 'react';
import GlobalContainer from '../../services/DI/Container';
const Context = createContext({
  config: {
    menu: ''
  },
  setConfig: () => {}
});
const ConfigProvider = ({ children }) => {
  const [config, setConfig] = useState({});
  const defineConfig = (newconfig) => {
    const storage = GlobalContainer.resolve('Storages');
    const data = {
      ...config,
      ...newconfig
    };
    storage.set('globalconfig',data);
    setConfig((prev) => (data));
  };
  return (
    <Context.Provider value={{ config, setConfig: defineConfig }}>
      {children}
    </Context.Provider>
  );
};
export{
  ConfigProvider,
  Context
};
