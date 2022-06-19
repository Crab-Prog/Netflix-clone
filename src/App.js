import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import './styles/App.css';
import SecondCard from './components/SecondCard';
import DownloadCard from './components/DownloadCard';
import DevicesCard from './components/DevicesCard';
import YoungCard from './components/YoungCard';
import FAQ from './components/FAQ';

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
        <div className='bg-black border-t-gray-300 pb-28'>hello</div>
      </main>
    </div>
  );
}

export default App;
