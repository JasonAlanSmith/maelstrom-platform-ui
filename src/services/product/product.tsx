import ServiceMenu from '../../components/shell/service-menu.tsx';
import ServiceShell from '../../layouts/service-layout.tsx';

export default function ProductRoute() {
  const choices = [
    {
      caption: 'Dashboard',
      route: '/product',
    },
    {
      caption: 'Browse',
      route: '/product/browse',
    },
    {
      caption: 'New',
      route: '/product/new',
    },
    {
      caption: 'Map',
      route: '/product/map',
    },
  ];

  return (
    <ServiceShell serviceMenu={<ServiceMenu choices={choices} />} />
  );
}
