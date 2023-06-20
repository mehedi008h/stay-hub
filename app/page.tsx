import getCurrentUser from "./actions/getCurrentUser";
import getListings, { IListingsParams } from "./actions/getListings";
import Container from "./components/common/Container";
import EmptyState from "./components/common/EmptyState";
import ListingCard from "./components/listings/ListingCard";
import Navbar from "./components/navbar/Navbar";

interface HomeProps {
    searchParams: IListingsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
    const currentUser = await getCurrentUser();
    const listings = await getListings(searchParams);

    if (listings.length === 0) {
        return <EmptyState showReset />;
    }
    return (
        <main>
            <Navbar currentUser={currentUser} />
            <Container>
                <div
                    className="
                pt-48
                pb-20
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
        </main>
    );
};

export default Home;
