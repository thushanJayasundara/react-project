import './App.css'

function Header({name, year}){
  return (
    <header>
      <h1>{name} kitchen</h1>
      <h2>Since {year}</h2>
    </header>
  );
}

function App() {
  return( 
      <div>
          <Header name = "Alex" year = {new Date().getFullYear()}/>
          <main>
            <h2> we serve the most delicious food</h2>
          </main>
      </div>
  ); 
}

export default App
