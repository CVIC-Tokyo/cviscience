"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from "react";

interface ContextProps {
  locale: string;
  setLocale: Dispatch<SetStateAction<string>>;
}

export const useSmallScreen = () => {
  if (typeof window !== undefined) {
    return window.innerWidth <= 740;
  } else return
}

const GlobalContext = createContext<ContextProps>({
  locale: "",
  setLocale: (): string => "",
});

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [locale, setLocale] = useState("en");

  return (
    <GlobalContext.Provider value={{ locale, setLocale }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
