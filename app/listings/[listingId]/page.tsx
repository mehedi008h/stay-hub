import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";

import ListingClient from "./ListingClient";
import EmptyState from "@/app/components/common/EmptyState";
import Navbar from "@/app/components/navbar/Navbar";

interface IParams {
    listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
    const listing = await getListingById(params);
    const currentUser = await getCurrentUser();

    if (!listing) {
        return <EmptyState />;
    }

    return (
        <div>
            <Navbar currentUser={currentUser} />
            <div className="pt-24 pb-20">
                <ListingClient listing={listing} currentUser={currentUser} />
            </div>
        </div>
    );
};

export default ListingPage;
