import './App.scss';
import Navbar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import About from './components/About/about';
import Portfolio from './components/Portfolio/portfolio';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <><div className="App container">
      <header className="App-header">
      </header>
      <main>
        <Navbar />
        <Intro />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </div><Footer /></>
  );
}

export default App;
