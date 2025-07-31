import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/styles/Pggrid.css';

const PGList = () => {
  const { cityName } = useParams();
  const [pgData, setPgData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPg = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/pgs/${cityName}`);
        setPgData(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching PGs:", err);
        setError('Failed to load PGs. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchPg();
  }, [cityName]);

  return (
    <div>
      <div className="pg-header">
        <h1 className="pg-main-title">PGs in {cityName}</h1>
        <h2 className="pg-subtitle">Explore accommodations in {cityName}</h2>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '4px solid #ccc',
            borderTop: '4px solid #007bff',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: 'auto'
          }} />
          <p>Loading...</p>
        </div>
      ) : error ? (
        <p className="pg-no-results">{error}</p>
      ) : pgData.length > 0 ? (
        <section className="pg-grid-section">
          {pgData.map((pg, index) => (
            <div key={index} className="pg-card">
              <a href="#" className="pg-card-link">
                <img src={pg.image} alt={pg.name} className="pg-card-image" />
                <div className="pg-card-content">
                  <span className="pg-card-city">{pg.city}</span>
                  <p className="pg-card-name">{pg.name}</p>
                  <p className="pg-card-phone">Ph: {pg.phone}</p>
                </div>
              </a>
            </div>
          ))}
        </section>
      ) : (
        <p className="pg-no-results">No PGs found in {cityName}.</p>
      )}

      {/* Spinner Keyframes */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default PGList;
