import getCurrentUser from "@/app/actions/getCurrentUser";
import getReservations from "@/app/actions/getReservations";

import EmptyState from "../components/common/EmptyState";
import ReservationsClient from "./ReservationsClient";
import Navbar from "../components/navbar/Navbar";

const ReservationsPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return <EmptyState title="Unauthorized" subtitle="Please login" />;
    }

    const reservations = await getReservations({ authorId: currentUser.id });

    if (reservations.length === 0) {
        return (
            <EmptyState
                title="No reservations found"
                subtitle="Looks like you have no reservations on your properties."
            />
        );
    }

    return (
        <div>
            <Navbar currentUser={currentUser} />
            <div className="pt-24 pb-20">
                <ReservationsClient
                    reservations={reservations}
                    currentUser={currentUser}
                />
            </div>
        </div>
    );
};

export default ReservationsPage;
