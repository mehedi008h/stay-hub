import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import ClientContainer from "../components/common/ClientContainer";
import EmptyState from "../components/common/EmptyState";
import TripsClient from "../trips/TripsClient";
import ProfileClient from "./ProfileClient";

const ProfilePage = async () => {
    const currentUser = await getCurrentUser();
    const reservations = await getReservations({ userId: currentUser?.id });
    return (
        <ClientContainer>
            <ProfileClient currentUser={currentUser} />
            {reservations.length === 0 ? (
                <>
                    <EmptyState
                        title="No trips found"
                        subtitle="Looks like you havent reserved any trips."
                    />
                </>
            ) : (
                <>
                    <TripsClient
                        reservations={reservations}
                        currentUser={currentUser}
                    />
                </>
            )}
        </ClientContainer>
    );
};

export default ProfilePage;
