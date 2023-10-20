import { Outlet } from 'react-router-dom';
import Navbar from '../components/layouts/Navbar';

const RootLayput = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayput;
