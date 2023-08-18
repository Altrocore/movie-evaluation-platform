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
import FilmContext from './FilmContext';
import { PaginationProvider } from './PaginationContext';

function App() {
  const color = useContext(ThemeColorContext);
  const {isLoading, chosenFilm} = useContext(FilmContext);

  return (
    <Router>
      <PaginationProvider>
        <ThemeColorWrapper>
          <div className='app-wrapper'>
            <Nav></Nav>
            <div className='main-container'>
                { isLoading ? (<div className='loading'>Loading...</div>) :
                (<Routes>
                  <Route path='/' element={
                  <> {chosenFilm ? <Main/> :
                    <><SearchBar/>
                    <Main/></>}
                    </>}>
                  </Route>
                  <Route path='/about' element={<AboutUs/>}></Route>
                </Routes>)}
              
            </div>
            <Sidebar></Sidebar>
          </div>
        </ThemeColorWrapper>
      </PaginationProvider>
    </Router>
  )
}

export default App
