import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReviewList = ({ userId }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            const res = await axios.get(`http://localhost:5000/api/reviews/${userId}`);
            setReviews(res.data);
        };
        fetchReviews();
    }, [userId]);

    return (
        <div style={{ marginTop: '30px' }}>
            <h3>Client Feedback [Function 5]</h3>
            {reviews.length === 0 ? <p>No reviews yet.</p> : reviews.map(r => (
                <div key={r._id} className="glass" style={{ marginBottom: '10px', padding: '15px' }}>
                    <div style={{ color: '#facc15' }}>{"⭐".repeat(r.rating)}</div>
                    <p style={{ margin: '5px 0' }}>"{r.comment}"</p>
                    <small style={{ color: '#aaa' }}>— {r.reviewer?.name || "Anonymous"}</small>
                </div>
            ))}
        </div>
    );
};

export default ReviewList;