import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Col, Row, Card, CardBody, Container } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Icon from "./components/Icon";

const arrayItems = new Array(9).fill("empty"); //Creating an array of 9 elements which are all empty initially

const App = () => {

  const [isCross, setIsCross] = useState(false);// This useState is for changing the state when we enter a cross or a circle in the game
  const [winMessage, setWinMessage] = useState(""); //This is for displaying the win message when a player wins

  //function to reload the game
  const gameReload = () => {

    //When our game reloads all of these values will be set as they were intially before we started playing so we set the useStates as they were before the game started 
    setIsCross(false);
    setWinMessage("");
    arrayItems.fill("empty", 0, 9);

  }
  
  //Function to check the winner
  const checkIsWinner = () => {
    //checking for rows
    if (arrayItems[0] === arrayItems[1] && arrayItems[0] === arrayItems[2] && arrayItems[0] !== "empty") {
      setWinMessage(`${arrayItems[0]} wins!!`);
    }
    else if (arrayItems[3] === arrayItems[4] && arrayItems[3] === arrayItems[5] && arrayItems[3] !== "empty") {
      setWinMessage(`${arrayItems[3]} wins!!`);
    }
    else if (arrayItems[6] === arrayItems[7] && arrayItems[6] === arrayItems[8] && arrayItems[6] !== "empty") {
      setWinMessage(`${arrayItems[6]} wins!!`);
    }

    //checking for columns
    if (arrayItems[0] === arrayItems[3] && arrayItems[0] === arrayItems[6] && arrayItems[0] !== "empty") {
      setWinMessage(`${arrayItems[0]} wins!!`);
    }
    else if (arrayItems[1] === arrayItems[4] && arrayItems[1] === arrayItems[7] && arrayItems[1] !== "empty") {
      setWinMessage(`${arrayItems[1]} wins!!`);
    }
    else if (arrayItems[2] === arrayItems[5] && arrayItems[2] === arrayItems[8] && arrayItems[2] !== "empty") {
      setWinMessage(`${arrayItems[2]} wins!!`);
    }

    //Checking for diagonals
    if (arrayItems[0] === arrayItems[4] && arrayItems[0] === arrayItems[8] && arrayItems[0] !== "empty") {
      setWinMessage(`${arrayItems[0]} wins!!`);
    }
    else if (arrayItems[2] === arrayItems[4] && arrayItems[2] === arrayItems[6] && arrayItems[2] !== "empty") {
      setWinMessage(`${arrayItems[2]} wins!!`);
    }
    
  }

  //Function to changeitem in the game like cross or circle
  const changeItem = (itemNumber) => {

    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }

    if (arrayItems[itemNumber] === "empty") {
      arrayItems[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("Already filled", { type: "error" });
    }

    checkIsWinner();

  }

  return (
    <Container className='p-5'>
      <ToastContainer position='bottom-center' />
      <Row>
        <Col md={6} className='offset-md-3'>
          {(winMessage) ? (
            <div className='mb-2 mt-2'>
              <h1 className='text-primary text-uppercase text-center'>
                {winMessage}
              </h1>
              <Button color='success' block onClick={gameReload} >Play Again!</Button>
            </div>
          ):(
            <h1 className='text-center text-warning'>
              {isCross ? "cross":"circle"} 's turn
            </h1>
          )}
          <div className='grid'>
            {arrayItems.map((item, index) => (
              <Card color='success' onClick={() => { changeItem(index) }}> {/*we use this syntax to point at the changeItem method because it takes parameters an we need to use this syntax so that the function doesnt fire right of the bat */}
                <CardBody className='box'>
                  <Icon name={item} /> {/*Passing every single item in the array as a prop to the Icon component */}
                </CardBody>
              </Card>
            ))};
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
