import getCurrentUser from "@/app/actions/getCurrentUser";
import getReservations from "@/app/actions/getReservations";

import EmptyState from "../components/common/EmptyState";
import ReservationsClient from "./ReservationsClient";
import Navbar from "../components/navbar/Navbar";
import ClientContainer from "../components/common/ClientContainer";

const ReservationsPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return <EmptyState title="Unauthorized" subtitle="Please login" />;
    }

    const reservations = await getReservations({ authorId: currentUser.id });

    if (reservations.length === 0) {
        return (
            <ClientContainer>
                <EmptyState
                    title="No reservations found"
                    subtitle="Looks like you have no reservations on your properties."
                />
            </ClientContainer>
        );
    }

    return (
        <ClientContainer>
            <ReservationsClient
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientContainer>
    );
};

export default ReservationsPage;
