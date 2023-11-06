const React = require('react');
const TextArea = require('./TextArea');


function App() {
  return React.createElement('div', { className: 'App' },
    React.createElement('header', { className: 'App-header' },
      React.createElement('h1', null, 'Caesar Cipher Encoder/Decoder'),
      React.createElement(TextArea, null)
    )
  );
}

module.exports = App;