"use client";

import BannerInfo from "./BannerInfo";
import BannerSlider from "./BannerSlider";

const Banner = () => {
    return (
        <div className="w-full min-h-[100vh] pt-24 pb-4 rounded-md">
            <div className="w-11/12 mx-auto">
                <div className="min-h-[100vh - 96px] grid grid-cols-12">
                    <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                        <BannerInfo />
                    </div>
                    <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                        <BannerSlider />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
