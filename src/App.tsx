
import './App.css';


function App() {
  return (
      <div className="App">
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
        <section className="intro" style={{backgroundImage:`url('img/road.jpg')`}} >

          <div className="container">
            <div className="intro__content">
              <div className="intro__block">
                <h1 className="intro__title">
                  KEEPING YOU ON THE ROAD WITH
                  SERVICE YOU CAN TRUST
                </h1>

                <a href="#" className="btn">Show more</a>
              </div>
            </div>
          </div>
        </section>
        {/*intro*/}
        <section className="info">
          <div className="container">
            <div className="wrapper">
              <div className="block">
                <div className="info__item">
                  <div className="info__img">
                    <img src="img/Vector.svg" alt=""/>
                  </div>
                  <h4 className="info__title">
                    CALL US NOW 222-222-222
                  </h4>
                  <p className="info__text">
                    Fell free to call us
                  </p>
                </div>
              </div>
              {/* info__block*/}
              <div className="block">
                <div className="info__item">
                  <div className="info__img">
                    <img src="img/Vector1.svg" alt=""/>
                  </div>
                  <h4 className="info__title">
                    GET FREE APPOITMET
                  </h4>
                  <p className="info__text">
                    Free Diagnosis & Brake Checks
                  </p>
                </div>
              </div>
              {/* info__block*/}
              <div className="block">
                <div className="info__item">
                  <div className="info__img">
                    <img src="img/Vector2.svg" alt=""/>
                  </div>
                  <h4 className="info__title">
                    FIND US ON MAP
                  </h4>
                  <p className="info__text">
                    New York, 1286 Ruumu Nanor
                  </p>
                </div>
              </div>
              {/* info__block*/}
            </div>
            {/*info__wrapper*/}
          </div>
          {/*container*/}
        </section>
        {/*info*/}
        <section className="section">
          <div className="container">
            <h2 className="block__title">
              OUR SERVICE
            </h2>
            <a href="#" className="block__link">
              VIEW ALL SERVICE
            </a>
            <div className="wrapper">
              <div className="block">
                <a href="#" className="services__item">
                  <div className="services__content" style={{backgroundImage:`url(img/iStoc.png)`}}>
                    <div className="services__content-item">
                      <div className="services__img">
                        <img src='img/plus.png' alt=""/>
                      </div>
                      <p className="services__text">
                        ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD HEALTH
                      </p>
                    </div>
                  </div>
                  <h3 className="services__title">
                    DIAGNOSTIC
                  </h3>
                </a>
              </div>
              {/*/block*/}
              <div className="block">
                <a href="#" className="services__item">
                  <div className="services__content" style={{backgroundImage:`url(img/iStock1.jpg)`}}>
                    <div className="services__content-item">
                      <div className="services__img">
                        <img src='img/plus.png' alt=""/>
                      </div>
                      <p className="services__text">
                        ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD HEALTH
                      </p>
                    </div>
                  </div>
                  <h3 className="services__title">
                    TIRES & WHEELS
                  </h3>
                </a>
              </div>
              {/*/block*/}
              <div className="block">
                <a href="#" className="services__item">
                  <div className="services__content" style={{backgroundImage:`url(img/iStock2.jpg)`}}>
                    <div className="services__content-item">
                      <div className="services__img">
                        <img src='img/plus.png' alt=""/>
                      </div>
                      <p className="services__text">
                        ANNUAL CHECKUPS FROM YOUR PHYSICIAN KEEP YOU IN GOOD HEALTH
                      </p>
                    </div>
                  </div>
                  <h3 className="services__title">
                    ENGINES
                  </h3>
                </a>
              </div>
              {/*/block*/}
            </div>
            {/*/wrapper*/}
          </div>
          {/*/container*/}
        </section>

        <section className="section about">
          <div className="container">
            <div className="about__wrapper">
              <div className="about__block">
                <h2 className="block__title text-white">
                  WE UNDERSTAND HOW IMPORTANT IT IS TO FIND THE RIGHT AUTO SERVICE
                </h2>
                <p className="about__text">
                  Car repairs and maintenance can be expensive and
                  no one wants to have pay to repair damage caused by shoddy repair service.
                  When you bring your car into our auto shop, you won’t have to worry because our staff is
                  comprised of ASE certified technicians who are committed to making sure you have a safe dependable car.
                </p>
                <a href="#" className="about__link">
                  MORE ABOUT US
                </a>
              </div>
              {/*    about__block*/}
              <img src="img/Getty.jpg" alt="" className="about__img"/>
            </div>
            {/*about__wrapper*/}
          </div>
          {/*container*/}
        </section>
        <section className="section process">
          <div className="container">
            <h2 className="process__title">FAST & EASY</h2>
            <h3 className="process__subtitle">our work process</h3>
            <div className="wrapper">
              <div className="block">
                <div className="process__item">
                  <h4 className="info__title">1.Request your quote</h4>
                  <p className="info__text">
                    We will be there when you most need us
                  </p>
                </div>
              </div>
              <div className="block">
                <div className="process__item">
                  <h4 className="info__title">02. BRING YOUR VEHICLE</h4>
                  <p className="info__text">
                    We are car guys at heart
                  </p>
                </div>
              </div>
              <div className="block">
                <div className="process__item">
                  <h4 className="info__title">03. GET IT REPAIRED</h4>
                  <p className="info__text">
                    High quality, low cost car servicing
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* /container */}
        </section>
        <section className="contacts">
          <div className="container">
            <h2 className="block__title text-white">
              Contact us
            </h2>
            <form className="contacts__form" action="">
              <div className="form__row">
                <div className="form__group">
                  <input type="text" className="input" placeholder=""/>
                  <label htmlFor="" className="label">
                    Name
                  </label>
                </div>
                <div className="form__group">
                  <input type="text" className="input" placeholder=""/>
                  <label htmlFor="" className="label">
                    Last name
                  </label>
                </div>
              </div>
              {/*/form__row*/}
              <div className="form__row">
                <div className="form__group">
                  <input type="email" className="input" placeholder=""/>
                  <label htmlFor="" className="label">
                    Email
                  </label>
                </div>
                <div className="form__group">
                  <input type="tel" className="input" placeholder=""/>
                  <label htmlFor="" className="label">
                    Phone
                  </label>
                </div>
              </div>
              <div className="form__row">
                <div className="form__group">
                  <textarea className="textarea" placeholder=" " name=" "></textarea>
                  <label htmlFor="" className="label">
                    Message
                  </label>
                </div>
              </div>
              <button className="btn text-upper" type="submit">
                Send
              </button>
            </form>
            {/*/contacts__form*/}
          </div>
          {/* /container   */}
        </section>
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
      </div>
  );
}

export default App;
