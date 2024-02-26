import { ReactElement } from 'react';

interface IProps {
  value: string;
  caption: string;
}

export default function DashboardDatum({ value, caption }: IProps): ReactElement {
  return (
    <div className="e-card m-2">
      <div className="e-card-header">
        <div className="e-card-header-caption">
          <div className="e-card-title">{caption}</div>
        </div>
      </div>
      <div className="e-card-content">{value}</div>
    </div>
  );
}
