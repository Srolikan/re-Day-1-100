import React from 'react';
import imageData from '../data.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function Body() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className="body">
            <div className='card-container'>
                <Slider {...settings}>
                    {imageData.map((item) => (
                        <div key={item.id} className="card" style={{ width: '22px' }}>
                            <img
                                className="card-img"
                                style={{ height: '33rem' }}
                                src={item.img}
                                alt={item.id}
                            />
                        </div>
                    ))}
                </Slider>
                <div className='gridcard'>

                </div>
            </div>
        </div>
    );
}

export default Body;