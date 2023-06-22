import getCurrentUser from "@/app/actions/getCurrentUser";
import getFavoriteListings from "@/app/actions/getFavoriteListings";

import FavoritesClient from "./FavoritesClient";
import EmptyState from "../components/common/EmptyState";
import ClientContainer from "../components/common/ClientContainer";

const ListingPage = async () => {
    const listings = await getFavoriteListings();
    const currentUser = await getCurrentUser();

    if (listings.length === 0) {
        return (
            <ClientContainer>
                <EmptyState
                    title="No favorites found"
                    subtitle="Looks like you have no favorite listings."
                />
            </ClientContainer>
        );
    }

    return (
        <ClientContainer>
            <FavoritesClient listings={listings} currentUser={currentUser} />
        </ClientContainer>
    );
};

export default ListingPage;
