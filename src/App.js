
import React, { useState } from 'react';
import './App.css';
import ZipCodeForm from './ZipCodeForm';
import LocationInfo from './LocationInfo';

function App() {
  const [locationData, setLocationData] = useState(null);

  return (
    <div className="App">
      <h1>Zip Code Information App</h1>
      <ZipCodeForm onSubmit={setLocationData} />
      <LocationInfo data={locationData} />
    </div>
  );
}

export default App;
