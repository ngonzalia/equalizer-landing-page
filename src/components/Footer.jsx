import Logo from '../assets/logo.svg';
import fb from '../assets/icon-facebook.svg';
import ig from '../assets/icon-instagram.svg';
import tw from '../assets/icon-twitter.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <img
        src={Logo}
        alt='Logo'
        className='footer-logo'
      />

      <div className='footer-tablet-bottom'>
        <div className='footer-info'>
          <p className='footer-text'>
            All rights reserved © Equalizer 2021 <br />
            Have any problems? Contact us via social media or email us at <span className='footer-text-email'>equalizer@example.com</span>
          </p>
        </div>

        <div className='footer-social'>
          <img
            src={fb}
            alt='Facebook icon'
            className='footer-social-link'
          />
          <img
            src={ig}
            alt='Instagram icon'
            className='footer-social-link'
          />
          <img
            src={tw}
            alt='Twitter icon'
            className='footer-social-link'
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
