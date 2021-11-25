import './App.css';
import Homepage from './Components/Homepage/Navbar';
import PatientSignup from './Components/Loginpage/PatientSignup';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <Homepage /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="signup" element={<PatientSignup />} />

          {/* <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} /> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
