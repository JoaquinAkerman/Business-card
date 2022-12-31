import Card from './components/Card';
import React from 'react';
import { joaquinAkerman } from './user-info/joaquinAkerman';
export default function App() {
  return (
    <div className='app'>
      <Card {...joaquinAkerman} />
    </div>
  );
}
