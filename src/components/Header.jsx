import Logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className='main'>
      <nav className='main-logo'>
        <img
          src={Logo}
          alt='Logo' />
      </nav>

      <main className='hero'>
        <h1 className='title'>
          We make your music sound extraordinary.
        </h1>
        <p className='main-text hero-text'>
          A system audio equalizer specifically designed for Android and iOS. Freely tune the way your music sounds with a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain control, reverb, and more!
        </p>
      </main>
    </header>
  )
}

export default Header;