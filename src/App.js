import './App.css';
import people from "./people.json";
import {useState} from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");


  return (
    <div className="App">
        <h1>MLB Player's Salaries</h1>
        <input type ='text' 
        placeholder = "Search Player Name" 
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}/>
        {people.filter((val)=> {
          if (searchTerm === "") {
            return val
          } else if (val.nameGiven.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }

        }).map((val,key)=> {
          return (
            <div className ="user" key={key}> 
            <p>{val.nameGiven}</p>
            </div>
          );
        })}

    </div>
  );
}



export default App;
