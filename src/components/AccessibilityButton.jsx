import React, { useState, useEffect } from 'react';
import './AccessibilityButton.css';

export default function AccessibilityButton() {
  const [scale, setScale] = useState(1);
  const [highContrast, setHighContrast] = useState(false);
  const [dyslexiaFont, setDyslexiaFont] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [focusOutline, setFocusOutline] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleTextSizeChange = (size) => {
    setTextSize(size);
    if (size === 'small') {
      document.documentElement.style.fontSize = '14px';
    } else if (size === 'large') {
      document.documentElement.style.fontSize = '18px';
    } else {
      document.documentElement.style.fontSize = '16px';
    }
  };

  const handleHighContrast = () => {
    const newState = !highContrast;
    setHighContrast(newState);
    if (newState) {
      document.documentElement.style.filter = 'contrast(1.5)';
    } else {
      document.documentElement.style.filter = 'contrast(1)';
    }
  };

  const handleDyslexiaFont = () => {
    const newState = !dyslexiaFont;
    setDyslexiaFont(newState);
    if (newState) {
      document.documentElement.style.fontFamily = "'Courier New', monospace";
    } else {
      document.documentElement.style.fontFamily = "inherit";
    }
  };

  const handleVoiceReading = () => {
    const newState = !voiceReading;
    setVoiceReading(newState);

    if (!newState) {
      // Detener lectura
      synth.current.cancel();
      setIsReading(false);
    } else {
      // Iniciar lectura del contenido visible
      startVoiceReading();
    }
  };

  const startVoiceReading = () => {
    const mainContent = document.querySelector('.content-wrapper');
    if (!mainContent) return;

    const text = mainContent.innerText;

    if (text.trim().length === 0) {
      alert('No hay contenido para leer en voz alta');
      setVoiceReading(false);
      return;
    }

    // Agregar clase de lectura activa
    mainContent.classList.add('voice-reading-active');

    synth.current.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => {
      setIsReading(true);
      addReadingPointer(mainContent);
    };

    utterance.onend = () => {
      setIsReading(false);
      setVoiceReading(false);
      mainContent.classList.remove('voice-reading-active');
      removeReadingPointer();
    };

    utterance.onerror = () => {
      setIsReading(false);
      setVoiceReading(false);
      mainContent.classList.remove('voice-reading-active');
      removeReadingPointer();
    };

    synth.current.speak(utterance);
  };

  const addReadingPointer = (element) => {
    let pointer = document.querySelector('.voice-reading-pointer');
    if (pointer) {
      pointer.remove();
    }

    pointer = document.createElement('div');
    pointer.className = 'voice-reading-pointer';
    pointer.innerHTML = '▶';
    pointer.style.position = 'fixed';
    pointer.style.left = '20px';
    pointer.style.top = '100px';
    pointer.style.zIndex = '10001';
    
    document.body.appendChild(pointer);
    
    // Iniciar el movimiento del puntero
    startPointerMovement(element);
  };

  const startPointerMovement = (element) => {
    const pointer = document.querySelector('.voice-reading-pointer');
    if (!pointer) return;

    const startRect = element.getBoundingClientRect();
    const startY = startRect.top + window.scrollY;
    const endY = startRect.bottom + window.scrollY;
    const contentHeight = endY - startY;

    let currentProgress = 0;
    let moveInterval = null;

    moveInterval = setInterval(() => {
      // Verificar si la síntesis de voz sigue activa
      if (!synth.current.speaking) {
        if (moveInterval) {
          clearInterval(moveInterval);
        }
        return;
      }

      // Incrementar el progreso
      currentProgress += 1;
      
      if (currentProgress > 100) {
        currentProgress = 100;
      }

      // Calcular posición del puntero
      const currentY = startY + (contentHeight * (currentProgress / 100));
      
      if (pointer && pointer.parentNode) {
        pointer.style.top = `${currentY}px`;
      }

    }, 100);

    // Guardar referencia del intervalo
    window.pointerMoveInterval = moveInterval;
  };

  const removeReadingPointer = () => {
    // Cancelar el intervalo de movimiento
    if (window.pointerMoveInterval) {
      clearInterval(window.pointerMoveInterval);
      window.pointerMoveInterval = null;
    }
    
    const pointer = document.querySelector('.voice-reading-pointer');
    if (pointer) {
      pointer.remove();
    }
  };

  return (
    <>
      <button
        className="accessibility-button"
        onClick={toggleMenu}
        title="Opciones de accesibilidad"
        aria-label="Abrir menú de accesibilidad"
        aria-expanded={isOpen}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="accessibility-icon"
        >
          <circle cx="12" cy="6" r="2" />
          <path d="M10 9h4v5h-4z" />
          <path d="M9 15h6v2H9z" />
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>

      {isOpen && (
        <div className="accessibility-menu">
          <div className="accessibility-menu-header">
            <h3>Opciones de Accesibilidad</h3>
            <button
              className="close-button"
              onClick={toggleMenu}
              aria-label="Cerrar menú de accesibilidad"
            >
              ✕
            </button>
          </div>

          <div className="accessibility-menu-content">
            <div className="option-group">
              <label>Tamaño de texto:</label>
              <div className="button-group">
                <button
                  className={`size-btn ${textSize === 'small' ? 'active' : ''}`}
                  onClick={() => handleTextSizeChange('small')}
                  title="Texto pequeño"
                >
                  A
                </button>
                <button
                  className={`size-btn ${textSize === 'normal' ? 'active' : ''}`}
                  onClick={() => handleTextSizeChange('normal')}
                  title="Texto normal"
                >
                  A
                </button>
                <button
                  className={`size-btn large ${textSize === 'large' ? 'active' : ''}`}
                  onClick={() => handleTextSizeChange('large')}
                  title="Texto grande"
                >
                  A
                </button>
              </div>
            </div>

            <div className="option-group">
              <button
                className={`toggle-btn ${highContrast ? 'active' : ''}`}
                onClick={handleHighContrast}
                title="Alternar contraste alto"
              >
                <span className="toggle-indicator"></span>
                Contraste Alto
              </button>
            </div>

            <div className="option-group">
              <button
                className={`toggle-btn ${dyslexiaFont ? 'active' : ''}`}
                onClick={handleDyslexiaFont}
                title="Alternar fuente para dislexia"
              >
                <span className="toggle-indicator"></span>
                Fuente Dislexia
              </button>
            </div>

            <div className="option-group">
              <button
                className={`toggle-btn ${voiceReading ? 'active' : ''} ${isReading ? 'reading' : ''}`}
                onClick={handleVoiceReading}
                title="Lectura en voz alta"
              >
                <span className="toggle-indicator"></span>
                {isReading ? '🔊 Leyendo...' : '🔊 Lectura en Voz Alta'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
