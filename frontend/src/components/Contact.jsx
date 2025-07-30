import './styles/Contact.css'

export default function Contact() {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <div className="contact-header">
                    <p className="contact-subtitle">
                        Contact
                    </p>
                    <h2 className="contact-title">
                        Get in Touch
                    </h2>
                    <p className="contact-description">
                         to make it ezeepzee better
                    </p>
                </div>
                
                <div className="contact-content">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <p className="contact-info-text">
                              Connect with us to list your PG or find the perfect one—bridging the gap between PG owners and seekers for better coordination and hassle-free stays
                            </p>
                            <ul className="contact-list">
                                <li className="contact-list-item">
                                    <div className="contact-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                                        </svg>
                                    </div>
                                    <div className="contact-details">
                                        <h3>Our Address</h3>
                                        <p>kphb</p>
                                        <p>hyd, telagana</p>
                                    </div>
                                </li>
                                <li className="contact-list-item">
                                    <div className="contact-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                                            <path d="M15 7a2 2 0 0 1 2 2"></path>
                                            <path d="M15 3a6 6 0 0 1 6 6"></path>
                                        </svg>
                                    </div>
                                    <div className="contact-details">
                                        <h3>Contact</h3>
                                        <p>Mobile:998876453</p>
                                        <p>Mail: ezeepzeet@gmail.com</p>
                                    </div>
                                </li>
                                <li className="contact-list-item">
                                    <div className="contact-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                            <path d="M12 7v5l3 3"></path>
                                        </svg>
                                    </div>
                                    <div className="contact-details">
                                        <h3>Working hours</h3>
                                        <p>Monday - Friday: 08:00 - 17:00</p>
                                        <p>Saturday & Sunday: 08:00 - 12:00</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="contact-form-container" id="form">
                            <h2 className="contact-form-title">Ready to Get Started?</h2>
                            <div className="contact-form">
                                <div className="form-group">
                                    <div className="form-row">
                                        <div className="form-field">
                                            <label htmlFor="name" className="form-label"></label>
                                            <input 
                                                type="text" 
                                                id="name" 
                                                autoComplete="given-name" 
                                                placeholder="Your name" 
                                                className="form-input" 
                                                name="name"
                                            />
                                        </div>
                                        <div className="form-field">
                                            <label htmlFor="email" className="form-label"></label>
                                            <input 
                                                type="email" 
                                                id="email" 
                                                autoComplete="email" 
                                                placeholder="Your email address" 
                                                className="form-input" 
                                                name="email"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <label htmlFor="textarea" className="form-label"></label>
                                        <textarea 
                                            id="textarea" 
                                            name="textarea" 
                                            cols="30" 
                                            rows="5" 
                                            placeholder="Write your message..." 
                                            className="form-textarea"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="form-submit">
                                    <button type="submit" className="form-button">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}