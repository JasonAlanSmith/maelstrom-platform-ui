import { ReactElement } from 'react';

import { Outlet } from 'react-router-dom';

interface IProps {
  serviceMenu: ReactElement;
}

export default function ServiceShell({ serviceMenu }: IProps) {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <header>
            <h1>Service Header</h1>
          </header>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          {serviceMenu}
        </div>
        <div className="col-10">
          <Outlet />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <footer>Service Footer</footer>
        </div>
      </div>
    </div>
  );
}
