import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import getReservations from "@/app/actions/getReservations";

import ListingClient from "./ListingClient";
import EmptyState from "@/app/components/common/EmptyState";
import ClientContainer from "@/app/components/common/ClientContainer";

interface IParams {
    listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
    const listing = await getListingById(params);
    const reservations = await getReservations(params);
    const currentUser = await getCurrentUser();

    if (!listing) {
        return (
            <ClientContainer>
                <EmptyState />
            </ClientContainer>
        );
    }

    return (
        <ClientContainer>
            <ListingClient
                listing={listing}
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientContainer>
    );
};

export default ListingPage;
