'use client';
import {
  FC,
  ReactNode,
  createContext,
  //   useCallback,
  useEffect,
  useState,
} from 'react';
// import { useAxios } from '@/hooks/useAxios';
// import { Wallet } from '@/interfaces/wallet';
import blessedGhostData from '../data/blessedghost.json';

type ContextType = {
  wallet?: string[];
  isLoading: boolean;
};

const defaultValue: ContextType = {
  isLoading: true,
};

const walletContext = createContext<ContextType>(defaultValue);

export const WalletProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [wallet, setWallet] = useState<string[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // console.log('wallet:', blessedGhostData);
    setWallet(blessedGhostData);
    const timeout = setTimeout(() => {
      //   console.log('Loading completed. Wallet data:', blessedGhostData);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <walletContext.Provider value={{ wallet, isLoading }}>
      {children}
    </walletContext.Provider>
  );
};
export default walletContext;
