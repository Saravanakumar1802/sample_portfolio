import './App.css';
import About from './component/about/About';
import Header from './component/header/Header';
import Home from './component/home/Home';
import Skills from './component/skills/Skills';
import ProjectsCard from './component/projects/ProjectsCard';

function App() {
  return (
    <>

      <Header />

      <main className='main'>

        <Home />
        <About />
        <Skills />
        <ProjectsCard />

      </main>




    </>
  );
}

export default App;
