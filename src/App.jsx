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

const dishObj = item.map((dish, i) => ({
  id: i,
  title: dish 
}))

console.log(dishObj)

function Main({dishes}){
  return (
    <ul>
      {dishes.map((dish) => ( 
       //  <li style={{ listStyleType: "none"}}>{dish}</li>  in this method we got key warning in the browser consol
       <li key= {dish.id} style={{ listStyleType: "none"}}>{dish.title}</li>  // correct way to remove key error
      ))} 
    </ul>
  )
}


function App() {
  return( 
      <div>
          <Header name = "Alex" year = {new Date().getFullYear()}/>
          <Main dishes = {dishObj}/>
      </div>
  ); 
}

export default App
