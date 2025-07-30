// src/components/CityPGGrid.jsx
import { useParams } from 'react-router-dom';
import pgdata from '../data/pgdata'
import '../components/styles/Pggrid.css';

const PGList = () => {
  const { cityName } = useParams();

  const filteredPGs = pgdata.filter(
    pg => pg.city.toLowerCase() === cityName.toLowerCase()
  );

  return (
    <div>
      <div className="pg-header">
        <h1 className="pg-main-title">PGs in {cityName}</h1>
        <h2 className="pg-subtitle">Explore accommodations in {cityName}</h2>
      </div>

      <section className="pg-grid-section">
        {filteredPGs.length > 0 ? (
          filteredPGs.map((pg, index) => (
            <div key={index} className="pg-card">
              <a href="#" className="pg-card-link">
                <img src={pg.image} alt={pg.name} className="pg-card-image" />
                <div className="pg-card-content">
                  <span className="pg-card-city">{pg.city}</span>
                  <p className="pg-card-name">{pg.name}</p>
                  <p className="pg-card-phone">ph:{pg.phone}</p>
                </div>
              </a>
            </div>
          ))
        ) : (
          <p className="pg-no-results">No PGs found in {cityName}.</p>
        )}
      </section>
    </div>
  );
};

export default PGList;
