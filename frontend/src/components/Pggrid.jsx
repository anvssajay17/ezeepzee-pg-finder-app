// import pgdata from'../data/pgdata'
// import './styles/Pggrid.css'

// export default function PgShow() {
//     return (
//         <div>
//             {/* Header */}
//             <div className="pg-header">
//                 <h1 className="pg-main-title">PG Accommodations Grid</h1>
//                 <h2 className="pg-subtitle">Find Your Perfect Stay</h2>
//             </div>

//             {/* Grid Section */}
//             <section className="pg-grid-section">
//                 {pgdata.map((pg, index) => (
//                     <div key={index} className="pg-card">
//                         <a href="#" className="pg-card-link">
//                             <img 
//                                 src={pg.image} 
//                                 alt={pg.name} 
//                                 className="pg-card-image" 
//                             />
//                             <div className="pg-card-content">
//                                 <span className="pg-card-city">{pg.city}</span>
//                                 <p className="pg-card-name">{pg.name}</p>
//                                 <div className="pg-card-details">
//                                     <p className="pg-card-phone">{pg.phone}</p>
//                                 <div>
                                        
//                                     </div>
//                                 </div>
//                             </div>
//                         </a>
//                     </div>
//                 ))}
//             </section>

//             {/* Credit */}
//             <div className="pg-credit">
//                 <h2 className="pg-credit-text">
//                     Find Your Perfect PG Accommodation Today!
//                 </h2>
//             </div>
//         </div>
//     );
// }