import React from 'react';

const AboutBlock = () => {
    return (
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
    );
};

export default AboutBlock;