import React, { useState, useEffect } from 'react';
import '../stylesheets/components/console.scss'; // Adjust the import path as needed

const Console = () => {
  // State to keep track of location name and number
  const [locationInfo, setLocationInfo] = useState({
    name: 'Forest Entrance',
    number: 13
  });

  // Placeholder function to update location information
  // This would likely be triggered by game events, such as player movement
  const updateLocationInfo = (newName, newNumber) => {
    setLocationInfo({ name: newName, number: newNumber });
  };

  // Example useEffect to demonstrate updating location info
  // In a real game, you'd trigger updates based on player actions or game events
  useEffect(() => {
    // Simulate updating location info after a delay
    const timer = setTimeout(() => {
      updateLocationInfo('Deep Forest', 14);
    }, 5000); // Update after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="console-container">
      <p>Location: {locationInfo.name} (#{locationInfo.number})</p>
      {/* More console content here */}
    </div>
  );
};

export default Console;
