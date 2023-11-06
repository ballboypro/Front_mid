const path = require('path');

module.exports = {
  // ... other webpack configuration settings ...

  module: {
    rules: [
      // ... other rules ...

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  // ... other webpack configuration settings ...
};
