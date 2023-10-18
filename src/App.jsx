import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import About from './components/About'
import Contacts from './components/Contacts'
import Home from './components/Home'
import Navbar from './components/Navbar'
function App() {


  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contacts" element={<Contacts/>}/>
        </Routes>


    </Router>

    </>
  )
}

export default App
