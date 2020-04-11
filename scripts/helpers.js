(function() {
    window.mount = function(element, container) {
        container.appendChild(element);
    }

    window.unmount = (element, container) => {
        container.removeChild(element);
    }

    window.isKeyboardButtonOperating = (code, keyboardArray) => {
        keyboardArray.forEach(button => {
            if (button.code === code && button.isOperating) {
                return true;
            }
        });
        return false;
    }
})();