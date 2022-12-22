import React from 'react';

function handleClick() {
  // Open the default email client with a new message pre-populated with the desired recipient and subject
  // Para enviar mail: window.location.href = 'mailto:recipient@example.com?subject=Email%20Subject';
  // Para abrir linkedIn: window.location.href()
  // Proximamente: function para definir si vamos a linkedIn o enviamos mail
  console.log('enviar mail o ir a likedIn');
}
function CreateButton(props) {
  console.log(`se creó ${props.texto}`);
  return (
    <div className={props.texto}>
      <button
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

export default function Navbar() {
  return (
    <nav className='Navbar'>
      <h1>Joaquin Akerman</h1>
      <h2>Developer</h2>
      <a
        className='btn btn-link'
        href='https://github.com/JoaquinAkerman'
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
