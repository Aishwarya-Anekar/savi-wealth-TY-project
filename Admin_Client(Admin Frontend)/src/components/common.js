import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Card = ({ children, className = '', hoverable = false, }) => {
    return (_jsx("div", { className: `${hoverable ? 'card-interactive' : 'card'} ${className}`, children: children }));
};
export const Button = ({ variant = 'primary', size = 'md', children, icon, className = '', ...props }) => {
    const baseClass = variant === 'primary'
        ? 'btn-primary'
        : variant === 'secondary'
            ? 'btn-secondary'
            : 'btn-danger';
    const sizeClass = size === 'sm' ? 'btn-sm' : size === 'lg' ? 'px-6 py-3 text-lg' : 'btn';
    return (_jsxs("button", { className: `${baseClass} ${sizeClass} ${className}`, ...props, children: [icon && _jsx("span", { className: "flex-shrink-0", children: icon }), children] }));
};
export const Badge = ({ variant = 'info', children, className = '', }) => {
    const baseClass = variant === 'success'
        ? 'badge-success'
        : variant === 'warning'
            ? 'badge-warning'
            : variant === 'danger'
                ? 'badge-danger'
                : 'badge-info';
    return _jsx("span", { className: `${baseClass} ${className}`, children: children });
};
export const Input = ({ label, error, className = '', ...props }) => {
    return (_jsxs("div", { className: "flex flex-col gap-2", children: [label && _jsx("label", { className: "text-sm font-medium text-gray-700", children: label }), _jsx("input", { className: `input-field ${error ? 'border-danger-500' : ''} ${className}`, ...props }), error && _jsx("span", { className: "text-xs text-danger-600", children: error })] }));
};
export const Modal = ({ isOpen, onClose, title, children, footer, size = 'md', }) => {
    if (!isOpen)
        return null;
    const widthClass = size === 'sm' ? 'max-w-sm' : size === 'lg' ? 'max-w-4xl' : 'max-w-2xl';
    return (_jsx("div", { className: "modal-overlay", onClick: onClose, children: _jsxs("div", { className: `modal-content ${widthClass}`, onClick: (e) => e.stopPropagation(), children: [_jsxs("div", { className: "flex justify-between items-center mb-4", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-900", children: title }), _jsx("button", { onClick: onClose, className: "text-gray-500 hover:text-gray-700 text-2xl leading-none", children: "\u00D7" })] }), _jsx("div", { className: "mb-6", children: children }), footer && _jsx("div", { className: "flex gap-3 justify-end", children: footer })] }) }));
};
export const Table = ({ columns, data, actions, className = '', }) => {
    return (_jsx("div", { className: `overflow-x-auto ${className}`, children: _jsxs("table", { className: "min-w-full bg-white border-collapse", children: [_jsx("thead", { children: _jsxs("tr", { className: "border-b border-gray-200 bg-gray-50", children: [columns.map((col) => (_jsx("th", { className: `table-header ${col.className || ''}`, children: col.label }, col.key))), actions && _jsx("th", { className: "table-header", children: "Actions" })] }) }), _jsx("tbody", { children: data.map((row, idx) => (_jsxs("tr", { className: "border-b border-gray-200 hover:bg-gray-50 transition-colors", children: [columns.map((col) => (_jsx("td", { className: `table-cell ${col.className || ''}`, children: row[col.key] }, col.key))), actions && _jsx("td", { className: "table-cell", children: actions(row) })] }, idx))) })] }) }));
};
export const StatCard = ({ label, value, icon, trend, color = 'blue', }) => {
    const colorMap = {
        blue: 'bg-blue-50 text-blue-600',
        green: 'bg-green-50 text-green-600',
        orange: 'bg-orange-50 text-orange-600',
        red: 'bg-red-50 text-red-600',
    };
    return (_jsx(Card, { children: _jsxs("div", { className: "flex justify-between items-start", children: [_jsxs("div", { className: "flex-1", children: [_jsx("p", { className: "text-gray-600 text-sm font-medium", children: label }), _jsx("p", { className: "text-3xl font-bold text-gray-900 mt-2", children: value }), trend && (_jsxs("p", { className: `text-sm mt-2 ${trend.direction === 'up' ? 'text-green-600' : 'text-red-600'}`, children: [trend.direction === 'up' ? '↑' : '↓', " ", trend.value, "%"] }))] }), icon && (_jsx("div", { className: `p-3 rounded-lg ${colorMap[color]}`, children: icon }))] }) }));
};
export const EmptyState = ({ title, description, icon, }) => {
    return (_jsxs("div", { className: "flex flex-col items-center justify-center py-12 text-center", children: [icon && _jsx("div", { className: "text-5xl mb-4 text-gray-400", children: icon }), _jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: title }), description && _jsx("p", { className: "text-gray-500 text-sm", children: description })] }));
};
export const Pagination = ({ currentPage, totalPages, onPageChange, }) => {
    return (_jsxs("div", { className: "flex items-center justify-center gap-2 mt-6", children: [_jsx(Button, { variant: "secondary", size: "sm", onClick: () => onPageChange(currentPage - 1), disabled: currentPage === 1, children: "Previous" }), Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (_jsx("button", { onClick: () => onPageChange(page), className: `px-3 py-2 rounded text-sm font-medium transition-colors ${page === currentPage
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'}`, children: page }, page))), _jsx(Button, { variant: "secondary", size: "sm", onClick: () => onPageChange(currentPage + 1), disabled: currentPage === totalPages, children: "Next" })] }));
};
