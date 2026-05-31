(function () {
  if (window.__A11Y_PLUGIN_LOADED) return;
  window.__A11Y_PLUGIN_LOADED = true;

  const css = `
  .a11y-toolbar {
    position: fixed;
    right: 16px;
    bottom: 16px;
    z-index: 2147483647;
    font-family: sans-serif;
  }

  .a11y-toggle {
    background: #0066cc;
    color: #fff;
    border: none;
    border-radius: 999px;
    padding: 12px 18px;
    cursor: pointer;
    font-weight: 700;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    transition: transform 0.2s ease, background-color 0.2s ease;
  }

  .a11y-toggle:hover {
    background: #0055aa;
    transform: translateY(-1px);
  }

  .a11y-menu {
    position: absolute;
    right: 0;
    bottom: 60px;
    width: 240px;
    background: #222;
    border-radius: 12px;
    padding: 10px;
    display: grid;
    gap: 8px;
    box-shadow: 0 16px 28px rgba(0, 0, 0, 0.35);
  }

  .a11y-menu button {
    width: 100%;
    background: #333;
    color: #fff;
    border: none;
    padding: 10px 12px;
    border-radius: 10px;
    text-align: left;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.2s ease;
  }

  .a11y-menu button:hover {
    background: #444;
  }

  .a11y-menu button.active {
    background: #0066cc;
    border: 1px solid #0099ff;
  }

  .a11y-menu button:focus,
  .a11y-toggle:focus {
    outline: 2px solid #0099ff;
    outline-offset: 2px;
  }

  .a11y-high-contrast * {
    background: #000 !important;
    color: #ffff00 !important;
    border-color: #fff !important;
    box-shadow: none !important;
  }

  .a11y-dyslexic,
  .a11y-dyslexic * {
    font-family: "OpenDyslexic", "Comic Sans MS", "Arial", sans-serif !important;
    letter-spacing: 0.05em !important;
  }

  .a11y-reduced-motion * {
    animation: none !important;
    transition: none !important;
  }

  .a11y-focus-outline *:focus {
    outline: 3px dashed #ff0 !important;
    outline-offset: 2px !important;
  }

  .voice-reading-active {
    background: rgba(0, 102, 204, 0.1) !important;
    border: 2px solid #0066cc !important;
    border-radius: 4px;
    padding: 8px;
  }

  @media (max-width: 480px) {
    .a11y-toolbar {
      right: 8px;
      bottom: 8px;
    }

    .a11y-menu {
      width: 220px;
      bottom: 56px;
    }

    .a11y-menu button {
      padding: 9px 10px;
      font-size: 13px;
    }
  }
`;

  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  const toolbar = document.createElement('div');
  toolbar.className = 'a11y-toolbar';
  toolbar.setAttribute('aria-label', 'Barra de accesibilidad');

  const toggle = document.createElement('button');
  toggle.className = 'a11y-toggle';
  toggle.type = 'button';
  toggle.textContent = 'Accesibilidad';
  toggle.setAttribute('aria-haspopup', 'true');
  toggle.setAttribute('aria-expanded', 'false');
  toolbar.appendChild(toggle);

  const menu = document.createElement('div');
  menu.className = 'a11y-menu';
  menu.setAttribute('role', 'menu');
  menu.style.display = 'none';

  const addMenuItem = (text, onClick, activeClass) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = text;
    button.setAttribute('role', 'menuitem');
    button.addEventListener('click', () => {
      onClick(button);
    });
    menu.appendChild(button);
    return button;
  };

  let scale = 1;
  const updateScale = () => {
    document.documentElement.style.fontSize = scale * 100 + '%';
  };

  const toggleClass = (className, button) => {
    document.body.classList.toggle(className);
    button.classList.toggle('active');
  };

  addMenuItem('Aumentar texto', () => {
    scale = Math.min(2, scale + 0.1);
    updateScale();
  });

  addMenuItem('Reducir texto', () => {
    scale = Math.max(0.6, scale - 0.1);
    updateScale();
  });

  const highContrastButton = addMenuItem('Alto contraste', (button) => {
    toggleClass('a11y-high-contrast', button);
  });

  const dyslexiaButton = addMenuItem('Fuente legible', (button) => {
    toggleClass('a11y-dyslexic', button);
  });

  const reducedMotionButton = addMenuItem('Reducir movimiento', (button) => {
    toggleClass('a11y-reduced-motion', button);
  });

  const focusOutlineButton = addMenuItem('Resaltar foco', (button) => {
    toggleClass('a11y-focus-outline', button);
    if (document.body.classList.contains('a11y-focus-outline')) {
      startVoiceReading();
    }
  });

  let reading = false;

  const startVoiceReading = () => {
    const contentWrapper = document.querySelector('.content-wrapper') || document.body;
    const text = contentWrapper.innerText.trim();

    if (!text) {
      window.alert('No hay contenido para leer en voz alta');
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => {
      reading = true;
      contentWrapper.classList.add('voice-reading-active');
    };

    utterance.onend = utterance.onerror = () => {
      reading = false;
      contentWrapper.classList.remove('voice-reading-active');
    };

    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  };

  const voiceButton = addMenuItem('Lectura en voz alta', (button) => {
    if (reading) {
      speechSynthesis.cancel();
      reading = false;
      button.classList.remove('active');
    } else {
      startVoiceReading();
      button.classList.add('active');
    }
  });

  addMenuItem('Restablecer', () => {
    speechSynthesis.cancel();
    scale = 1;
    updateScale();
    document.body.classList.remove('a11y-high-contrast', 'a11y-dyslexic', 'a11y-reduced-motion', 'a11y-focus-outline');
    highContrastButton.classList.remove('active');
    dyslexiaButton.classList.remove('active');
    reducedMotionButton.classList.remove('active');
    focusOutlineButton.classList.remove('active');
    voiceButton.classList.remove('active');
    reading = false;
  });

  toggle.addEventListener('click', () => {
    const open = menu.style.display === 'grid';
    menu.style.display = open ? 'none' : 'grid';
    toggle.setAttribute('aria-expanded', String(!open));
  });

  document.addEventListener('mousedown', (event) => {
    if (!toolbar.contains(event.target)) {
      menu.style.display = 'none';
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  toolbar.appendChild(menu);
  document.body.appendChild(toolbar);
})();
