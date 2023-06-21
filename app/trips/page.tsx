import getCurrentUser from "@/app/actions/getCurrentUser";
import getReservations from "@/app/actions/getReservations";

import TripsClient from "./TripsClient";
import EmptyState from "../components/common/EmptyState";
import ClientContainer from "../components/common/ClientContainer";

const TripsPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return <EmptyState title="Unauthorized" subtitle="Please login" />;
    }

    const reservations = await getReservations({ userId: currentUser.id });

    if (reservations.length === 0) {
        return (
            <ClientContainer>
                <EmptyState
                    title="No trips found"
                    subtitle="Looks like you havent reserved any trips."
                />
            </ClientContainer>
        );
    }

    return (
        <ClientContainer>
            <TripsClient
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientContainer>
    );
};

export default TripsPage;
