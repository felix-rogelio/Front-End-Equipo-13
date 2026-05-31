import React from 'react';
import '../styles/components.css';

export function Profile({ usuario }) {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar-large">{usuario.avatar}</div>
        <h2>{usuario.name}</h2>
        <p className="profile-email">{usuario.email}</p>
      </div>

      <div className="profile-content">
        <div className="profile-section">
          <h3>📋 Información Personal</h3>
          <div className="profile-info-grid">
            <div className="profile-info-item">
              <label>Nombre Completo</label>
              <p>{usuario.name}</p>
            </div>
            <div className="profile-info-item">
              <label>Correo Electrónico</label>
              <p>{usuario.email}</p>
            </div>
            <div className="profile-info-item">
              <label>Matrícula</label>
              <p>{usuario.matricula}</p>
            </div>
            <div className="profile-info-item">
              <label>Carrera</label>
              <p>{usuario.carrera}</p>
            </div>
            <div className="profile-info-item">
              <label>Semestre Actual</label>
              <p>{usuario.semestre}°</p>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h3>🔐 Seguridad</h3>
          <div className="security-options">
            <button className="profile-btn">
              🔑 Cambiar Contraseña
            </button>
            <button className="profile-btn">
              🔐 Autenticación de Dos Factores
            </button>
            <button className="profile-btn">
              📱 Dispositivos Conectados
            </button>
          </div>
        </div>

        <div className="profile-section">
          <h3>⚙️ Preferencias</h3>
          <div className="preferences-list">
            <div className="preference-item">
              <label>Notificaciones por Email</label>
              <input type="checkbox" defaultChecked />
            </div>
            <div className="preference-item">
              <label>Notificaciones del Sistema</label>
              <input type="checkbox" defaultChecked />
            </div>
            <div className="preference-item">
              <label>Modo Oscuro</label>
              <input type="checkbox" />
            </div>
            <div className="preference-item">
              <label>Recordatorios de Tareas</label>
              <input type="checkbox" defaultChecked />
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h3>📚 Mi Actividad</h3>
          <div className="activity-stats">
            <div className="activity-stat">
              <span>Cursos Completados</span>
              <strong>12</strong>
            </div>
            <div className="activity-stat">
              <span>Puntos Acumulados</span>
              <strong>2,450</strong>
            </div>
            <div className="activity-stat">
              <span>Logros Obtenidos</span>
              <strong>8</strong>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h3>⚡ Acciones</h3>
          <div className="action-buttons">
            <button className="btn-secondary">📥 Descargar Datos</button>
            <button className="btn-danger">🚪 Cerrar Sesión</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
