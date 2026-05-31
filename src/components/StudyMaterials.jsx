import React, { useState } from 'react';
import '../styles/components.css';

export function StudyMaterials({ materials }) {
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [filterCourse, setFilterCourse] = useState('all');

  const courses = [...new Set(materials.map(m => m.curso))];
  const filteredMaterials = filterCourse === 'all' 
    ? materials 
    : materials.filter(m => m.curso === filterCourse);

  const getTypeIcon = (type) => {
    const icons = {
      'guía': '📖',
      'documento': '📄',
      'tutorial': '🎓',
      'video': '📹'
    };
    return icons[type] || '📚';
  };

  const getFormatIcon = (formato) => {
    const formatIcons = {
      'PDF': '📕',
      'DOCX': '📗',
      'PPTX': '📙',
      'TXT': '📄',
      'MP4': '🎬',
      'ZIP': '📦'
    };
    return formatIcons[formato] || '📎';
  };

  const getRelevanceColor = (relevance) => {
    const colors = {
      'muy alta': '#e74c3c',
      'alta': '#f39c12',
      'media': '#3498db'
    };
    return colors[relevance] || '#95a5a6';
  };

  return (
    <div className="study-materials-container">
      <div className="section-header">
        <h2>📚 Material de Estudio</h2>
        <p>{filteredMaterials.length} materiales disponibles</p>
      </div>

      <div className="materials-filter">
        <select 
          value={filterCourse} 
          onChange={(e) => setFilterCourse(e.target.value)}
          className="filter-select"
        >
          <option value="all">Todos los cursos</option>
          {courses.map((course, idx) => (
            <option key={idx} value={course}>{course}</option>
          ))}
        </select>
      </div>

      {!selectedMaterial ? (
        // Vista de lista de materiales
        <div className="materials-grid">
          {filteredMaterials.map(material => (
            <div 
              key={material.id} 
              className="material-card"
              onClick={() => setSelectedMaterial(material)}
              style={{ borderLeft: `5px solid ${getRelevanceColor(material.relevancia)}` }}
            >
              <div className="material-header">
                <span className="material-type">
                  {getTypeIcon(material.tipo)} {material.tipo.charAt(0).toUpperCase() + material.tipo.slice(1)}
                </span>
                <span className="relevance-badge" style={{ backgroundColor: getRelevanceColor(material.relevancia) }}>
                  {material.relevancia.toUpperCase()}
                </span>
              </div>

              <h3>{material.titulo}</h3>
              <p className="material-course">📚 {material.curso}</p>
              {material.formato && (
                <p className="material-format">
                  {getFormatIcon(material.formato)} Formato: {material.formato}
                </p>
              )}
              <p className="material-preview">
                {material.contenido.substring(0, 100)}...
              </p>

              <div className="material-stats">
                <span>📥 {material.descargas} descargas</span>
                <span className="material-date">{material.fecha_creacion}</span>
              </div>

              <button className="material-btn">Leer Más →</button>
            </div>
          ))}
        </div>
      ) : (
        // Vista de detalle del material
        <div className="material-detail">
          <button 
            className="back-btn"
            onClick={() => setSelectedMaterial(null)}
          >
            ← Volver a Materiales
          </button>

          <div className="material-detail-header" style={{ borderBottom: `3px solid ${getRelevanceColor(selectedMaterial.relevancia)}` }}>
            <div className="header-top">
              <span className="material-type-large">
                {getTypeIcon(selectedMaterial.tipo)} {selectedMaterial.tipo.charAt(0).toUpperCase() + selectedMaterial.tipo.slice(1)}
              </span>
              <span className="relevance-badge-large" style={{ backgroundColor: getRelevanceColor(selectedMaterial.relevancia) }}>
                {selectedMaterial.relevancia.toUpperCase()}
              </span>
            </div>
            <h2>{selectedMaterial.titulo}</h2>
            <p className="material-course">{selectedMaterial.curso}</p>
          </div>

          <div className="material-detail-content">
            <div className="detail-section">
              <h3>Contenido</h3>
              <p>{selectedMaterial.contenido}</p>
            </div>

            <div className="detail-section">
              <h3>Información del Material</h3>
              <div className="info-grid">
                <div className="info-item">
                  <label>Tipo</label>
                  <p>{selectedMaterial.tipo.charAt(0).toUpperCase() + selectedMaterial.tipo.slice(1)}</p>
                </div>
                <div className="info-item">
                  <label>Formato</label>
                  <p>{getFormatIcon(selectedMaterial.formato)} {selectedMaterial.formato}</p>
                </div>
                <div className="info-item">
                  <label>Fecha de Creación</label>
                  <p>{selectedMaterial.fecha_creacion}</p>
                </div>
                <div className="info-item">
                  <label>Descargas</label>
                  <p>📥 {selectedMaterial.descargas}</p>
                </div>
                <div className="info-item">
                  <label>Relevancia</label>
                  <p>{selectedMaterial.relevancia.toUpperCase()}</p>
                </div>
              </div>
            </div>

            <div className="detail-section">
              <button className="download-btn">📥 Descargar Material</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
