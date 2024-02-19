import React, { useState } from 'react';

// Use this variable ONLY to initialize a slice of state!
const listOfSquareIds = ['sqA', 'sqB', 'sqC', 'sqD'];

export default function Squares() {
  // Use the state hook twice, as we need two slices of state: 'squares' and
  // 'activeSquare'. One holds the _array_ of square ids, and the other keeps track
  // of the currently active square. On page load, there's no active square,
  // so the value of 'activeSquare' should be null.
  const [squares, setSquares] = useState(listOfSquareIds);
  const [activeSquare, setActiveSquare] = useState(null);

  const getClassName = (id) => {
    // This is NOT a click handler but a helper, used inside the JSX (see below).
    // It should return a string containing the class name of 'active', if the id passed
    // as the argument matches the active square in state, empty string otherwise.
    // Right-click and "inspect element" on the square to see its effect.
    return activeSquare === id ? 'active' : '';
  };

  const markActive = (id) => {
    // This is a helper used inside an _inlined_ click handler (see below).
    // Set the id argument to become the active id in state
    // (unless it already is, in which case we should reset
    // the currently active square id back to the initial state).
    setActiveSquare((prevActiveSquare) =>
      prevActiveSquare === id ? null : id
    );
  };

  return (
    <div className='widget-squares container'>
      <h2>Squares</h2>
      <div className='squares'>
        {squares.map((id) => (
          <div
            id={id}
            key={id}
            className={`square ${getClassName(id)}`}
            onClick={() => markActive(id)}
          ></div>
        ))}
      </div>
    </div>
  );
}