import './App.css';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About us" />
      {/* <Navbar />   - if i set navbar without props then it will take default props from the component file i.e Navbar.js*/}
    </>
  );
}
export default App;
