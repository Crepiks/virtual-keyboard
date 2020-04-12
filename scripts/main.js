import TextArea from './components/TextArea.js';
import Keyboard from './components/Keyboard.js';
import InfoText from './components/InfoText.js';
import { listenKeyboardButtonEvents } from './helpers/keyboardListeners.js';
import keyboardArray from './config/keyboardArray.js';

window.onload = function () {
  const infoText = new InfoText([
    'Разработано на Windows',
    'Сочетание клавиш для переключение языка - Ctrl + Alt',
  ]);
  infoText.mount();

  const textArea = new TextArea('textarea', 'textarea');
  textArea.mount();

  const keyboard = new Keyboard(keyboardArray, {
    className: 'keyboard',
  });
  keyboard.generateButtonsArray();
  keyboard.generateTemplate(keyboard.buttons);
  keyboard.mount();

  listenKeyboardButtonEvents(
    keyboard.toggleLang,
    keyboard.activateButton,
    keyboard.deactivateButton,
    keyboard.handlePhysicalKeyboardInput
  );
};
