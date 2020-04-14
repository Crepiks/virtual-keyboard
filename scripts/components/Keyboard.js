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
    instance = this;
  }

  generateButtonsArray() {
    this.buttons = this.keyboardArray.map((item) => {
      let label;
      const options = {
        isOperating: item.isOperating || false,
      };
      if (item.label) {
        label = item.label;
        if (!item.isOperating) {
          options.content = item[this.lang].text;
        }
      } else {
        label = item[this.lang].text;
        if (this.isCapsLockActive) {
          label = item[this.lang].text.toUpperCase();
        }

        if (this.isShiftPressed) {
          label = item[this.lang].alt || item[this.lang].text.toUpperCase();
        }
        options.content = label;
      }
      return new Button(this.handleButtonClick, item.code, label, item.additionalClasses, options);
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
    const button = this.getButtonById(id);
    if (!button) {
      return;
    }
    const textArea = new TextArea();
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
    const button = this.getButtonById(code);
    if (button) {
      button.activate();
    }
    this.toggleShiftState(code, true);
  };

  deactivateButton = (code) => {
    const button = this.getButtonById(code);
    if (button) {
      button.deactivate();
    }
    this.toggleShiftState(code, false);
  };
}

export default Keyboard;
