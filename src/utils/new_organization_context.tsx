import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useMemo,
  useState,
} from 'react';

interface INewOrganizationInfo {
  name: string;
}

const defaultNewOrganization: INewOrganizationInfo = {
  name: '',
};

interface INewOrganizationContext {
  newOrganization: INewOrganizationInfo;
  setNewOrganization: Dispatch<SetStateAction<INewOrganizationContext['newOrganization']>>;
}

export const NewOrganizationContext = createContext<INewOrganizationContext | null>(null);

export function NewOrganizationContextProvider({ children }: PropsWithChildren<object>) {
  const [newOrganization, setNewOrganization] = useState<INewOrganizationContext['newOrganization']>(defaultNewOrganization);
  const value = useMemo(() => ({ newOrganization, setNewOrganization }), [newOrganization]);

  return (
    <NewOrganizationContext.Provider value={value}>{children}</NewOrganizationContext.Provider>
  );
}
