import Personal from './components/Personal'
import Work from './components/Work'
import Preview from './components/Preview'
import Education from './components/Education'
import Footer from './components/Footer'
import Header from './components/Header'
import './App.css'

export default function App() {
  return (
    <>
      < Header />
      <div className='main-content'>
        <div className='left-side'>
          < Personal />
          < Education />
          < Work />
        </div>
        <div className='right-side'>
          < Preview />
        </div>
      </div>
      < Footer />
    </>
  )
}
