import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Moviees from './components/containers/Moviees'
import AddMovie from './components/AddMovie'
import Test from './components/containers/Test'

const App = () => {
  return (
    <div>
      <Header/>
      <Moviees/>
      <AddMovie/>
      <Footer/>
      <Test></Test>
    </div>
  )
}

export default App