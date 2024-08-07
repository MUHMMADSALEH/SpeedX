import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PerformanceDisplay from './PerformanceDisplay';

function App() {
  const [url, setUrl] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`http://localhost:3001/api/analyze?url=${url}`);
      setData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
console.log(data)
return (
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw", marginBottom:"50px"}}>
    <div >
      <form onSubmit={handleSubmit} style={{display:"flex", justifyContent:"space-evenly", width:"50%",gap:"10px"}}>
      <div>
      <input style={{   
        
    borderRadius:"8px",
    border: "1px solid transparent",
    padding: "0.6em 1.2em",
    fontSize: "1em",
    fontWeight: "500",
    fontFamily: "inherit",
    backgroundColor: "#1a1a1a",
    cursor: "pointer",
    transition: "border-color 0.25s"
}} type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      </div>
     <div>
     <button type="submit">Analyze</button>
     </div>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <PerformanceDisplay data={data} />}
    </div>
  </div>
);

}

export default App;

