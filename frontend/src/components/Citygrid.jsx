
import './styles/Citygrid.css'; 
import {Link}  from 'react-router-dom'

const cities = [
  { name: 'Hyderabad', img: '/images/hydd.jpeg' },
  { name: 'Mumbai', img: '/images/mumbai.jpeg' },
  { name: 'Ahmedabad', img: '/images/ahe.jpeg' },
  { name: 'Chennai', img: '/images/chennai.jpeg' }
];

const Citygrid = () => {
  return (
    <div className="citygrid">
      <h1 className='city'>Top Cities for PG & Rentals</h1>
      <ul className="cards">
        {cities.map((city, index) => (
          <li className="cards_item" key={index}>
            <div className="card">
              <div className="card_image">
                <img src={city.img} alt={city.name} />
              </div>
              <div className="card_content">
                <h2 className="card_title">{city.name}</h2>
                <p className="card_text">
                  Find top PGs, rentals, Hostels and places to stay in {city.name}.
                </p>
                <Link to ={`/pgs/${city.name.toLowerCase()}`} className="btn card_btn">
                Search Pg
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default Citygrid;
