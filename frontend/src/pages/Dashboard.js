import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddReview from '../components/AddReview'; // Import the component you created

const Dashboard = () => {
  const [skills, setSkills] = useState("");
  const [results, setResults] = useState([]);
  const [recommendedProjects, setRecommendedProjects] = useState([]);
  const [selectedFreelancer, setSelectedFreelancer] = useState(null);

  // Function 3: Skill-Based Search
  const handleSearch = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/matching/match', { 
        requiredSkills: skills.split(",").map(s => s.trim()) 
      });
      setResults(res.data);
    } catch (err) { alert("Check if Backend is running!"); }
  };

  // Fetch projects on load
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/projects');
        setRecommendedProjects(res.data);
      } catch (err) { console.error("Error fetching projects"); }
    };
    fetchProjects();
  }, []);

  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#00d2ff', textAlign: 'center' }}>TalentLink Command Center</h1>
      
      {/* Search Section */}
      <div className="glass-card" style={{ display: 'flex', gap: '20px', marginBottom: '30px', padding: '20px' }}>
        <input 
          style={inputStyle} 
          placeholder="Search Skills (e.g. React, Node.js)" 
          onChange={(e) => setSkills(e.target.value)} 
        />
        <button className="btn-neon" onClick={handleSearch}>Find Talent</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '20px' }}>
        
        {/* Recommended Projects & Review Trigger */}
        <div>
          <h2 style={{ color: '#fff' }}>🚀 Recommended Projects</h2>
          {recommendedProjects.map((project) => (
            <div key={project._id} className="glass-card" style={{ marginBottom: '15px' }}>
              <h3>{project.title}</h3>
              <p style={{ color: '#bbb' }}>{project.description}</p>
              
              {/* Function 5: Complete & Review Button */}
              <button 
                className="btn-neon" 
                onClick={() => setSelectedFreelancer(selectedFreelancer === project.freelancerId ? null : project.freelancerId)} 
                style={{ marginTop: '10px', background: '#9333ea' }}
              >
                {selectedFreelancer === project.freelancerId ? "Close Form" : "Complete & Review"}
              </button>
              
              {/* Show AddReview Form only for selected project */}
              {selectedFreelancer === project.freelancerId && (
                 <div style={{ marginTop: '15px' }}>
                   <AddReview freelancerId={project.freelancerId} />
                 </div>
              )}
            </div>
          ))}
        </div>

        {/* Top Rated Talent Sidebar */}
        <div className="glass-card">
          <h2 style={{ color: '#fff' }}>⭐ Highly Rated Talent</h2>
          {results.length > 0 ? results.map(u => (
            <div key={u._id} style={itemStyle}>
              <strong>{u.name}</strong>
              <p style={{ fontSize: '12px', margin: 0, color: '#00d2ff' }}>{u.skills.join(", ")}</p>
            </div>
          )) : <p style={{ color: '#aaa' }}>Search to see matched freelancers.</p>}
        </div>
      </div>
    </div>
  );
};

// CSS-in-JS (Keep these or use your App.css glass classes)
const containerStyle = { padding: '40px', maxWidth: '1200px', margin: '0 auto' };
const inputStyle = { flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #3a7bd5', background: 'rgba(255,255,255,0.1)', color: 'white' };
const itemStyle = { padding: '15px', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '10px', color: '#fff' };

export default Dashboard;