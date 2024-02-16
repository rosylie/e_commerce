import React from 'react';
import Img1 from "../../assets/hero/shop1.png";
import Img2 from "../../assets/hero/shop2.png";
import Img3 from "../../assets/hero/shop3.png";
import Slider from "react-slick";

const ImageList = [
    {
        id:1,
        img: Img1,
        title: "Up to 50% off on all men's wear",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat libero omnis distinctio quae, dolores quis nam fuga nobis cupiditate qui unde labore neque enim tempora voluptas possimus sed maxime perspiciatis?",
    },
    {
        id:2,
        img: Img2,
        title: "30% off on all women's wear",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat libero omnis distinctio quae, dolores quis nam fuga nobis cupiditate qui unde labore neque enim tempora voluptas possimus sed maxime perspiciatis?",
    },
    {
        id:3,
        img: Img3,
        title: "70% off on all products sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat libero omnis distinctio quae, dolores quis nam fuga nobis cupiditate qui unde labore neque enim tempora voluptas possimus sed maxime perspiciatis?",
    },
]

const Hero = () => {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true, 
        speed: 800,
        slidesToScroll: 1, 
        autoplay: true, 
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };
    
    return (
        <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-fuchsia-950 dark:text-white duration-200 '>
            {/* background pattern */}
            <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-[8]'>

            </div>
            {/* hero section */}
            <div className="container pb-8 sm:pb-0">
                <Slider {...settings}>
                    {ImageList.map((data) => (
                        // eslint-disable-next-line react/jsx-key
                        <div>
                            <div className='grid grid-cols-1 sm:grid-cols-2'>
                                {/* text content section */}
                                <div
                                className='relative z-10 flex flex-col justify-center order-2 gap-4 pt-12 text-center sm:pt-0 sm:text-left sm:order-1'>
                                    <h1 
                                    data-aos="zoom-out"
                                    data-aos-duration="500"
                                    data-aos-once="true"
                                    className='text-5xl font-bold sm:text-6xl lg:text-7xl'>{data.title}</h1>
                                    <p 
                                    data-aos="zoom-out"
                                    data-aos-duration="500"
                                    data-aos-delay="100"
                                    className='text-sm'>
                                        {data.description}
                                    </p>
                                    <div
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                        data-aos-delay="300"
                                    >
                                        <button
                                        className='px-4 py-2 text-white duration-200 rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-105'>
                                            Order Now
                                        </button>
                                    </div>
                                </div>
                                
                                {/* image section */}
                                <div className='order-1 sm:order-2'>
                                    <div className='relative z-10'>
                                        <img src={data.img} 
                                        alt="" 
                                        className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto lg:scale-120' />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Hero