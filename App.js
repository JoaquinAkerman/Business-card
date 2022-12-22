import MainContent from './components/MainContent';
import ProfileImage from './components/ProfileImage';
import Navbar from './components/Navbar';
import React from 'react';
export default function App() {
  return (
    <div className='App'>
      <ProfileImage />
      <Navbar />
      <MainContent />
    </div>
  );
}
