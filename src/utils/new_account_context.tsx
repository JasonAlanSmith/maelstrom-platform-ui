import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useMemo,
  useState,
} from 'react';

interface INewAccountInfo {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
}

const defaultNewAccount: INewAccountInfo = {
  firstName: '',
  lastName: '',
  userName: '',
  password: '',
};

interface INewAccountContext {
  newAccount: INewAccountInfo;
  setNewAccount: Dispatch<SetStateAction<INewAccountContext['newAccount']>>;
}

export const NewAccountContext = createContext<INewAccountContext | null>(null);

export function NewAccountContextProvider({ children }: PropsWithChildren<object>) {
  const [newAccount, setNewAccount] = useState<INewAccountContext['newAccount']>(defaultNewAccount);
  const value = useMemo(() => ({ newAccount, setNewAccount }), [newAccount]);
  return (
    <NewAccountContext.Provider value={value}>{children}</NewAccountContext.Provider>
  );
}
