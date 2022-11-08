import React from 'react';

const InfoBlock = () => {
    return (
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
    );
};

export default InfoBlock;