import { useEffect, useState } from "react";
import Board from "./components/board";
import "./App.css";

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [playerWin, setPlayerWin] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [playerOne, setPlayerOne] = useState("");

  useEffect(() => {
    validate();
    // eslint-disable-next-line
  }, [cells]);

  const validate = () => {
    validatePosition(0, 1, 2);
    validatePosition(3, 4, 5);
    validatePosition(6, 7, 8);
    validatePosition(0, 3, 6);
    validatePosition(1, 4, 7);
    validatePosition(2, 5, 8);
    validatePosition(0, 4, 8);
    validatePosition(2, 4, 6);
  };

  const validatePosition = (one, two, three) => {
    if (
      cells[one] !== "" &&
      cells[one] === cells[two] &&
      cells[one] === cells[three]
    ) {
      if (cells[one] === "X") setPlayerWin(true);
      setGameOver(true);
    }
  };

  const handleCelClick = (item) => {
    let newCells = [...cells];
    let numberRandom = 0;
    let cellsEmpty = [];
    let assign = false;

    if (newCells[item] === "") {
      newCells[item] = "X";

      newCells.forEach((cell, index) => {
        if (cell === "") cellsEmpty.push(index);
      });

      if (cellsEmpty.length > 0) {
        while (!assign) {
          numberRandom = randomNumber(9);

          if (cellsEmpty.includes(numberRandom)) {
            newCells[numberRandom] = "O";
            assign = true;
          }
        }
      }
      setCells(newCells);
    }
  };

  const restartGame = () => {
    let newCells = ["", "", "", "", "", "", "", "", ""];

    if (randomNumber(2) === 1) {
      let numberRandom = randomNumber(9);

      newCells[numberRandom] = "O";
    }

    setCells(newCells);
    setPlayerWin(false);
    setGameOver(false);
  };

  const randomNumber = (max) => {
    return Math.floor(Math.random() * max);
  };

  return (
    <div className="App">
      <header className="App-header">
        {!startGame ? (
          <>
            Name player
            <div>
              <input onChange={(event) => setPlayerOne(event.target.value)} />
              <button className="btn" onClick={() => setStartGame(true)}>
                Enter
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="center">
              {gameOver
                ? playerWin
                  ? "Player " + playerOne + " Win!"
                  : "Computer Win!"
                : "Player " + playerOne}
            </div>
            <Board cells={cells} handleCelClick={handleCelClick} />
            <div className="center">
              <button className="btn" onClick={restartGame}>
                Restart Game
              </button>
            </div>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
