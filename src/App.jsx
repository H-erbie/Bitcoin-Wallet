import { useState } from 'react'
import './app.scss'
import Header from './components/SiteHeader'
import Navbar from './components/Navbar'
import Overview from './components/Overview'
import Tabs from './components/Tabs'
import Stats from './components/Stats'
import SectionButton from './components/ButtonsSection'

function App() {

  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <main>
      <Overview/>
      <Tabs/>
      <Stats/>
      <SectionButton/>
      </main>
    </div>
  )
}

export default App
