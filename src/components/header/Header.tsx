import React from 'react';

const Header = () => {
    return (
        <header className="header" >
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__block">
                        <a href="#" className="header__logo">
                            <img src="img/logo 1.png" alt=""/>
                        </a>
                    </div>
                    {/*header__block*/}
                    <nav className="nav">
                        <a href="#" className="nav__link active">Main</a>
                        <a href="#" className="nav__link">Our service</a>
                        <a href="#" className="nav__link">About</a>
                        <a href="#" className="nav__link">Contacts</a>
                    </nav>
                    <div className="header__block">
                        <div className="header__lng">
                            <a href="#" className="header__lng-link">Ru</a>
                            <a href="#" className="header__lng-link active">En</a>
                        </div>
                    </div>
                </div>
                {/*header__wrapper*/}
            </div>
            {/*container*/}
        </header>
    );
};

export default Header;