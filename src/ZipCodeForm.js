
import React, { useState } from 'react';
import './LocationInfo.css';
function ZipCodeForm({ onSubmit }) {
  const [postalCode, setPostalCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://api.zippopotam.us/in/${postalCode}`);
      if (response.status === 404) {
        setError('Postal code not found');
      } else {
        const data = await response.json();
        onSubmit(data);
      }
    } catch (error) {
      setError('Error fetching location information');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          class="postal-code-input"
          type="text"
          placeholder="Enter Postal Code"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
        <button type="submit">Fetch Location</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default ZipCodeForm;
