import React, { useState } from 'react';
import '../styles/components.css';

export function Navbar({ usuario }) {
  const [notificaciones, setNotificaciones] = useState(true);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <h1 className="navbar-title">🎓 Campus Virtual</h1>
        </div>
        
        <div className="navbar-right">
          <button 
            className="notification-btn"
            title="Notificaciones"
            onClick={() => setNotificaciones(!notificaciones)}
          >
            🔔
            <span className="notification-badge">3</span>
          </button>
          
          <div className="navbar-user">
            <span className="user-avatar">{usuario.avatar}</span>
            <div className="user-info">
              <p className="user-name">{usuario.name}</p>
              <p className="user-email">{usuario.email}</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
