import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    return (
       <div className="footer-section">
    <footer className="footer-bs">
        <div className="row">
        	<div className="col-md-3 footer-brand animated fadeInLeft">
            	<h2>Logo</h2>
                <p>Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam porttitor vitae orci nec ultricies. Curabitur vehicula, libero eget faucibus faucibus, purus erat eleifend enim, porta pellentesque ex mi ut sem.</p>
                <p>© 2014 BS3 UI Kit, All rights reserved</p>
            </div>
        	<div className="col-md-4 footer-nav animated fadeInUp text-center">
            	<h4>Menu —</h4>
            	<div className="col-md-6">
                    <ul className="pages">
                        <li><Link to="#">Travel</Link></li>
                        <li><Link to="#">Nature</Link></li>
                        <li><Link to="#">Explores</Link></li>
                        <li><Link to="#">Science</Link></li>
                        <li><Link to="#">Advice</Link></li>
                    </ul>
                </div>
            	<div className="col-md-6">
                    <ul className="list text-center">
                        <li><Link to="#">About Us</Link></li>
                        <li><Link to="#">Contacts</Link></li>
                        <li><Link to="#">Terms and Condition</Link></li>
                        <li><Link to="#">Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>
        	<div className="col-md-2 footer-social animated fadeInDown">
            	<h4>Follow Us</h4>
            	<ul>
                	<li><Link to="#">Facebook</Link></li>
                	<li><Link to="#">Twitter</Link></li>
                	<li><Link to="#">Instagram</Link></li>
                	<li><Link to="#">RSS</Link></li>
                </ul>
            </div>
        	<div className="col-md-3 footer-ns animated fadeInRight">
            	<h4>Newsletter</h4>
                <p>A rover wearing a fuzzy suit doesn’t alarm the real penguins</p>
                <p>
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search for..."/>
                      <span className="input-group-btn">
                        <button className="btn btn-default" type="button"><span className="glyphicon glyphicon-envelope"></span></button>
                      </span>
                    </div>
                 </p>
            </div>
        </div>
    </footer>
</div>
    );
};

export default Footer;