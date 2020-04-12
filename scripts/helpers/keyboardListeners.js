export const listenKeyboardButtonEvents = (languageChangeHandler, activateButtonHandler, deactivateButtonHandler, inputHandler) => {

    let altIsPressed = false;
    let ctrlIsPressed = false;

    document.addEventListener('keydown', e => {
        e.preventDefault();
        if (e.key === 'Control') {
            ctrlIsPressed = true;
            if (altIsPressed && ctrlIsPressed) {
                languageChangeHandler();
            }
        }
        if (e.key === 'Alt') {
            altIsPressed = true;
            if (altIsPressed && ctrlIsPressed) {
                languageChangeHandler();
            }
        }
        inputHandler(e);
        activateButtonHandler(e.code);
    });

    document.addEventListener('keyup', e => {
        e.preventDefault();
        if (e.key === 'Control') {
            ctrlIsPressed = false;
        }
        if (e.key === 'Alt') {
            altIsPressed = false;
        }
        deactivateButtonHandler(e.code);
    });
}