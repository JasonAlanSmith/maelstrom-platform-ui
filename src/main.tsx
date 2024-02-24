import './index.css';

import React from 'react';

import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Landing from './components/entry/landing.tsx';
import SignUpAccount from './components/signup/account.tsx';
import SignUpConfirmation from './components/signup/confirmation.tsx';
import SignUpFailure from './components/signup/failure.tsx';
import SignUpOrganization from './components/signup/organization.tsx';
import SignUpSuccess from './components/signup/success.tsx';
import RootLayout from './layouts/root-layout.tsx';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <Landing /> },
      { path: '/signup/account', element: <SignUpAccount /> },
      { path: '/signup/organization', element: <SignUpOrganization /> },
      { path: '/signup/confirmation', element: <SignUpConfirmation /> },
      { path: '/signup/success', element: <SignUpSuccess /> },
      { path: '/signup/failure', element: <SignUpFailure /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
