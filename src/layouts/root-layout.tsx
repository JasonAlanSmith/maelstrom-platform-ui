import '../App.css';

import { Outlet } from 'react-router-dom';

import { NewAccountContextProvider } from '../utils/new_account_context.tsx';
import {
  NewOrganizationContextProvider,
} from '../utils/new_organization_context.tsx';

function RootLayout() {
  return (
    <NewAccountContextProvider>
      <NewOrganizationContextProvider>
        <header />
        <main><Outlet /></main>
        <footer />
      </NewOrganizationContextProvider>
    </NewAccountContextProvider>
  );
}

export default RootLayout;
