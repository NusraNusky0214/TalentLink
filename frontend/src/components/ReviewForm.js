import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [average, setAverage] = useState(0);

    useEffect(() => {
        const fetchReviews = async () => {
            const userId = localStorage.getItem('userId');
            try {
                const res = await axios.get(`http://localhost:5000/api/reviews/${userId}`);
                setReviews(res.data);
                
                // Calculate Average stars for the UI
                if (res.data.length > 0) {
                    const total = res.data.reduce((acc, curr) => acc + curr.rating, 0);
                    setAverage((total / res.data.length).toFixed(1));
                }
            } catch (err) {
                console.error("Error fetching reviews");
            }
        };
        fetchReviews();
    }, []);

    return (
        <div className="glass-card" style={{ padding: '30px' }}>
            <h2 style={{ color: '#00d2ff' }}>⭐ Reviews & Ratings</h2>
            
            {/* Average Rating Section */}
            <div style={{ textAlign: 'center', background: 'rgba(0,0,0,0.2)', padding: '20px', borderRadius: '15px', margin: '20px 0' }}>
                <h3 style={{ color: '#00d2ff' }}>Average Rating</h3>
                <div style={{ fontSize: '2rem', color: '#db2777' }}>
                    {"★".repeat(Math.round(average)) + "☆".repeat(5 - Math.round(average))}
                </div>
                <p style={{ color: '#db2777', fontWeight: 'bold' }}>{average} / 5 ({reviews.length} reviews)</p>
            </div>

            {/* List of All Reviews */}
            <h3 style={{ color: '#00d2ff' }}>📝 All Reviews</h3>
            {reviews.length === 0 ? (
                <p style={{ textAlign: 'center', opacity: 0.5 }}>No reviews yet</p>
            ) : (
                reviews.map((rev) => (
                    <div key={rev._id} className="glass" style={{ padding: '15px', marginBottom: '10px', borderLeft: '4px solid #db2777' }}>
                        <div style={{ color: '#facc15' }}>{"★".repeat(rev.rating)}</div>
                        <p style={{ margin: '5px 0' }}>"{rev.comment}"</p>
                        <small style={{ opacity: 0.6 }}>— From Client</small>
                    </div>
                ))
            )}
        </div>
    );
};

export default Reviews;