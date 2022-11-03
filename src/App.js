// styles
import './styles/main.css';

// components
import Header from './components/Header';
import Info from './components/Info';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Info />
      <Footer />
    </div>
  );
}

export default App;