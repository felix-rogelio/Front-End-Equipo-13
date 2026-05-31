import React, { useState } from 'react';
import '../styles/components.css';

export function Grades({ grades }) {
  const [selectedGrade, setSelectedGrade] = useState(null);

  const promedio = (grades.reduce((acc, g) => acc + g.promedio, 0) / grades.length).toFixed(1);

  return (
    <div className="grades-container">
      <div className="section-header">
        <h2>📈 Mis Calificaciones</h2>
        <div className="overall-grade">
          <div className="grade-card-large">
            <p>Promedio General</p>
            <h1>{promedio}</h1>
          </div>
        </div>
      </div>

      {!selectedGrade ? (
        <div className="grades-grid">
          {grades.map(grade => (
            <div 
              key={grade.id} 
              className="grade-card"
              onClick={() => setSelectedGrade(grade)}
            >
              <div className="grade-course-name">{grade.curso}</div>
              <div className="grade-large">{grade.promedio}</div>
              <p className="grade-status">{grade.estado}</p>
              
              <div className="grade-distribution">
                {grade.calificaciones.map((cal, idx) => (
                  <div key={idx} className="grade-item-preview">
                    <small>{cal.nombre}</small>
                    <span className={cal.valor ? 'has-grade' : 'no-grade'}>
                      {cal.valor ? cal.valor : '-'}
                    </span>
                  </div>
                ))}
              </div>
              
              <button className="view-details-btn">Ver Detalles →</button>
            </div>
          ))}
        </div>
      ) : (
        <div className="grade-detail">
          <button 
            className="back-btn"
            onClick={() => setSelectedGrade(null)}
          >
            ← Volver a Calificaciones
          </button>

          <div className="grade-detail-header">
            <h2>{selectedGrade.curso}</h2>
            <p className="grade-status">{selectedGrade.estado}</p>
          </div>

          <div className="grade-detail-content">
            <div className="detail-section">
              <h3>Promedio del Curso: {selectedGrade.promedio}/100</h3>
              <div className="progress-bar large">
                <div className="progress" style={{ width: `${selectedGrade.promedio}%` }}></div>
              </div>
            </div>

            <div className="detail-section">
              <h3>Desglose de Calificaciones</h3>
              <div className="grades-breakdown">
                {selectedGrade.calificaciones.map((cal, idx) => (
                  <div key={idx} className="grade-breakdown-item">
                    <div className="breakdown-name">
                      <span className="component-name">{cal.nombre}</span>
                      <span className="component-weight">{cal.peso}%</span>
                    </div>
                    <div className="breakdown-value">
                      {cal.valor ? (
                        <>
                          <div className="progress-bar">
                            <div className="progress" style={{ width: `${cal.valor}%` }}></div>
                          </div>
                          <span className="grade-score">{cal.valor}/100</span>
                        </>
                      ) : (
                        <span className="no-grade-text">Sin calificar</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail-section">
              <h3>Comentarios del Profesor</h3>
              <div className="comments-box">
                <p>Excelente desempeño en el curso. Mantén el nivel de dedicación.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Grades;
