import React, { useState } from 'react';
import '../styles/components.css';

export function Messages({ messages }) {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const unreadCount = messages.filter(m => !m.leido).length;

  return (
    <div className="messages-container">
      <div className="section-header">
        <h2>💬 Mensajes</h2>
        {unreadCount > 0 && (
          <span className="unread-badge">{unreadCount} sin leer</span>
        )}
      </div>

      {!selectedMessage ? (
        <div className="messages-list">
          {messages.map(message => (
            <div 
              key={message.id} 
              className={`message-item ${!message.leido ? 'unread' : ''}`}
              onClick={() => setSelectedMessage(message)}
            >
              <div className="message-avatar">{message.avatar}</div>
              
              <div className="message-content">
                <h4 className="message-sender">{message.remitente}</h4>
                <p className="message-course">{message.curso}</p>
                <p className="message-subject">{message.asunto}</p>
                <p className="message-preview">{message.contenido.substring(0, 60)}...</p>
              </div>

              <div className="message-meta">
                <p className="message-date">{message.fecha}</p>
                {!message.leido && <div className="unread-indicator"></div>}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="message-detail">
          <button 
            className="back-btn"
            onClick={() => setSelectedMessage(null)}
          >
            ← Volver a Mensajes
          </button>

          <div className="message-detail-header">
            <div className="message-detail-sender">
              <span className="avatar-large">{selectedMessage.avatar}</span>
              <div className="sender-info">
                <h2>{selectedMessage.remitente}</h2>
                <p>{selectedMessage.curso}</p>
              </div>
            </div>
            <p className="message-detail-date">{selectedMessage.fecha}</p>
          </div>

          <div className="message-detail-content">
            <h3>{selectedMessage.asunto}</h3>
            <div className="message-body">
              {selectedMessage.contenido}
            </div>
          </div>

          <div className="message-detail-actions">
            <button className="btn-primary">↩️ Responder</button>
            <button className="btn-secondary">🔄 Reenviar</button>
            <button className="btn-secondary">🗑️ Eliminar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Messages;
