import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, TrendingUp, Briefcase, CreditCard, UserCheck, BarChart3, Bell, Settings, Menu, X, } from 'lucide-react';
export const Sidebar = ({ isOpen, onClose }) => {
    const location = useLocation();
    const navItems = [
        { path: '/', label: 'Dashboard', icon: LayoutDashboard },
        { path: '/users', label: 'Users', icon: Users },
        { path: '/investments', label: 'Investments', icon: TrendingUp },
        { path: '/portfolios', label: 'Portfolios', icon: Briefcase },
        { path: '/transactions', label: 'Transactions', icon: CreditCard },
        { path: '/advisors', label: 'Advisors', icon: UserCheck },
        { path: '/reports', label: 'Reports', icon: BarChart3 },
        { path: '/notifications', label: 'Notifications', icon: Bell },
        { path: '/settings', label: 'Settings', icon: Settings },
    ];
    const isActive = (path) => location.pathname === path;
    return (_jsxs(_Fragment, { children: [isOpen && (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden", onClick: onClose })), _jsxs("aside", { className: `fixed left-0 top-0 h-screen w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto lg:relative lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`, children: [_jsx("div", { className: "p-6 border-b border-gray-800", children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-10 h-10 rounded-lg bg-primary-600 flex items-center justify-center font-bold text-lg", children: "SW" }), _jsxs("div", { children: [_jsx("h1", { className: "text-lg font-bold", children: "Savi Wealth" }), _jsx("p", { className: "text-xs text-gray-400", children: "Admin Panel" })] })] }) }), _jsx("nav", { className: "p-4", children: navItems.map((item) => {
                            const Icon = item.icon;
                            const active = isActive(item.path);
                            return (_jsxs(Link, { to: item.path, onClick: onClose, className: `flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all ${active
                                    ? 'bg-primary-600 text-white'
                                    : 'text-gray-300 hover:bg-gray-800'}`, children: [_jsx(Icon, { size: 20 }), _jsx("span", { className: "font-medium", children: item.label })] }, item.path));
                        }) }), _jsx("button", { onClick: onClose, className: "absolute top-4 right-4 lg:hidden text-gray-400 hover:text-white", children: _jsx(X, { size: 24 }) })] })] }));
};
export const TopNav = ({ onMenuToggle }) => {
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [notificationCount] = useState(2);
    return (_jsx("nav", { className: "sticky top-0 bg-white border-b border-gray-200 z-40", children: _jsxs("div", { className: "px-4 py-3 lg:px-6 flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("button", { onClick: onMenuToggle, className: "lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors", children: _jsx(Menu, { size: 24 }) }), _jsx("input", { type: "text", placeholder: "Search users, transactions...", className: "hidden lg:block px-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 w-80" })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsxs("button", { className: "relative p-2 hover:bg-gray-100 rounded-lg transition-colors", children: [_jsx(Bell, { size: 20, className: "text-gray-600" }), notificationCount > 0 && (_jsx("span", { className: "absolute top-1 right-1 w-5 h-5 bg-danger-600 text-white text-xs rounded-full flex items-center justify-center", children: notificationCount }))] }), _jsxs("div", { className: "relative", children: [_jsxs("button", { onClick: () => setShowUserMenu(!showUserMenu), className: "flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors", children: [_jsx("div", { className: "w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-semibold text-sm", children: "AJ" }), _jsx("span", { className: "hidden sm:block text-sm font-medium text-gray-700", children: "Admin" })] }), showUserMenu && (_jsxs("div", { className: "absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50", children: [_jsxs("div", { className: "px-4 py-2 border-b border-gray-200", children: [_jsx("p", { className: "text-sm font-semibold text-gray-900", children: "Admin User" }), _jsx("p", { className: "text-xs text-gray-600", children: "admin@saviwealth.com" })] }), _jsx("button", { className: "w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors", children: "Profile Settings" }), _jsx("button", { className: "w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors", children: "Change Password" }), _jsx("button", { className: "w-full text-left px-4 py-2 text-sm text-danger-600 hover:bg-danger-50 transition-colors border-t border-gray-200 mt-2", children: "Logout" })] }))] })] })] }) }));
};
