
import React from 'react';
import './LocationInfo.css';
function LocationInfo({ data }) {
  if (!data) return null;

  const { country, places } = data;
  const state = places.length > 0 ? places[0].state : 'N/A';

  return (
    <div class="location-info">
     <div class="info-item">
      <h2>Location Information</h2>
      <p>Country: {country}</p>
      <p>State: {state}</p>
      <p>Place Name(s):</p>
      <ul>
        {places.map((place, index) => (
          <li key={index}>
            {place['place name']}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default LocationInfo;
