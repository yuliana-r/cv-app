import Personal from './components/Personal'
import Work from './components/Work'
import Education from './components/Education'
import Footer from './components/Footer'
import Header from './components/Header'
import './styles/index.css'

export default function App() {
  return (
    <>
      < Header />
      <main className='main-content'>
        < Personal />
        < Education />
        < Work />
      </main>
      < Footer />
    </>
  )
}
