let instance = null;

class TextArea {
  constructor(id, className) {
    if (instance) {
      return instance;
    }
    this.el = TextArea.getTemplate(id, className);
    instance = this;
  }

  static getTemplate(id, className) {
    const element = document.createElement('textarea');
    if (id) {
      element.id = id;
    }
    if (className) {
      element.classList.add(className);
    }
    return element;
  }

  getCaretPosition = (el) => {
    if (el.selectionStart || el.selectionStart === 0) {
      return {
        start: el.selectionStart,
        end: el.selectionEnd,
      };
    }
    return {
      start: 0,
      end: 0,
    };
  };

  setCaretPosition = (el, position) => {
    if (el.createTextRange) {
      const range = el.createTextRange();
      range.move('character', position);
      range.select();
    } else if (el.selectionStart) {
      el.focus();
      el.setSelectionRange(position, position);
    } else {
      el.focus();
    }
  };

  reloadContent(content) {
    this.el.value = content;
  }

  mount() {
    document.body.appendChild(this.el);
    this.el.focus();
  }

  unmount = () => document.body.removeChild(this.el);

  addText = (text) => {
    this.el.value += text;
  };

  backspace = () => {
    let text = this.el.value;
    const caretPosition = this.getCaretPosition(this.el);
    let newCaretPosition;
    if (caretPosition.start === caretPosition.end) {
      text = text.substring(0, caretPosition.start - 1) + text.substring(caretPosition.end);
      newCaretPosition = caretPosition.start - 1;
    } else {
      text = text.substring(0, caretPosition.start) + text.substring(caretPosition.end);
      newCaretPosition = caretPosition.start;
    }
    this.reloadContent(text);
    this.setCaretPosition(this.el, newCaretPosition);
  };
}

export default TextArea;
