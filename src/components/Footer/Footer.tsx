import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <p className="copyright">
                        © 2021 Auto theme by Frontend Tricks
                    </p>
                    <div className="footer__soc">
                        <a href="#" target="_blank" className="footer__soc-link">
                            <img src="img/V(1).svg" alt="" />
                        </a>
                        <a href="#" target="_blank"className="footer__soc-link">
                            <img src="img/V(2).svg" alt="" />
                        </a>
                        <a href="#" target="_blank" className="footer__soc-link">
                            <img src="img/V(3).svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;