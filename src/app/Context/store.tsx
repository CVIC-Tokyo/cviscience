'use client'

import { createContext, useContext, Dispatch, SetStateAction, useState, ReactNode } from "react"

interface ContextProps {
  locale: string;
  setLocale: Dispatch<SetStateAction<string>>
}

const GlobalContext = createContext<ContextProps>({
  locale: '',
  setLocale: (): string => ''
});

export const GlobalContextProvider = ({ children }:{ children:ReactNode }) => {
  const [locale, setLocale] = useState('');

  return (
    <GlobalContext.Provider value={{ locale, setLocale }}>
      {children}
    </GlobalContext.Provider>
  )
};

export const useGlobalContext = () => useContext(GlobalContext);