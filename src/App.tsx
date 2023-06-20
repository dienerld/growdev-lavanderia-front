import { Route, Routes } from 'react-router-dom';
import { Register } from '@pages/Register';
import { Home } from '@pages/Home';
import { Login } from '@pages/Login';
import { NotFound } from '@pages/NotFound';
import { PrivateLayout } from '@layouts/Private';
import { NewBooking } from '@pages/newBooking';

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route
        path="/*"
        element={<PrivateLayout />}
      >
        <Route path="home" element={<Home />} />
        <Route path="new-booking" element={<NewBooking />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
