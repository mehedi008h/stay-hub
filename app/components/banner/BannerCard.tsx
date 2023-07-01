import { BsStarHalf } from "react-icons/bs";

const BannerCard = () => {
    return (
        <>
            <div className="h-[60vh] w-full border bg-black rounded-md mt-10"></div>
            <div className="flex gap-4 items-center">
                <div className="flex flex-row items-center gap-1 p-4">
                    <div className="text-2xl font-semibold">$ 1000</div>
                    <div className="font-light text-neutral-600">night</div>
                </div>
                <div className="flex flex-row items-center gap-1">
                    <BsStarHalf color="#F43F5E" size={20} />
                    <div className="font-light text-neutral-600">4.3</div>
                </div>
            </div>
            <div className="w-fit px-8 py-1 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold font-jetbrains text-lg rounded-full text-center cursor-pointer">
                Book Now
            </div>
        </>
    );
};

export default BannerCard;
