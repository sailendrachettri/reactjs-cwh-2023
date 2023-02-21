import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <Navbar title="Tanalyzer" /> {/*  here about props will set fron defaultProps*/}
      <TextForm />
    </>
  );
}
export default App;
