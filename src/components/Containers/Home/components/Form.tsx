import { useWallet } from '@/hooks/useWallet';
import { FC, useState } from 'react';

type FormType = {
  handleSubmit?: (code: string) => void;
};

const Form: FC<FormType> = ({ handleSubmit }) => {
  const [inputCode, setInputCode] = useState<string>('');
  const { wallet } = useWallet();
  const [result, setResult] = useState<string | null>(null);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // console.log('Input Code:', inputCode);
    // console.log('Wallet Data:', wallet);

    if (!inputCode) {
      setResult('Please Submit Your Wallet.');
      return;
    }

    // const isCodeValid = wallet?.includes(inputCode);

    if (wallet && wallet.includes(inputCode)) {
      setResult('Congrats Wallet Whitelisted');
    } else {
      setResult('Wallet Not Whitelisted');
    }

    if (handleSubmit) {
      handleSubmit(inputCode);
    }
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col items-center justify-center gap-5"
    >
      <h1 className="text-white text-4xl font-bold">CHECK YOUR WALLET STATUS</h1>
      <input
        type="text"
        value={inputCode}
        onChange={(e) => setInputCode(e.target.value)}
        className="lg:w-1/3 py-3 text-2xl px-5 rounded-lg"
      />
      <button
        type="submit"
        className="bg-pink-600 text-white text-3xl px-10 py-2 rounded-lg w-1/3"
      >
        Submit
      </button>
      {result && (
        <p
          className={
            result.includes('Congrats') ? 'text-green-500' : 'text-red-500'
          }
        >
          {result}
        </p>
      )}
    </form>
  );
};

export default Form;
