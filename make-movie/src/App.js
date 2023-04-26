import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Moviees from './components/containers/Moviees'
import AddMovie from './components/AddMovie'

const App = () => {
  return (
    <div>
      <Header/>
      <Moviees/>
      <AddMovie/>
      <Footer/>
    </div>
  )
}

export default App