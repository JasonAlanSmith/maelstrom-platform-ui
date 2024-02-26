import {
  ReactElement,
  ReactNode,
} from 'react';

interface IProps {
  children: ReactNode;
  title: string;
}

export default function DashboardGraph({ children, title }: IProps): ReactElement {
  return (
    <div className="e-card m-2">
      <div className="e-card-header">
        <div className="e-card-header-caption">
          <div className="e-card-title">{title}</div>
        </div>
      </div>
      <div className="e-card-content">{children}</div>
    </div>
  );
}
