import './App.css'

function Header({name, year}){
  return (
    <header>
      <h1>{name} kitchen</h1>
      <h2>Since {year}</h2>
    </header>
  );
}

const item = [
  "Maconi and Cheese",
  "Salmon with Potatoes",
  "Tofu with Vegetables"
]

function Main({dishes}){
  return (
    <ul>
      {dishes.map((dish,i) => (
       //  <li style={{ listStyleType: "none"}}>{dish}</li>  in this method we got key warning in the browser consol
       <li key= {i} style={{ listStyleType: "none"}}>{dish}</li> 
      ))} 
    </ul>
  )
}


function App() {
  return( 
      <div>
          <Header name = "Alex" year = {new Date().getFullYear()}/>
          <Main dishes = {item}/>
      </div>
  ); 
}

export default App
