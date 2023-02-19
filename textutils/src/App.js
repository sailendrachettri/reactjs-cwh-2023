import './App.css';

let head = "This is lorem TEXT";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
        </ul>
      </nav>

      <div className="container">
        <h2 id="heading">{head}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero id consectetur quasi cum, sit repudiandae ea doloribus maxime? Quidem, inventore!</p>
      </div>
    </>
  );
}

export default App;
