import React from 'react';

const ThemeContext = React.createContext([
  'green',
  () => {
    // console.log('context');
  },
]);

export default ThemeContext;
