import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <>
    <Router>
    <Navbar title={'TextUtilis'} />
    <div className='container my-3'>
      <Routes>
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/' element={<TextForm header={'enter text below to menuplate'} />} />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
