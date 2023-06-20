import { Navbar } from '@components/Navbar';
import { Outlet } from 'react-router-dom';

export function PrivateLayout() {
  return (
    <div className="h-full flex flex-col">
      <Navbar />
      <Outlet />
    </div>
  );
}
