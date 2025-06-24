import './App.css'

function Header(){
  return (
    <header>
      <h1>Eve's kitchen</h1>
    </header>
  );
}

function App() {
  return( 
      <div>
          <Header/>
          <main>
            <h2> we serve the most delicious food</h2>
          </main>
      </div>
  ); 
}

export default App
