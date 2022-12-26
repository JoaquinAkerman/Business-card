import React from 'react';
import joaquinAkerman from '../user-info/joaquinAkerman';

function ProfileImage() {
  return (
    <div className='profile-image'>
      <img src={'../images/computer-guy.png'} />
    </div>
  );
}

function CreateButton(props) {
  function handleClick(e) {
    const linkedInUrl = joaquinAkerman.linkedInUrl;
    const email = joaquinAkerman.email;
    if (e.target.id === 'Email') {
      window.location.href = `mailto:${email}?subject=Email Subject&body=Email Body`;
    }
    if (e.target.id === 'LinkedIn') {
      window.open(`${linkedInUrl}`);
    }
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

function Footer(props) {
  return (
    <footer className='footer'>
      <a href={props.facebookUrl}>
        <img
          src='../images/Facebook-Icon.png'
          alt='Facebook logo'
        />
      </a>
      <a href={props.instagramUrl}>
        <img
          src='../images/Instagram-Icon.png'
          alt='Instagram logo'
        />
      </a>
      <a href={props.gitHubUrl}>
        <img
          src='../images/GitHub-Icon.png'
          alt='GitHub logo'
        />
      </a>
    </footer>
  );
}

export default function MainContent(props) {
  return (
    <div className='business-card'>
      <ProfileImage />
      <div className='main-content'>
        <Navbar {...joaquinAkerman} />

        <div className='about-container'>
          <h3>About</h3>
          {props.about}
        </div>
        <div className='interest-container'>
          <h3>Interests</h3> {props.interest}
        </div>
      </div>
      <Footer {...joaquinAkerman} />
    </div>
  );
}
