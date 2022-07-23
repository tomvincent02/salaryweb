import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {

  const [listOfPlayers, setListOfPlayers] = useState([]);
  


  useEffect (() => {
    Axios.get("http://localhost:3301/getplayers").then((response) => {
      setListOfPlayers(response.data)
    })
  }, [])

  // const searchPlayer = () => {
  //   Axios.get("http://localhost;3301/getsalary").then((response) => {
  //     setListofSalaries(response.data);
  //   })
  // }

  return (
    <div className="App">
      <div className="playerDisplay">
        {listOfPlayers.map((player) => {
          return (
            <div>
              <h1>Player Full Name: {player.nameGiven}</h1>
            </div>
          )
        })}
      </div>

      <div>
        <input type ="text" placeholder= "Enter Player's Name..."/>
      </div>
    </div>
  );
}

export default App;
