import React from 'react';

import { joaquinAkerman } from '../user-info/Joaquin_Akerman/joaquinAkerman';
import profileImage from '../user-info/Joaquin_Akerman/profileImage.png';
import { SocialButtons } from './SocialButtons';
import emailLogo from '../images/mail-logo.png';
import linkedInLogo from '../images/LinkedIn-logo.png';

function ProfileImage() {
  return (
    <div className='profile-image'>
      <img
        src={profileImage}
        alt='Imagen de perfil'
      />
    </div>
  );
}

function ContactButton(props) {
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

function Header(props) {
  return (
    <nav className='Header'>
      <h1>{props.name}</h1>
      <h2>{props.position}</h2>
      <a
        className='btn btn-link'
        href={props.gitHubUrl}
      >
        My GitHub
      </a>

      <div className='ButtonsContainer'>
        <ContactButton
          texto='Email'
          logo={emailLogo}
        />
        <ContactButton
          texto='LinkedIn'
          logo={linkedInLogo}
        />
      </div>
    </nav>
  );
}

function Footer() {
  return <SocialButtons {...joaquinAkerman} />;
}
///
export default function Card(props) {
  const { about, interest } = props;
  return (
    <div className='business-card'>
      <ProfileImage {...joaquinAkerman} />
      <div className='main-content'>
        <Header {...joaquinAkerman} />

        <div className='about-container'>
          <h3>About</h3>
          {about}
        </div>
        <div className='interest-container'>
          <h3>Interests</h3> {interest}
        </div>
      </div>
      <Footer {...joaquinAkerman} />
    </div>
  );
}

/* function MyComponent() {
  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
//      {/* Content goes here */
