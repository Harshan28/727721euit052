import React, { useState } from 'react';

function App() {
  // Define state variables for user input and API response
  const [numberId, setNumberId] = useState('');
  const [windowSize, setWindowSize] = useState(0);
  const [response, setResponse] = useState(null);

  // Function to handle user input changes for number ID
  const handleNumberIdChange = (event) => {
    setNumberId(event.target.value);
  };

  // Function to handle user input changes for window size
  const handleWindowSizeChange = (event) => {
    setWindowSize(parseInt(event.target.value));
  };

  // Function to simulate API call (replace with actual API call later)
  const handleSubmit = async () => {
    const response = {
      windowPrevState: [1, 2, 3, 4, 5],
      windowCurrState: [6, 7, 8, 9, 10],
      avg: 7.5,
    };
    setResponse(response);
  };

  // Render the application UI
  return (
    <div className="App">
      <h1>Average Calculator</h1>
      <input
        type="text"
        placeholder="Number ID (e.g., p, f, e, r)"
        value={numberId}
        onChange={handleNumberIdChange}
      />
      <input
        type="number"
        placeholder="Window Size"
        value={windowSize}
        onChange={handleWindowSizeChange}
      />
      <button onClick={handleSubmit}>Calculate Average</button>
      {response && (
        <div>
          <p>Previous Window: {response.windowPrevState.join(', ')}</p>
          <p>Current Window: {response.windowCurrState.join(', ')}</p>
          <p>Average: {response.avg}</p>
        </div>
      )}
    </div>
  );
}

export default App;
