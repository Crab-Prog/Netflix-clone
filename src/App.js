import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import './styles/App.css';
import SecondCard from './components/SecondCard';
import DownloadCard from './components/DownloadCard';

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
        <div className='bg-black border-t-gray-300 pb-28'>hello</div>
      </main>
    </div>
  );
}

export default App;
