import { ReactElement } from 'react';

import { Outlet } from 'react-router-dom';

interface IProps {
  serviceItemMenu: ReactElement;
}

export default function ServiceItemShell({ serviceItemMenu }: IProps) {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          {serviceItemMenu}
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
