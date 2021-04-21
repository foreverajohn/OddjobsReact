import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">    
                    <div className="col text-center">
                        <h3>Social</h3>
                        <Link className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram"></i></Link>
                        <Link className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className="fa fa-facebook"></i></Link>
                        <Link className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></Link>
                        <Link className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;