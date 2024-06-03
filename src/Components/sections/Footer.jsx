import React from 'react';
import '../../styles/Footer.css'; // Import a CSS file for additional styling
import facbook from '../../assets/fb_icon.png'
import instagram from '../../assets/instagram_icon.png'
import twitter from '../../assets/twitter_icon.png'
import { assets } from '../../assets/asset.js';

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-con">
                <div className='footer-top'>
                    <h2>Bandage</h2>
                    <div className="socials">
                        <img src={assets.twitter_icon} alt="facebook icon" />
                        <img src={assets.instagram_icon} alt="" />
                        <img src={assets.fb_icon} alt="" />
                    </div>
                </div>

                <hr />

                <div className="sections">
                    <div className="footer-section">
                        <h3>Company Info</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Press</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Legal</h3>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Resources</h3>
                        <ul>
                            <li>Help Center</li>
                            <li>Contact Support</li>
                            <li>Accessibility</li>
                            <li>Community</li>
                        </ul>
                    </div>
                    <div className="footer-section get-in-touch">
                        <h3>Get in Touch</h3>
                        <p>Subscribe to our newsletter to stay updated:</p>
                        <form>
                            <input type="email" placeholder="Enter your email" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>

            </div>

        </footer>
    );
};

export default Footer;
