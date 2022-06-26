import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import SecondCard from './components/SecondCard';
import DownloadCard from './components/DownloadCard';
import DevicesCard from './components/DevicesCard';
import YoungCard from './components/YoungCard';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

import './styles/App.css';

function App() {
  return (
    <div>
      <header >
        <div className="img-gradient">
          <div className='img-opacity'>
            <NavBar />
            <Welcome />
          </div>
        </div>
      </header>
      <main>
        <SecondCard />
        <DownloadCard />
        <DevicesCard />
        <YoungCard />
        <FAQ />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
