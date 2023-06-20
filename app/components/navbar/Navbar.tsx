import { SafeUser } from "@/app/types";

import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import Categories from "./Categories";
import Container from "../common/Container";

interface NavbarProps {
    currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
    return (
        <div className="fixed w-full nav z-10 shadow-sm">
            <div
                className="
          py-4 
          border-b-[1px]
        "
            >
                <Container>
                    <div
                        className="
                        flex 
                        flex-row 
                        items-center 
                        justify-between
                        gap-3
                        md:gap-0
          "
                    >
                        <Logo />
                        <Search />
                        <UserMenu currentUser={currentUser} />
                    </div>
                </Container>
            </div>
            <Categories />
        </div>
    );
};

export default Navbar;
