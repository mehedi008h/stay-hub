import Search from "../navbar/Search";

const BannerInfo = () => {
    return (
        <div className="w-full">
            <div className="xl:mt-32 lg:mt-32 md:mt-32 mt-8 xl:text-start lg:text-start md:text-start text-center">
                <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-600 to-red-500">
                    Book your
                </h1>
                <h1 className="mt-3 text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-600 to-red-500">
                    Favorite Places
                </h1>
                <p className="xl:w-3/4 lg:w-3/4 md:w-3/4 w-full my-4 text-neutral-600">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Reprehenderit laudantium perspiciatis porro exercitationem
                    tenetur, eaque dolores eligendi voluptas quidem? Pariatur,
                    itaque? Reiciendis cumque perferendis voluptas?
                </p>
                <div className="xl:w-3/4 lg:w-3/4 md:w-3/4 w-full mt-10 links">
                    <Search />
                </div>
            </div>
        </div>
    );
};

export default BannerInfo;
