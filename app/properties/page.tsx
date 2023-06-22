import getCurrentUser from "@/app/actions/getCurrentUser";
import getListings from "@/app/actions/getListings";

import PropertiesClient from "./PropertiesClient";
import EmptyState from "../components/common/EmptyState";
import ClientContainer from "../components/common/ClientContainer";

const PropertiesPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return <EmptyState title="Unauthorized" subtitle="Please login" />;
    }

    const listings = await getListings({ userId: currentUser.id });

    if (listings.length === 0) {
        return (
            <ClientContainer>
                <EmptyState
                    title="No properties found"
                    subtitle="Looks like you have no properties."
                />
            </ClientContainer>
        );
    }

    return (
        <ClientContainer>
            <PropertiesClient listings={listings} currentUser={currentUser} />
        </ClientContainer>
    );
};

export default PropertiesPage;
