import React from "react";
import ReactDOM from 'react-dom';
import "./index.css";

function Chessboard() {
  // Initial board setup with Unicode chess pieces
  const board = [
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
  ];

  return (
    <div className="chessboard">
      {board.map((row, rowIndex) =>
        row.map((piece, colIndex) => {
          const isBlack = (rowIndex + colIndex) % 2 == 1;
          return (
            <div key={`${rowIndex}-${colIndex}`} className={`square ${isBlack ? "black" : "white"}`}>
              {piece && <span className="piece">{piece}</span>}
            </div>
          );
        })
      )}
    </div>
  );
}

ReactDOM.render(<Chessboard/>,document.getElementById("root"))
