const keyboardArray = [
  {
    code: 'Backquote',
    ru: {
      text: 'ё',
    },
    en: {
      text: '`',
      alt: '~',
    },
  },
  {
    code: 'Digit1',
    ru: {
      text: '1',
      alt: '!',
    },
    en: {
      text: '1',
      alt: '!',
    },
  },
  {
    code: 'Digit2',
    ru: {
      text: '2',
      alt: '"',
    },
    en: {
      text: '2',
      alt: '@',
    },
  },
  {
    code: 'Digit3',
    ru: {
      text: '3',
      alt: '№',
    },
    en: {
      text: '3',
      alt: '#',
    },
  },
  {
    code: 'Digit4',
    ru: {
      text: '4',
      alt: ';',
    },
    en: {
      text: '4',
      alt: '$',
    },
  },
  {
    code: 'Digit5',
    ru: {
      text: '5',
      alt: '%',
    },
    en: {
      text: '5',
      alt: '%',
    },
  },
  {
    code: 'Digit6',
    ru: {
      text: '6',
      alt: ':',
    },
    en: {
      text: '6',
      alt: '^',
    },
  },
  {
    code: 'Digit7',
    ru: {
      text: '7',
      alt: '?',
    },
    en: {
      text: '7',
      alt: '&',
    },
  },
  {
    code: 'Digit8',
    ru: {
      text: '8',
      alt: '*',
    },
    en: {
      text: '8',
      alt: '*',
    },
  },
  {
    code: 'Digit9',
    ru: {
      text: '9',
      alt: '(',
    },
    en: {
      text: '9',
      alt: '(',
    },
  },
  {
    code: 'Digit0',
    ru: {
      text: '0',
      alt: ')',
    },
    en: {
      text: '0',
      alt: ')',
    },
  },
  {
    code: 'Minus',
    ru: {
      text: '-',
      alt: '_',
    },
    en: {
      text: '-',
      alt: '_',
    },
  },
  {
    code: 'Equal',
    ru: {
      text: '=',
      alt: '+',
    },
    en: {
      text: '=',
      alt: '+',
    },
  },
  {
    code: 'Backspace',
    label: 'Backspace',
    isOperating: true,
    additionalClasses: ['keyboard-button_name-backspace', 'keyboard-button_dark'],
  },
  {
    code: 'Tab',
    label: 'Tab',
    ru: { text: '\t' },
    en: { text: '\t' },
    additionalClasses: ['keyboard-button_dark'],
  },
  {
    code: 'KeyQ',
    ru: { text: 'й' },
    en: { text: 'q' },
  },
  {
    code: 'KeyW',
    ru: { text: 'ц' },
    en: { text: 'w' },
  },
  {
    code: 'KeyE',
    ru: { text: 'у' },
    en: { text: 'e' },
  },
  {
    code: 'KeyR',
    ru: { text: 'к' },
    en: { text: 'r' },
  },
  {
    code: 'KeyT',
    ru: { text: 'е' },
    en: { text: 't' },
  },
  {
    code: 'KeyY',
    ru: { text: 'н' },
    en: { text: 'y' },
  },
  {
    code: 'KeyU',
    ru: { text: 'г' },
    en: { text: 'u' },
  },
  {
    code: 'KeyI',
    ru: { text: 'ш' },
    en: { text: 'i' },
  },
  {
    code: 'KeyO',
    ru: { text: 'щ' },
    en: { text: 'o' },
  },
  {
    code: 'KeyP',
    ru: { text: 'з' },
    en: { text: 'p' },
  },
  {
    code: 'BracketLeft',
    ru: { text: 'х' },
    en: {
      text: '[',
      alt: '{',
    },
  },
  {
    code: 'BracketRight',
    ru: { text: 'ъ' },
    en: {
      text: ']',
      alt: '}',
    },
  },
  {
    code: 'Backslash',
    ru: {
      text: '\\',
      alt: '/',
    },
    en: {
      text: '\\',
      alt: '|',
    },
  },
  {
    code: 'Delete',
    label: 'Del',
    isOperating: true,
    additionalClasses: ['keyboard-button_dark'],
  },
  {
    code: 'CapsLock',
    label: 'CapsLock',
    isOperating: true,
    additionalClasses: ['keyboard-button_dark', 'keyboard-button_name-capslock'],
  },
  {
    code: 'KeyA',
    ru: { text: 'ф' },
    en: { text: 'a' },
  },
  {
    code: 'KeyS',
    ru: { text: 'ы' },
    en: { text: 's' },
  },
  {
    code: 'KeyD',
    ru: { text: 'в' },
    en: { text: 'd' },
  },
  {
    code: 'KeyF',
    ru: { text: 'а' },
    en: { text: 'f' },
  },
  {
    code: 'KeyG',
    ru: { text: 'п' },
    en: { text: 'g' },
  },
  {
    code: 'KeyH',
    ru: { text: 'р' },
    en: { text: 'h' },
  },
  {
    code: 'KeyJ',
    ru: { text: 'о' },
    en: { text: 'j' },
  },
  {
    code: 'KeyK',
    ru: { text: 'л' },
    en: { text: 'k' },
  },
  {
    code: 'KeyL',
    ru: { text: 'д' },
    en: { text: 'l' },
  },
  {
    code: 'Semicolon',
    ru: { text: 'ж' },
    en: {
      text: ';',
      alt: ':',
    },
  },
  {
    code: 'Quote',
    ru: { text: 'э' },
    en: {
      text: "'",
      alt: '"',
    },
  },
  {
    code: 'Enter',
    label: 'Enter',
    ru: { text: '\n' },
    en: { text: '\n' },
    additionalClasses: ['keyboard-button_name-enter', 'keyboard-button_dark'],
  },
  {
    code: 'ShiftLeft',
    label: 'Shift',
    isOperating: true,
    additionalClasses: ['keyboard-button_name-shift-left', 'keyboard-button_dark'],
  },
  {
    code: 'KeyZ',
    ru: { text: 'я' },
    en: { text: 'z' },
  },
  {
    code: 'KeyX',
    ru: { text: 'ч' },
    en: { text: 'x' },
  },
  {
    code: 'KeyC',
    ru: { text: 'с' },
    en: { text: 'c' },
  },
  {
    code: 'KeyV',
    ru: { text: 'м' },
    en: { text: 'v' },
  },
  {
    code: 'KeyB',
    ru: { text: 'и' },
    en: { text: 'b' },
  },
  {
    code: 'KeyN',
    ru: { text: 'т' },
    en: { text: 'n' },
  },
  {
    code: 'KeyM',
    ru: { text: 'ь' },
    en: { text: 'm' },
  },
  {
    code: 'Comma',
    ru: { text: 'б' },
    en: {
      text: ',',
      alt: '<',
    },
  },
  {
    code: 'Period',
    ru: { text: 'ю' },
    en: {
      text: '.',
      alt: '>',
    },
  },
  {
    code: 'Slash',
    ru: {
      text: '.',
      alt: ',',
    },
    en: {
      text: '/',
      alt: '?',
    },
  },
  {
    code: 'ArrowUp',
    label: '<i class="fas fa-angle-up"></i>',
    ru: { text: '▲' },
    en: { text: '▲' },
    additionalClasses: ['keyboard-button_dark'],
  },
  {
    code: 'ShiftRight',
    label: 'Shift',
    isOperating: true,
    additionalClasses: ['keyboard-button_name-shift-right', 'keyboard-button_dark'],
  },
  {
    code: 'ControlLeft',
    label: 'Ctrl',
    isOperating: true,
    additionalClasses: ['keyboard-button_dark'],
  },
  {
    code: 'MetaLeft',
    label: 'Win',
    isOperating: true,
    additionalClasses: ['keyboard-button_dark'],
  },
  {
    code: 'AltLeft',
    label: 'Alt',
    isOperating: true,
    additionalClasses: ['keyboard-button_dark'],
  },
  {
    code: 'Space',
    label: '',
    ru: { text: ' ' },
    en: { text: ' ' },
    additionalClasses: ['keyboard-button_name-space'],
  },
  {
    code: 'AltRight',
    label: 'Alt',
    isOperating: true,
    additionalClasses: ['keyboard-button_dark'],
  },
  {
    code: 'ArrowLeft',
    label: '<i class="fas fa-angle-left"></i>',
    ru: { text: '◄' },
    en: { text: '◄' },
    additionalClasses: ['keyboard-button_dark'],
  },
  {
    code: 'ArrowDown',
    label: '<i class="fas fa-angle-down"></i>',
    ru: { text: '▼' },
    en: { text: '▼' },
    additionalClasses: ['keyboard-button_dark'],
  },
  {
    code: 'ArrowRight',
    label: '<i class="fas fa-angle-right"></i>',
    ru: { text: '►' },
    en: { text: '►' },
    additionalClasses: ['keyboard-button_dark'],
  },
  {
    code: 'ControlRight',
    label: 'Ctrl',
    isOperating: true,
    additionalClasses: ['keyboard-button_dark'],
  },
];

export default keyboardArray;
