import React, { useState } from 'react';
import '../styles/components.css';

export function Sidebar({ activeMenu, setActiveMenu }) {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'cursos', label: 'Cursos', icon: '📚' },
    { id: 'material-estudio', label: 'Materiales', icon: '📖' },
    { id: 'tareas', label: 'Tareas', icon: '✓' },
    { id: 'calificaciones', label: 'Calificaciones', icon: '📈' },
    { id: 'mensajes', label: 'Mensajes', icon: '💬' },
    { id: 'perfil', label: 'Mi Perfil', icon: '👤' }
  ];

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <button 
        className="toggle-sidebar"
        onClick={() => setCollapsed(!collapsed)}
        title="Expandir/Contraer"
      >
        {collapsed ? '→' : '←'}
      </button>

      <div className="sidebar-menu">
        {menuItems.map(item => (
          <button
            key={item.id}
            className={`menu-item ${activeMenu === item.id ? 'active' : ''}`}
            onClick={() => setActiveMenu(item.id)}
            title={item.label}
          >
            <span className="menu-icon">{item.icon}</span>
            {!collapsed && <span className="menu-label">{item.label}</span>}
          </button>
        ))}
      </div>

      <div className="sidebar-footer">
        <button className="logout-btn" title="Cerrar sesión">
          🚪 {!collapsed && 'Salir'}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
