import React from 'react';
import joaquinAkerman from '../user-info/joaquinAkerman';

function ProfileImage() {
  return (
    <img
      className='ProfileImage'
      src={'../images/computer-guy.png'}
    />
  );
}

function CreateButton(props) {
  function handleClick(e) {
    const linkedInUrl = joaquinAkerman.linkedInUrl;
    const email = joaquinAkerman.email;
    if (e.target.id === 'Email') {
      console.log(`proximamente enviar mail a ${email}`);
    }
    if (e.target.id === 'LinkedIn') {
      console.log(`proximamente ir a ${linkedInUrl}`);
    }
    // Open the default email client with a new message pre-populated with the desired recipient and subject
    // Para enviar mail: window.location.href = 'mailto:recipient@example.com?subject=Email%20Subject';
    // Para abrir linkedIn: window.location.href()
    // Proximamente: function para definir si vamos a linkedIn o enviamos mail
  }
  return (
    <div className={props.texto}>
      <button
        id={props.texto}
        className='btn btn-light '
        onClick={handleClick}
      >
        <img
          src={props.logo}
          alt='Logo'
          className='button-logo'
        ></img>
        {props.texto}
      </button>
    </div>
  );
}

function Navbar(props) {
  return (
    <nav className='Navbar'>
      <h1>{props.name}</h1>
      <h2>{props.position}</h2>
      <a
        className='btn btn-link'
        href={props.gitHubUrl}
      >
        My GitHub
      </a>

      <div className='ButtonsContainer'>
        <CreateButton
          texto='Email'
          logo='../images/mail-logo.png'
        />
        <CreateButton
          texto='LinkedIn'
          logo='../images/LinkedIn-logo.png'
        />
      </div>
    </nav>
  );
}

export default function MainContent(props) {
  return (
    <div className='main-content'>
      <ProfileImage />

      <Navbar {...joaquinAkerman} />

      <div className='about-container'>
        <h3>About</h3>
        {props.about}
      </div>
      <div className='interest-container'>
        <h3>Interests</h3> {props.interest}
      </div>
    </div>
  );
}
