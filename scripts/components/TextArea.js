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
        let element = document.createElement('textarea');
        if (id) {
            element.id = id;
        }
        if (className) {
            element.classList.add(className);
        }
        return element;
    }

    mount() {
        document.body.appendChild(this.el);
        this.el.focus();
    }

    unmount() {
        document.body.removeChild(this.el);
    }

    addText(text) {
        this.el.value += text;
    }

    deleteLastChar() {
        this.el.value = this.el.value.slice(0, this.el.value.length - 1);
    }
}

export default TextArea;