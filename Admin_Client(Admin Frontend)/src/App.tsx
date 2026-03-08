import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Dashboard } from './pages/Dashboard';
import { Users } from './pages/Users';
import { Investments } from './pages/Investments';
import { Portfolios } from './pages/Portfolios';
import { Transactions } from './pages/Transactions';
import { Advisors } from './pages/Advisors';
import { Reports } from './pages/Reports';
import { Notifications } from './pages/Notifications';
import { Settings } from './pages/Settings';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/portfolios" element={<Portfolios />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/advisors" element={<Advisors />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
