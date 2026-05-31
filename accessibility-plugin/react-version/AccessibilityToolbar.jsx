import React, { useState, useEffect, useRef } from 'react';
import './AccessibilityToolbar.css';

export default function AccessibilityToolbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [highContrast, setHighContrast] = useState(false);
  const [dyslexiaFont, setDyslexiaFont] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [focusOutline, setFocusOutline] = useState(false);
  const [voiceReading, setVoiceReading] = useState(false);
  const synth = useRef(window.speechSynthesis);

  useEffect(() => {
    document.documentElement.style.fontSize = scale * 100 + '%';
  }, [scale]);

  useEffect(() => {
    if (highContrast) {
      document.body.classList.add('a11y-high-contrast');
    } else {
      document.body.classList.remove('a11y-high-contrast');
    }
  }, [highContrast]);

  useEffect(() => {
    if (dyslexiaFont) {
      document.body.classList.add('a11y-dyslexic');
    } else {
      document.body.classList.remove('a11y-dyslexic');
    }
  }, [dyslexiaFont]);

  useEffect(() => {
    if (reducedMotion) {
      document.body.classList.add('a11y-reduced-motion');
    } else {
      document.body.classList.remove('a11y-reduced-motion');
    }
  }, [reducedMotion]);

  useEffect(() => {
    if (focusOutline) {
      document.body.classList.add('a11y-focus-outline');
      handleVoiceReading();
    } else {
      document.body.classList.remove('a11y-focus-outline');
    }
  }, [focusOutline]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const toolbar = document.querySelector('.a11y-toolbar');
      if (!toolbar?.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [menuOpen]);

  const handleIncreaseText = () => {
    setScale((prev) => Math.min(2, prev + 0.1));
  };

  const handleDecreaseText = () => {
    setScale((prev) => Math.max(0.6, prev - 0.1));
  };

  const startVoiceReading = () => {
    const contentWrapper = document.querySelector('.content-wrapper') || document.body;
    const text = contentWrapper.innerText;

    if (!text.trim()) {
      alert('No hay contenido para leer en voz alta');
      return;
    }

    synth.current.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => {
      setVoiceReading(true);
      contentWrapper.classList.add('voice-reading-active');
    };

    utterance.onend = () => {
      setVoiceReading(false);
      contentWrapper.classList.remove('voice-reading-active');
    };

    utterance.onerror = () => {
      setVoiceReading(false);
      contentWrapper.classList.remove('voice-reading-active');
    };

    synth.current.speak(utterance);
  };

  const handleVoiceReading = () => {
    if (voiceReading) {
      synth.current.cancel();
      setVoiceReading(false);
    } else {
      startVoiceReading();
    }
  };

  const handleReset = () => {
    synth.current.cancel();
    setScale(1);
    setHighContrast(false);
    setDyslexiaFont(false);
    setReducedMotion(false);
    setFocusOutline(false);
    setVoiceReading(false);
  };

  return (
    <div className="a11y-toolbar" aria-label="Barra de accesibilidad">
      <button
        className="a11y-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={menuOpen}
        title="Abrir menú de accesibilidad"
      >
        Accesibilidad
      </button>

      {menuOpen && (
        <div className="a11y-menu" role="menu">
          <button role="menuitem" onClick={handleIncreaseText} title="Aumentar texto">
            Aumentar texto
          </button>
          <button role="menuitem" onClick={handleDecreaseText} title="Reducir texto">
            Reducir texto
          </button>
          <button
            role="menuitem"
            onClick={() => setHighContrast((prev) => !prev)}
            className={highContrast ? 'active' : ''}
            title="Alto contraste"
          >
            Alto contraste
          </button>
          <button
            role="menuitem"
            onClick={() => setDyslexiaFont((prev) => !prev)}
            className={dyslexiaFont ? 'active' : ''}
            title="Fuente legible"
          >
            Fuente legible
          </button>
          <button
            role="menuitem"
            onClick={() => setReducedMotion((prev) => !prev)}
            className={reducedMotion ? 'active' : ''}
            title="Reducir movimiento"
          >
            Reducir movimiento
          </button>
          <button
            role="menuitem"
            onClick={() => setFocusOutline((prev) => !prev)}
            className={focusOutline ? 'active' : ''}
            title="Resaltar foco"
          >
            Resaltar foco
          </button>
          <button
            role="menuitem"
            onClick={handleVoiceReading}
            className={voiceReading ? 'active' : ''}
            title="Lectura en voz alta"
          >
            Lectura en voz alta
          </button>
          <button role="menuitem" onClick={handleReset} title="Restablecer">
            Restablecer
          </button>
        </div>
      )}
    </div>
  );
}
