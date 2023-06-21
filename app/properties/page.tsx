import getCurrentUser from "@/app/actions/getCurrentUser";
import getListings from "@/app/actions/getListings";

import PropertiesClient from "./PropertiesClient";
import EmptyState from "../components/common/EmptyState";
import Navbar from "../components/navbar/Navbar";

const PropertiesPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return <EmptyState title="Unauthorized" subtitle="Please login" />;
    }

    const listings = await getListings({ userId: currentUser.id });

    if (listings.length === 0) {
        return (
            <EmptyState
                title="No properties found"
                subtitle="Looks like you have no properties."
            />
        );
    }

    return (
        <div>
            <Navbar currentUser={currentUser} />
            <div className="pt-24 pb-20">
                <PropertiesClient
                    listings={listings}
                    currentUser={currentUser}
                />
            </div>
        </div>
    );
};

export default PropertiesPage;
