import { useContext } from 'react';
import WalletContext from '@/context/WalletContext';

export const useWallet = () => {
  const walletContext = useContext(WalletContext);

  return walletContext;
};
