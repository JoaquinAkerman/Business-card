import MainContent from './components/MainContent';
import React from 'react';
import joaquinAkerman from './user-info/joaquinAkerman';
export default function App() {
  return (
    <div className='app'>
      <MainContent {...joaquinAkerman} />
    </div>
  );
}
