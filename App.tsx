import React from 'react';
import ContextTVShow from './src/const/ContextTVShow';
import Routes from './src/Routes';
import ContextTheme from './src/const/ContextTheme';

export default function App() {
  return (
    <ContextTheme>
      <ContextTVShow>
        <Routes />
      </ContextTVShow>
    </ContextTheme>
  );
}
