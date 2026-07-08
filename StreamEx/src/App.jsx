import './App.css'
import { Outlet } from 'react-router-dom'
import Topbar from './components/Topbar/Topbar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Topbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
