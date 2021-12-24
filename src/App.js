import { useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Button, Col, Row, Card, CardBody, Container} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Icon from "./components/Icon";

const arrayItems = new Array[9].fill("empty"); //Creating an array of 9 elements which are all empty initially

const App = () => {

  const [isCross, setIsCross] = useState(false);// This useState is for changing the state when we enter a cross or a circle in the game
  const [winMessage, setWinMessage] = useState(""); //This is for displaying the win message when a player wins

  //function to reload the game
  const gameReload = () => {
    //
  }

  //Function to changeitem in the game like cross or circle
  const changeItem = () => {
    //
  }
 
  //Function to check the winner
  const checkIsWinner = () => {
    //
  }


  return (
    <div className="App">
      <header className="App-header">
        
        <Icon />
      </header>
    </div>
  );
}

export default App;
