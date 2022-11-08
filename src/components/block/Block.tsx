import React from 'react';

const Block = () => {
    return (
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
    );
};

export default Block;