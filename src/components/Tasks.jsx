import React, { useState } from 'react';
import '../styles/components.css';

export function Tasks({ tasks }) {
  const [filter, setFilter] = useState('todas');
  const [selectedTask, setSelectedTask] = useState(null);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'todas') return true;
    return task.estado === filter;
  });

  const getStatusColor = (estado) => {
    return estado === 'entregado' ? '#27ae60' : '#e74c3c';
  };

  return (
    <div className="tasks-container">
      <div className="section-header">
        <h2>✓ Tareas y Asignaciones</h2>
        <div className="filter-tabs">
          <button 
            className={`filter-btn ${filter === 'todas' ? 'active' : ''}`}
            onClick={() => setFilter('todas')}
          >
            Todas ({tasks.length})
          </button>
          <button 
            className={`filter-btn ${filter === 'pendiente' ? 'active' : ''}`}
            onClick={() => setFilter('pendiente')}
          >
            Pendientes ({tasks.filter(t => t.estado === 'pendiente').length})
          </button>
          <button 
            className={`filter-btn ${filter === 'entregado' ? 'active' : ''}`}
            onClick={() => setFilter('entregado')}
          >
            Entregadas ({tasks.filter(t => t.estado === 'entregado').length})
          </button>
        </div>
      </div>

      {!selectedTask ? (
        <div className="tasks-list">
          {filteredTasks.length > 0 ? (
            filteredTasks.map(task => (
              <div 
                key={task.id} 
                className="task-item"
                onClick={() => setSelectedTask(task)}
              >
                <div className="task-left">
                  <div className="task-checkbox">
                    {task.estado === 'entregado' && '✓'}
                  </div>
                  <div className="task-info">
                    <h4>{task.titulo}</h4>
                    <p className="task-course-name">{task.curso}</p>
                    <p className="task-description">{task.descripcion}</p>
                  </div>
                </div>

                <div className="task-right">
                  <span className={`task-status-badge ${task.estado}`}>
                    {task.estado === 'entregado' ? '✓ Entregado' : '⏳ Pendiente'}
                  </span>
                  <p className="task-date">📅 {task.fecha_entrega_display}</p>
                  {task.calificacion && (
                    <p className="task-grade">📊 {task.calificacion}/100</p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="empty-message">No hay tareas en esta categoría</p>
          )}
        </div>
      ) : (
        <div className="task-detail">
          <button 
            className="back-btn"
            onClick={() => setSelectedTask(null)}
          >
            ← Volver a Tareas
          </button>

          <div className="task-detail-header">
            <h2>{selectedTask.titulo}</h2>
            <span className={`task-status-badge ${selectedTask.estado}`}>
              {selectedTask.estado === 'entregado' ? '✓ Entregado' : '⏳ Pendiente'}
            </span>
          </div>

          <div className="task-detail-content">
            <div className="detail-row">
              <label>Curso:</label>
              <p>{selectedTask.curso}</p>
            </div>

            <div className="detail-row">
              <label>Descripción:</label>
              <p>{selectedTask.descripcion}</p>
            </div>

            <div className="detail-row">
              <label>Fecha de Entrega:</label>
              <p>📅 {selectedTask.fecha_entrega_display}</p>
            </div>

            {selectedTask.calificacion && (
              <div className="detail-row">
                <label>Calificación:</label>
                <p>📊 {selectedTask.calificacion}/100</p>
              </div>
            )}

            <div className="detail-row">
              <label>Estado de Entrega:</label>
              <p>{selectedTask.porcentaje}% completado</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${selectedTask.porcentaje}%` }}></div>
              </div>
            </div>

            {selectedTask.archivo_adjunto && (
              <div className="detail-row">
                <label>Archivo Adjunto:</label>
                <button className="download-btn">
                  📎 {selectedTask.archivo_adjunto}
                </button>
              </div>
            )}

            {selectedTask.estado === 'pendiente' && (
              <div className="task-actions">
                <button className="btn-primary">📤 Subir Trabajo</button>
                <button className="btn-secondary">👁️ Vista Previa</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Tasks;
