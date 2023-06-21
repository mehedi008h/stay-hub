import { ReactNode } from "react";
import Navbar from "../navbar/Navbar";
import getCurrentUser from "@/app/actions/getCurrentUser";

interface ClientProps {
    children: ReactNode;
}

const ClientContainer: React.FC<ClientProps> = async ({ children }) => {
    const currentUser = await getCurrentUser();
    return (
        <div>
            <Navbar currentUser={currentUser} />
            <div className="pt-24 pb-20">{children}</div>
        </div>
    );
};

export default ClientContainer;
