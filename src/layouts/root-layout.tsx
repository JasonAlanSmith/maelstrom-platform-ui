import '../App.css';

import { Outlet } from 'react-router-dom';

import ApplicationFooter
  from '../components/application/application-footer.tsx';
import ApplicationHeader
  from '../components/application/application-header.tsx';
import ApplicationMenu from '../components/application/application-menu.tsx';
import choices from '../utils/application-menu-choices.ts';
import { NewAccountContextProvider } from '../utils/new_account_context.tsx';
import {
  NewOrganizationContextProvider,
} from '../utils/new_organization_context.tsx';

function RootLayout() {
  return (
    <NewAccountContextProvider>
      <NewOrganizationContextProvider>
        <div className="container-fluid">
          <header><ApplicationHeader /></header>
          <main><Outlet /></main>
          <ApplicationMenu choices={choices} />
          <footer><ApplicationFooter /></footer>
        </div>
      </NewOrganizationContextProvider>
    </NewAccountContextProvider>
  );
}

export default RootLayout;
