import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import img1 from "../../../assets/image/Featured-img1.jpg"
import img2 from "../../../assets/image/Featured-img2.jpg"
import img3 from "../../../assets/image/Featured-img3.jpg"
import img4 from "../../../assets/image/Featured-img4.jpg"
import img5 from "../../../assets/image/Featured-img5.jpg"
import img6 from "../../../assets/image/Featured-img2.jpg"
import img7 from "../../../assets/image/Featured-img1.jpg"

const Featured2 = () => {
    return (
        <div>
            <div className='lg:hidden'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='overflow-hidden '>

                            <img className='  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 relative rounded cursor-pointer' src={img1} alt="" />

                            <div className='absolute bottom-4 ml-4 '>
                                <h3 className='text-xl font-semibold text-white'>Chic Apartment in Downtown</h3>
                                <h1 className='text-3xl font-extrabold text-white'>$890,000</h1>
                                <button className='text-lg font-extrabold text-white border-white hover:border-b-4'>View Details</button>
                            </div>

                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='overflow-hidden'>
                            <img className=' transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 relative rounded cursor-pointer' src={img2} alt="" />
                            <div className='absolute bottom-4 ml-4 '>
                                <h3 className='text-xl font-semibold text-white'>Chic Apartment in Downtown</h3>
                                <h1 className='text-3xl font-extrabold text-white'>$890,000</h1>
                                <button className='text-lg font-extrabold text-white border-white hover:border-b-4'>View Details</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='overflow-hidden'>
                            <img className=' transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 relative rounded cursor-pointer' src={img3} alt="" />
                            <div className='absolute bottom-4 ml-4 '>
                                <h3 className='text-xl font-semibold text-white'>Chic Apartment in Downtown</h3>
                                <h1 className='text-3xl font-extrabold text-white'>$890,000</h1>
                                <button className='text-lg font-extrabold text-white border-white hover:border-b-4'>View Details</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='overflow-hidden'>
                            <img className=' transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 relative rounded cursor-pointer' src={img4} alt="" />
                            <div className='absolute bottom-4 ml-4 '>
                                <h3 className='text-xl font-semibold text-white'>Chic Apartment in Downtown</h3>
                                <h1 className='text-3xl font-extrabold text-white'>$890,000</h1>
                                <button className='text-lg font-extrabold text-white border-white hover:border-b-4'>View Details</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='overflow-hidden'>
                            <img className=' transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 relative rounded cursor-pointer' src={img5} alt="" />
                            <div className='absolute bottom-4 ml-4 '>
                                <h3 className='text-xl font-semibold text-white'>Chic Apartment in Downtown</h3>
                                <h1 className='text-3xl font-extrabold text-white'>$890,000</h1>
                                <button className='text-lg font-extrabold text-white border-white hover:border-b-4'>View Details</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='overflow-hidden'>
                            <img className=' transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 relative rounded cursor-pointer' src={img6} alt="" />
                            <div className='absolute bottom-4 ml-4 '>
                                <h3 className='text-xl font-semibold text-white'>Chic Apartment in Downtown</h3>
                                <h1 className='text-3xl font-extrabold text-white'>$890,000</h1>
                                <button className='text-lg font-extrabold text-white border-white hover:border-b-4'>View Details</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='overflow-hidden'>
                            <img className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 relative rounded cursor-pointer' src={img7} alt="" />
                            <div className='absolute bottom-4 ml-4 '>
                                <h3 className='text-xl font-semibold text-white'>Chic Apartment in Downtown</h3>
                                <h1 className='text-3xl font-extrabold text-white'>$890,000</h1>
                                <button className='text-lg font-extrabold text-white border-white hover:border-b-4'>View Details</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    

                </Swiper>
            </div>
        </div>
    );
};

export default Featured2;