import React, { useState } from 'react';
import '../styles/components.css';

export function Courses({ courses }) {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="courses-container">
      <div className="section-header">
        <h2>📚 Mis Cursos</h2>
        <p>{courses.length} cursos activos</p>
      </div>

      {!selectedCourse ? (
        // Vista de grid de cursos
        <div className="courses-grid">
          {courses.map(curso => (
            <div 
              key={curso.id} 
              className="course-card"
              style={{ borderTop: `5px solid ${curso.color}` }}
              onClick={() => setSelectedCourse(curso)}
            >
              <div className="course-card-header">
                <h3>{curso.nombre}</h3>
                <span className="course-code">{curso.codigo}</span>
              </div>

              <div className="course-info">
                <p>👨‍🏫 <strong>{curso.profesor}</strong></p>
                <p>📍 {curso.aula}</p>
                <p>🕐 {curso.horario}</p>
                <p>👥 {curso.estudiantes} estudiantes</p>
              </div>

              <div className="course-progress">
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${curso.progreso}%` }}></div>
                </div>
                <small>{curso.progreso}% completado</small>
              </div>

              <button className="view-details-btn">Ver Detalles →</button>
            </div>
          ))}
        </div>
      ) : (
        // Vista de detalle del curso
        <div className="course-detail">
          <button 
            className="back-btn"
            onClick={() => setSelectedCourse(null)}
          >
            ← Volver a Cursos
          </button>

          <div className="course-detail-header" style={{ borderBottom: `3px solid ${selectedCourse.color}` }}>
            <h2>{selectedCourse.nombre}</h2>
            <p className="course-code">{selectedCourse.codigo}</p>
          </div>

          <div className="course-detail-content">
            <div className="detail-section">
              <h3>Información del Curso</h3>
              <div className="info-grid">
                <div className="info-item">
                  <label>Profesor</label>
                  <p>👨‍🏫 {selectedCourse.profesor}</p>
                </div>
                <div className="info-item">
                  <label>Semestre</label>
                  <p>{selectedCourse.semestre}°</p>
                </div>
                <div className="info-item">
                  <label>Aula</label>
                  <p>📍 {selectedCourse.aula}</p>
                </div>
                <div className="info-item">
                  <label>Horario</label>
                  <p>🕐 {selectedCourse.horario}</p>
                </div>
                <div className="info-item">
                  <label>Estudiantes</label>
                  <p>👥 {selectedCourse.estudiantes}</p>
                </div>
              </div>
            </div>

            <div className="detail-section">
              <h3>Descripción</h3>
              <p>{selectedCourse.descripcion}</p>
            </div>

            <div className="detail-section">
              <h3>Contenido del Curso</h3>
              <p>{selectedCourse.contenido}</p>
            </div>

            <div className="detail-section">
              <h3>Progreso del Curso</h3>
              <div className="progress-bar large">
                <div className="progress" style={{ width: `${selectedCourse.progreso}%` }}></div>
              </div>
              <p><strong>{selectedCourse.progreso}%</strong> completado</p>
            </div>

            <div className="detail-section">
              <h3>Recursos Disponibles</h3>
              <div className="resources-list">
                <div className="resource-item">
                  <span>📄 Syllabus del Curso</span>
                  <button>Descargar</button>
                </div>
                <div className="resource-item">
                  <span>📹 Videos de Clase</span>
                  <button>Ver</button>
                </div>
                <div className="resource-item">
                  <span>📚 Materiales de Estudio</span>
                  <button>Acceder</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Courses;
