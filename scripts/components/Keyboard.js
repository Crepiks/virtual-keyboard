import TextArea from './TextArea.js';
import Button from './Button.js';

let instance = null;

class Keyboard {
  constructor(keyboardArray, options = {}) {
    if (instance) {
      return instance;
    }

    this.lang = localStorage.getItem('lang') || 'ru';
    this.ctrlIsPressed = false;
    this.altIsPressed = false;
    this.isShiftPressed = false;
    this.isCapsLockActive = false;
    this.el = null;
    this.options = options;
    this.keyboardArray = keyboardArray;
    this.buttons = null;
  }

  generateButtonsArray() {
    this.buttons = this.keyboardArray.map((item) => {
      if (item.isOperating) {
        return new Button(this.handleButtonClick, item.code, item.label, item.additionalClasses, {
          isOperating: true,
          content: item.content,
        });
      } else {
        let label = item[this.lang];
        if (label && (this.isCapsLockActive || this.isShiftPressed)) {
          label = label.toUpperCase();
        }
        if (this.isShiftPressed && item.alt) {
          label = item.alt;
        }
        return new Button(this.handleButtonClick, item.code, label, item.additionalClasses, {
          isOperating: false,
          content: item.content,
        });
      }
    });
  }

  generateTemplate(buttons) {
    const template = document.createElement(this.options.tagName || 'div');

    if (this.options.className) {
      template.classList.add(this.options.className);
    }

    buttons.forEach((item) => template.appendChild(item.el));
    this.el = template;
  }

  mount = () => this.el && document.body.appendChild(this.el);

  unmount = () => document.body.removeChild(this.el);

  reloadKeyboard() {
    this.unmount();
    this.generateButtonsArray();
    this.generateTemplate(this.buttons);
    this.mount();
  }

  toggleLang = () => {
    this.lang = this.lang === 'ru' ? 'en' : 'ru';
    console.log('Language has been changed');
    localStorage.setItem('lang', this.lang);
    this.reloadKeyboard();
  };

  getButtonById = (id) => {
    let button;
    this.buttons.forEach((item) => {
      if (id === item.id) {
        button = item;
      }
    });
    return button;
  };

  handleInput = (id) => {
    let button = this.getButtonById(id);
    if (!button) {
      return;
    }
    let textArea = new TextArea();
    if (id === 'Backspace') {
      textArea.deleteLastChar();
      return;
    }
    if (id === 'CapsLock') {
      this.isCapsLockActive = !this.isCapsLockActive;
      this.reloadKeyboard();
      return;
    }
    if (button.content) {
      textArea.addText(button.content);
    } else if (!button.isOperating && button.label) {
      textArea.addText(button.label);
    }
  };

  handleButtonClick = (e) => this.handleInput(e.target.id);

  handlePhysicalKeyboardInput = (e) => this.handleInput(e.code);

  toggleShiftState(code, flag) {
    if ((code === 'ShiftLeft' || code === 'ShiftRight') && flag !== this.isShiftPressed) {
      this.isShiftPressed = flag;
      this.reloadKeyboard();
    }
  }

  activateButton = (code) => {
    let button = this.getButtonById(code);
    if (button) {
      button.activate();
    }
    this.toggleShiftState(code, true);
  };

  deactivateButton = (code) => {
    let button = this.getButtonById(code);
    if (button) {
      button.deactivate();
    }
    this.toggleShiftState(code, false);
  };
}

export default Keyboard;
