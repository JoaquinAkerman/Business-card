import React from 'react';

import facebookLogo from '../images/Facebook-Icon.png';
import gitHubLogo from '../images/GitHub-Icon.png';
import instagramLogo from '../images/Instagram-Icon.png';

const SocialButtons = (props) => {
  return (
    <footer className='my-footer'>
      <a href={props.facebookUrl}>
        <img
          src={facebookLogo}
          alt='Facebook logo'
        />
      </a>
      <a href={props.instagramUrl}>
        <img
          src={instagramLogo}
          alt='Instagram logo'
        />
      </a>
      <a href={props.gitHubUrl}>
        <img
          src={gitHubLogo}
          alt='GitHub logo'
        />
      </a>
    </footer>
  );
};

export { SocialButtons };
