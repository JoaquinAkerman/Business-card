import Card from './components/Card';
import React from 'react';
import { joaquinAkerman } from './user-info/Joaquin_Akerman/joaquinAkerman';
export default function App() {
  return (
    <div className='App'>
      <Card {...joaquinAkerman} />
    </div>
  );
}
