import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar, TopNav } from './Layout';
export const MainLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (_jsxs("div", { className: "flex h-screen bg-gray-50", children: [_jsx(Sidebar, { isOpen: sidebarOpen, onClose: () => setSidebarOpen(false) }), _jsxs("div", { className: "flex-1 flex flex-col w-full overflow-hidden", children: [_jsx(TopNav, { onMenuToggle: () => setSidebarOpen(!sidebarOpen) }), _jsx("main", { className: "flex-1 overflow-y-auto", children: _jsx("div", { className: "p-4 lg:p-8", children: _jsx(Outlet, {}) }) })] })] }));
};
