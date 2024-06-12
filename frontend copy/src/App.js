import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage/>} />
        <Route path="/" element={<LoginPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
