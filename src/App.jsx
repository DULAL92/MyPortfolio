
import './App.scss'
import {Routes, Route} from 'react-router-dom'
import Home from './container/Home'
import Contact from './container/Contact'
import About from './container/About'
import Resume from './container/Resume'
import Skills from './container/Skills'
import Portfolio from './container/Portfolio'
import NavBar from './components/navBAr'

function App() {
  return (
      <div className='App'>
        {/* particles js */}
        {/* navBar */}
        <NavBar />
        {/* main pages contant */}
        <div className='App__main-page-content'>
        <Routes>
          <Route index path='/'  element= {<Home />} />
          <Route path='/contact'  element= {<Contact />} />
          <Route path='/about'  element= {<About />} />
          <Route path='/resume'  element= {<Resume />} />
          <Route path='/skills'  element= {<Skills />} />
          <Route path='/portfolio'  element= {<Portfolio />} />
        </Routes>
        </div>
        

        {/* footer */}


    </div>
  )
}

export default App;
