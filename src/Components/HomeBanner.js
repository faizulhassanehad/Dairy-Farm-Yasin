import React from 'react';

const HomeBanner = () => {
  return (
    <section className='home_banner_section'>
        <div className="banner_text_div">
            <h1 className='banner_title'>Milk And More</h1>
            <p className="banner_text">Dairy producers worldwide face similar challenges around animal welfare, <br/> farm profitability, food safety and work effciency</p>
            <button className="explore_btn mx-auto">Explore More !</button>
        </div>
    </section>
  );
}

export default HomeBanner;
