import '../components/App.css';
import Header from './header/Header';
import CardSection from './header/CardSection';
import About from './main/About';
import Education from './main/Education';
import Experience from './main/Experience';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <CardSection />
      <About />
      <Education />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
