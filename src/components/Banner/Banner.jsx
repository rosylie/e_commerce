// eslint-disable-next-line no-unused-vars
import React from 'react';
import BannerImg from "../../assets/website/bannerboy.jpg"


const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
        <div className='container'>
            <div className='grid items-center grid-cols-1 gap-6 sm:grid-cols-2'>
                {/* image section */}
                <div>
                    <img src={BannerImg} alt="" 
                    className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover'
                    />
                </div>
                {/* text details section */}
                
            </div>
        </div>
    </div>
  )
}

export default Banner