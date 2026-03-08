import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx(Router, { children: _jsx(Routes, { children: _jsxs(Route, { element: _jsx(MainLayout, {}), children: [_jsx(Route, { path: "/", element: _jsx(Dashboard, {}) }), _jsx(Route, { path: "/users", element: _jsx(Users, {}) }), _jsx(Route, { path: "/investments", element: _jsx(Investments, {}) }), _jsx(Route, { path: "/portfolios", element: _jsx(Portfolios, {}) }), _jsx(Route, { path: "/transactions", element: _jsx(Transactions, {}) }), _jsx(Route, { path: "/advisors", element: _jsx(Advisors, {}) }), _jsx(Route, { path: "/reports", element: _jsx(Reports, {}) }), _jsx(Route, { path: "/notifications", element: _jsx(Notifications, {}) }), _jsx(Route, { path: "/settings", element: _jsx(Settings, {}) })] }) }) }));
}
export default App;
