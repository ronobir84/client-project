import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
// image input
import img1 from "../../../assets/image/Featured-img1.jpg"
import img2 from "../../../assets/image/Featured-img2.jpg"
import img3 from "../../../assets/image/Featured-img3.jpg"
import img4 from "../../../assets/image/Featured-img4.jpg"
import img5 from "../../../assets/image/Featured-img5.jpg"
import img6 from "../../../assets/image/Featured-img2.jpg"
import img7 from "../../../assets/image/Featured-img1.jpg"

const Featured = () => {
    return (
        <div className='mt-20 ml-32 mb-20'>
            <div className='mb-12'>
                <h2 className='text-4xl text-[#333] font-bold'>Featured Properties</h2>
                <p className='text-xl text-gray-500 mt-3'>Browse our latest hot offers</p>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className=''>
                         
                        <img className='w-[95%] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 relative rounded cursor-pointer' src={img1} alt="" />
                        
                        <div className='absolute bottom-4 ml-4 '>
                            <h3 className='text-xl font-semibold text-white'>Chic Apartment in Downtown</h3>
                            <h1 className='text-3xl font-extrabold text-white'>$890,000</h1>
                            <button className='text-lg font-extrabold text-white border-white hover:border-b-4'>View Details</button>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='w-11/12 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 relative rounded cursor-pointer' src={img2} alt="" />
                        <div className='absolute bottom-4 ml-4 '>
                            <h3 className='text-xl font-semibold text-white'>Chic Apartment in Downtown</h3>
                            <h1 className='text-3xl font-extrabold text-white'>$890,000</h1>
                            <button className='text-lg font-extrabold text-white border-white hover:border-b-4'>View Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='w-[87%] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 relative rounded cursor-pointer' src={img3} alt="" />
                        <div className='absolute bottom-4 ml-4 '>
                            <h3 className='text-xl font-semibold text-white'>Chic Apartment in Downtown</h3>
                            <h1 className='text-3xl font-extrabold text-white'>$890,000</h1>
                            <button className='text-lg font-extrabold text-white border-white hover:border-b-4'>View Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='w-[98%] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 relative rounded cursor-pointer' src={img4} alt="" />
                        <div className='absolute bottom-4 ml-4 '>
                            <h3 className='text-xl font-semibold text-white'>Chic Apartment in Downtown</h3>
                            <h1 className='text-3xl font-extrabold text-white'>$890,000</h1>
                            <button className='text-lg font-extrabold text-white border-white hover:border-b-4'>View Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='w-[98%] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 relative rounded cursor-pointer' src={img5} alt="" />
                        <div className='absolute bottom-4 ml-4 '>
                            <h3 className='text-xl font-semibold text-white'>Chic Apartment in Downtown</h3>
                            <h1 className='text-3xl font-extrabold text-white'>$890,000</h1>
                            <button className='text-lg font-extrabold text-white border-white hover:border-b-4'>View Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='w-[94%] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 relative rounded cursor-pointer' src={img6} alt="" />
                        <div className='absolute bottom-4 ml-4 '>
                            <h3 className='text-xl font-semibold text-white'>Chic Apartment in Downtown</h3>
                            <h1 className='text-3xl font-extrabold text-white'>$890,000</h1>
                            <button className='text-lg font-extrabold text-white border-white hover:border-b-4'>View Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 relative rounded cursor-pointer' src={img7} alt="" />
                        <div className='absolute bottom-4 ml-4 '>
                            <h3 className='text-xl font-semibold text-white'>Chic Apartment in Downtown</h3>
                            <h1 className='text-3xl font-extrabold text-white'>$890,000</h1>
                            <button className='text-lg font-extrabold text-white border-white hover:border-b-4'>View Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
            <div className="mt-8">
                <h2 className="text-2xl font-bold text-[#333] uppercase">Browse All</h2>
                <h3></h3>
            </div>
        </div>
    );
};

export default Featured;