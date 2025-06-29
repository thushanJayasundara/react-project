import './App.css'

function Header({name, year}){
  return (
    <header>
      <h1>{name} kitchen</h1>
      <h2>Since {year}</h2>
    </header>
  );
}

function Main(){
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}


function App() {
  return( 
      <div>
          <Header name = "Alex" year = {new Date().getFullYear()}/>
          <Main />
      </div>
  ); 
}

export default App
