import { BsStarHalf } from "react-icons/bs";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import BannerCard from "./BannerCard";

const BannerSlider = () => {
    return (
        <div className="w-full">
            <Swiper
                pagination={true}
                navigation={false}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper rounded-md w-full"
            >
                <SwiperSlide>
                    <BannerCard />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerCard />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerCard />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BannerSlider;
