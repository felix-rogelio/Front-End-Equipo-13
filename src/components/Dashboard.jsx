import React from 'react';
import '../styles/components.css';

export function Dashboard({ courses, tasks, grades, announcements }) {
  const proximaTarea = tasks[0];
  const promedioCursos = (grades.reduce((acc, g) => acc + g.promedio, 0) / grades.length).toFixed(1);
  const tareasEntregadas = tasks.filter(t => t.estado === 'entregado').length;
  const tareasTotal = tasks.length;

  return (
    <div className="dashboard-container">
      <h2>Bienvenido al Campus Virtual</h2>

      {/* Tarjetas de resumen */}
      <div className="cards-grid">
        <div className="stat-card">
          <div className="stat-icon">📚</div>
          <div className="stat-content">
            <h3>Cursos Activos</h3>
            <p className="stat-number">{courses.length}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📈</div>
          <div className="stat-content">
            <h3>Promedio General</h3>
            <p className="stat-number">{promedioCursos}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">✓</div>
          <div className="stat-content">
            <h3>Tareas Completadas</h3>
            <p className="stat-number">{tareasEntregadas}/{tareasTotal}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">💬</div>
          <div className="stat-content">
            <h3>Nuevos Mensajes</h3>
            <p className="stat-number">3</p>
          </div>
        </div>
      </div>

      {/* Próxima tarea */}
      <div className="dashboard-section">
        <h3>📌 Próxima Entrega</h3>
        {proximaTarea && (
          <div className="task-preview">
            <div className="task-header">
              <h4>{proximaTarea.titulo}</h4>
              <span className={`task-status ${proximaTarea.estado}`}>{proximaTarea.estado}</span>
            </div>
            <p className="task-course">{proximaTarea.curso}</p>
            <p className="task-description">{proximaTarea.descripcion}</p>
            <p className="task-deadline">📅 Entrega: <strong>{proximaTarea.fecha_entrega_display}</strong></p>
          </div>
        )}
      </div>

      {/* Anuncios */}
      <div className="dashboard-section">
        <h3>📢 Anuncios</h3>
        <div className="announcements-list">
          {announcements.map(ann => (
            <div key={ann.id} className={`announcement-item priority-${ann.prioridad}`}>
              <span className="announcement-icon">{ann.icon}</span>
              <div className="announcement-content">
                <h4>{ann.titulo}</h4>
                <p>{ann.descripcion}</p>
                <small>{ann.fecha}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cursos activos */}
      <div className="dashboard-section">
        <h3>📚 Cursos Actuales</h3>
        <div className="courses-preview">
          {courses.map(curso => (
            <div key={curso.id} className="course-preview" style={{ borderLeft: `4px solid ${curso.color}` }}>
              <div className="course-header">
                <h4>{curso.nombre}</h4>
                <span className="course-code">{curso.codigo}</span>
              </div>
              <p className="course-professor">👨‍🏫 {curso.profesor}</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${curso.progreso}%` }}></div>
              </div>
              <small>{curso.progreso}% completado</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
