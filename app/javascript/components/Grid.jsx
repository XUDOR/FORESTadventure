import React, { useState } from 'react';
import '../stylesheets/components/grid.scss'; // Adjust the import path as needed

const Grid = () => {
  // Assuming a 5x5 grid, starting position is [2, 2] (0-indexed, so it's the middle)
  const [currentPosition, setCurrentPosition] = useState({ x: 2, y: 2 });

  // Placeholder function for moving the player
  // This would be replaced with actual logic based on user input or game events
  const movePlayer = (newX, newY) => {
    setCurrentPosition({ x: newX, y: newY });
  };

  // Generate the grid
  const grid = [];
  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 5; x++) {
      const isActive = x === currentPosition.x && y === currentPosition.y;
      grid.push(
        <div
          key={`${x}-${y}`}
          className={`grid-cell ${isActive ? 'active' : ''}`}
          // Optional: onClick to move the player to the clicked cell
          onClick={() => movePlayer(x, y)}
        ></div>
      );
    }
  }

  return (
    <div className="grid-container">
      {grid}
    </div>
  );
};

export default Grid;
