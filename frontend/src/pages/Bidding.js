import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Bidding = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects').then(res => setProjects(res.data));
  }, []);

  return (
    <div className="bidding-container">
      <h2>Project Marketplace</h2>
      {projects.map(p => (
        <div key={p._id} className="project-item">
          <h3>{p.title}</h3>
          <button>Place a Bid</button>
        </div>
      ))}
    </div>
  );
};

export default Bidding; // <--- Critical Export