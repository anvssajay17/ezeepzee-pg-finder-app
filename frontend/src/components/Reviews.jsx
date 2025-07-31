import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './styles/ReviewsPage.css';

const ReviewsPage = () => {
  const { pgName } = useParams();
  const [newReview, setNewReview] = useState('');
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseURL = 'http://localhost:8000'; 

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(`${baseURL}/reviews/${pgName}`);
        const data = await res.json();
        setReviews(data);
      } catch (err) {
        console.error('Error fetching reviews:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [pgName]);

  const handlePostReview = async () => {
    if (newReview.trim() === '') return;

    try {
      const res = await fetch(`${baseURL}/reviews/${pgName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment: newReview }),
      });

      if (res.ok) {
        setReviews((prev) => [...prev, { comment: newReview }]);
        setNewReview('');
      } else {
        console.error('Failed to post review');
      }
    } catch (err) {
      console.error('Error posting review:', err);
    }
  };

  return (
    <>
      <div className="review-container">
        <h2 className="review-heading"> Review for <span>{pgName}</span></h2>

        <div className="review-form">
          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Write your honest opinion..."
            rows={4}
            className="review-textarea"
          />
          <button className="review-button" onClick={handlePostReview}>
            Submit Review
          </button>
        </div>
      </div>

      <div className="review-display-box">
        {loading ? (
          <p className="loading">Loading reviews...</p>
        ) : reviews.length === 0 ? (
          <p className="no-reviews">No reviews yet. Be the first to write one!</p>
        ) : (
          <>
            <h3 className="review-list-heading"> All Reviews</h3>
            <ul className="review-list">
              {reviews.map((r, idx) => (
                <li key={idx} className="review-item animate">{r.comment}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default ReviewsPage;
