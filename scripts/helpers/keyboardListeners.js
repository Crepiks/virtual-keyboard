export const listenKeyboardButtonEvents = (languageChangeHandler, activateButtonHandler, deactivateButtonHandler, inputHandler) => {
    document.addEventListener('keydown', e => {
        e.preventDefault();
        if (e.key === 'Control') {
            window.ctrlIsPressed = true;
            if (window.altIsPressed && window.ctrlIsPressed) {
                languageChangeHandler();
            }
        }
        if (e.key === 'Alt') {
            window.altIsPressed = true;
            if (window.altIsPressed && window.ctrlIsPressed) {
                languageChangeHandler();
            }
        }
        inputHandler(e);
        activateButtonHandler(e.code);
    });

    document.addEventListener('keyup', e => {
        e.preventDefault();
        if (e.key === 'Control') {
            window.ctrlIsPressed = false;
        }
        if (e.key === 'Alt') {
            window.altIsPressed = false;
        }
        deactivateButtonHandler(e.code);
    });
}