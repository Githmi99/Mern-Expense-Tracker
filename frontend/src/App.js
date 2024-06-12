import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import Transactions from './Components/Transactions/Transactions';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/transactions" element={<Transactions />} />
      
      </Routes>
    </Router>
  );
}

export default App;