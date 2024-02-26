import ServiceItemMenu from '../../../components/shell/service-item-menu.tsx';
import ServiceItemShell from '../../../layouts/service-item-layout.tsx';

export default function ProductItem() {
  const choices = [
    {
      caption: 'Dashboard',
      route: '/product/1',
    },
    {
      caption: 'Profile',
      route: '/product/1/profile',
    },
    {
      caption: 'Issues',
      route: '/product/1/issues',
    },
  ];

  return (
    <div>
      <ServiceItemShell serviceItemMenu={<ServiceItemMenu choices={choices} />} />
    </div>
  );
}
