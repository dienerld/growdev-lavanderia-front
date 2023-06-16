import { Route, Routes } from 'react-router-dom';
import { Register } from '@pages/Register';
import { Home } from '@pages/Home';
import { Login } from '@pages/Login';

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
