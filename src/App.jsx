import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { AdminPage } from './pages/AdminPage/AdminPage';
import { HomePage } from './pages/HomePage/HomePage';
import Inventory from './pages/Inventory/Inventory';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/admin_panel" element={<AdminPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
