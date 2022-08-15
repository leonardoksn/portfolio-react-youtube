import { About } from './components/About'
import { Contacts } from './components/Contacts'
import { Experiense } from './components/Experiense'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Nav } from './components/Nav'
import { Portfolio } from './components/Portfolio'
import { Services } from './components/Services'
import { Testmonials } from './components/Testmonials'

function App() {


  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experiense />
      <Services />
      <Portfolio />
      <Testmonials />
      <Contacts />
      <Footer />
    </>
  )
}

export default App