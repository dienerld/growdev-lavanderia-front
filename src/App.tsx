import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Form } from './components/Form';
import { FormSignup } from './components/FormSignup';

function App() {
  return (
    <Routes>
      <Route index element={<Form />} />
      <Route path="/signup" element={<FormSignup />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
