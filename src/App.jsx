import { useState } from 'react'
import './App.css'
import ThemeColorContext, {ThemeColorWrapper} from './ThemeContext'
import ThemeToggler from './components/theme-toggler/ThemeToggler';
import Main from './components/main/Main';
import { useContext } from 'react'
import Nav from './components/nav/Nav'
import SearchBar from './components/search/Search'
import Sidebar from './components/side-bar/Sidebar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import AboutUs from './components/about-us/AboutUs'

function App() {
  const [searchedQuery, setSearchedQuery] = useState("");
  const [count, setCount] = useState(0);
  const color = useContext(ThemeColorContext);

  return (
    <Router>
      <ThemeColorWrapper>
        <div className='app-wrapper'>
          <Nav></Nav>
          <div className='main-container'>
            
              <Routes>
                <Route path='/' element={<><SearchBar setSearchedQuery={setSearchedQuery} />
                  <Main searchedQuery={searchedQuery} /></>}>
                </Route>
                <Route path='/about' element={<AboutUs/>}></Route>
              </Routes>
            
          </div>
          <Sidebar></Sidebar>
        </div>
      </ThemeColorWrapper>
    </Router>
  )
}

export default App
