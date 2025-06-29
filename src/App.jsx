import './App.css'

function Header(props){
  console.log(props)
  return (
    <header>
      <h1>{props.name} kitchen</h1>
      <h2>Since {props.year}</h2>
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
