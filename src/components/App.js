import '../components/App.css';
import Header from './header/Header';
import CardSection from './header/CardSection';
import About from './main/About';
import Education from './main/Education';
import Footer from './footer/Footer';
import LinkSection from './header/LinkSection';
import ExpCard from './main/ExpCard';

function App() {
  return (
    <div className="App">
      <Header />
      <CardSection />
      <LinkSection />
      <About />
      <Education />
      <ExpCard />
      <Footer />
    </div>
  );
}

export default App;
