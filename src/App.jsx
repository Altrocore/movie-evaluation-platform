import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeColorContext, {ThemeColorWrapper} from './ThemeContext'
import ThemeToggler from './components/theme-toggler/ThemeToggler';
import Main from './components/main/Main';
import { useContext } from 'react'
import Nav from './components/nav/Nav'
import SearchBar from './components/search/Search'
import Sidebar from './components/side-bar/Sidebar'

function App() {
  const [count, setCount] = useState(0);
  const color = useContext(ThemeColorContext);

  return (
    <ThemeColorWrapper>
      <div className='app-wrapper'>
        <Nav></Nav>
        <div className='main-container'>
          <SearchBar></SearchBar>
          <Main></Main>
        </div>
        <Sidebar></Sidebar>
      </div>
    </ThemeColorWrapper>
  )
}

export default App
