// src/components/AddReview.js
import React, { useState } from 'react';
import axios from 'axios';

const AddReview = ({ freelancerId }) => {
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const clientId = localStorage.getItem('userId');
        
        try {
            await axios.post('http://localhost:5000/api/reviews/add', {
                reviewerId: clientId,
                revieweeId: freelancerId,
                rating,
                comment
            });
            alert("Review submitted successfully!");
            window.location.reload(); 
        } catch (err) {
            alert("Failed to add review.");
        }
    };

    return (
        <div style={{ marginTop: '15px', padding: '15px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <h4 style={{ color: '#00d2ff', marginBottom: '10px' }}>Rate this Project</h4>
            <form onSubmit={handleSubmit}>
                <select 
                    value={rating} 
                    onChange={(e) => setRating(e.target.value)}
                    style={{ background: '#1a1a2e', color: 'white', width: '100%', padding: '8px', borderRadius: '5px' }}
                >
                    <option value="5">5 Stars ⭐⭐⭐⭐⭐</option>
                    <option value="4">4 Stars ⭐⭐⭐⭐</option>
                    <option value="3">3 Stars ⭐⭐⭐</option>
                    <option value="2">2 Stars ⭐⭐</option>
                    <option value="1">1 Star ⭐</option>
                </select>

                <textarea 
                    placeholder="Feedback-ai inge type seiyungal..."
                    onChange={(e) => setComment(e.target.value)}
                    required
                    style={{ background: 'rgba(255,255,255,0.05)', color: 'white', width: '100%', marginTop: '10px', padding: '10px', borderRadius: '5px' }}
                />

                <button type="submit" className="btn-neon" style={{ marginTop: '10px', width: '100%' }}>
                    Submit Review
                </button>
            </form>
        </div>
    );
};

export default AddReview;