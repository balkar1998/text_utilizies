import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
    <Navbar title={'TextUtilis'} />
    <div className='container my-3'>
      <TextForm header={'enter text below to menuplate'} />
    </div>
    </>
  );
}

export default App;
