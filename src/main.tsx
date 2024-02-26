import './index.css';

import React from 'react';

import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Landing from './components/entry/landing.tsx';
import Home from './components/home/home.tsx';
import SignUpAccount from './components/signup/account.tsx';
import SignUpConfirmation from './components/signup/confirmation.tsx';
import SignUpFailure from './components/signup/failure.tsx';
import SignUpOrganization from './components/signup/organization.tsx';
import SignUpSuccess from './components/signup/success.tsx';
import RootLayout from './layouts/root-layout.tsx';
import ProductItemDashboard
  from './services/product/item/product-item-dashboard.tsx';
import ProductItemIssues from './services/product/item/product-item-issues.tsx';
import ProductItemProfile
  from './services/product/item/product-item-profile.tsx';
import ProductItem from './services/product/item/product-item.tsx';
import ProductBrowse from './services/product/product-browse.tsx';
import ProductDashboard from './services/product/product-dashboard.tsx';
import ProductMap from './services/product/product-map.tsx';
import ProductNew from './services/product/product-profile.tsx';
import Product from './services/product/product.tsx';

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
      { path: '/home', element: <Home /> },
      {
        path: '/product',
        element: <Product />,
        children: [
          { path: '/product', element: <ProductDashboard /> },
          { path: '/product/browse', element: <ProductBrowse /> },
          {
            path: '/product/:fid',
            element: <ProductItem />,
            children: [
              { path: '/product/:fid', element: <ProductItemDashboard /> },
              { path: '/product/:fid/profile', element: <ProductItemProfile /> },
              { path: '/product/:fid/issues', element: <ProductItemIssues /> },
            ],
          },
          { path: '/product/new', element: <ProductNew /> },
          { path: '/product/map', element: <ProductMap /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
