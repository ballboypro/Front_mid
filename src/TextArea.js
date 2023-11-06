const React = require('react');
const { useState, useEffect } = require('react');
require('./TextArea.css'); // Import the CSS file for styling

function TextArea() {
  const [inputText, setInputText] = useState('');
  const [encodedText, setEncodedText] = useState('');
  const [shift, setShift] = useState(generateRandomShift());

  function generateRandomShift() {
    return Math.floor(Math.random() * 25) + 1;
  }

  function encodeText(text, shift) {
    return text
      .split('')
      .map((char) => {
        if (char.match(/[a-z]/i)) {
          const isUpperCase = char === char.toUpperCase();
          const base = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
          const offset = (char.charCodeAt(0) - base + shift) % 26;
          return String.fromCharCode(base + offset);
        }
        return char;
      })
      .join('');
  }

  useEffect(() => {
    setEncodedText(encodeText(inputText, shift));
  }, [inputText, shift]);

  function handleInputChange(event) {
    const text = event.target.value;
    const newShift = generateRandomShift();
    setShift(newShift);
    setInputText(text);
  }

  return React.createElement('div', { className: 'text-area-container' },
    React.createElement('textarea', {
      value: inputText,
      onChange: handleInputChange,
      placeholder: 'Type text here...'
    }),
    React.createElement('div', { className: 'encoded-text-container' },
      React.createElement('strong', null, 'Encoded Text (Random Shift):'),
      React.createElement('p', { className: 'encoded-text' }, encodedText)
    )
  );
}

module.exports = TextArea;