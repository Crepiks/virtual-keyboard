window.onload = function() {

    let infoText = new window.InfoText([
        'Разработано на Windows',
        'Сочетание клавиш для переключение языка - Ctrl + Alt'
    ]);
    infoText.mount();

    let textArea = new window.TextArea('textarea', 'textarea');
    textArea.mount();

    let keyboard = new window.Keyboard(window.keyboardArray, {
        className: 'keyboard'
    });
    keyboard.generateButtonsArray();
    keyboard.generateTemplate(keyboard.buttons);
    keyboard.mount();

    window.listenKeyboardButtonEvents(keyboard.toggleLang, keyboard.activateButton, keyboard.deactivateButton, keyboard.handlePhysicalKeyboardInput);
}