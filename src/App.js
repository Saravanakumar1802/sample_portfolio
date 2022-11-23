import './App.css';
import About from './component/about/About';
import Header from './component/header/Header';
import Home from './component/home/Home';

function App() {
  return (
    <>

      <Header />

      <main className='main'>

        <Home />
        <About/>
      </main>

      


    </>
  );
}

export default App;
