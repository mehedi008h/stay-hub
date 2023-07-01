import getCurrentUser from "./actions/getCurrentUser";
import getListings, { IListingsParams } from "./actions/getListings";
import Banner from "./components/banner/Banner";
import ClientContainer from "./components/common/ClientContainer";

import Container from "./components/common/Container";
import EmptyState from "./components/common/EmptyState";
import ListingCard from "./components/listings/ListingCard";
import Categories from "./components/navbar/Categories";
import Navbar from "./components/navbar/Navbar";

export const dynamic = "force-dynamic";
interface HomeProps {
    searchParams: IListingsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
    const currentUser = await getCurrentUser();
    const listings = await getListings(searchParams);

    if (listings.length === 0) {
        return (
            <ClientContainer>
                <EmptyState showReset />
            </ClientContainer>
        );
    }
    return (
        <>
            <Navbar currentUser={currentUser} />
            <Banner />
            <Container>
                <Categories />
                <div
                    className="
                py-20
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4
                xl:grid-cols-5
                2xl:grid-cols-6
                gap-8
              "
                >
                    {listings.map((listing: any) => (
                        <ListingCard
                            currentUser={currentUser}
                            key={listing.id}
                            data={listing}
                        />
                    ))}
                </div>
            </Container>
        </>
    );
};

export default Home;
