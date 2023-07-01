"use client";
import { SafeUser } from "@/app/types";

import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import Container from "../common/Container";

interface NavbarProps {
    currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
    // // Sticky Menu Area
    // useEffect(() => {
    //     window.addEventListener("scroll", isSticky);
    //     return () => {
    //         window.removeEventListener("scroll", isSticky);
    //     };
    // });

    // /* Method that will fix header after a specific scrollable */
    // const isSticky = () => {
    //     const header = document.querySelector(".links") as HTMLElement;
    //     const scrollTop = window.scrollY;
    //     console.log("Scroll: ", scrollTop);

    //     scrollTop >= 300
    //         ? header.classList.add("is-sticky")
    //         : header.classList.remove("is-sticky");
    // };
    return (
        <div className={`fixed w-full bg-white z-10`}>
            <div
                className="
          py-4 
          
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
            {/* <Categories /> */}
        </div>
    );
};

export default Navbar;
