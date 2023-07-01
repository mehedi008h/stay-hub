"use client";

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

import MenuItem from "./MenuItem";
import { SafeUser } from "@/app/types";
import Avatar from "../common/Avatar";
import MobileMenu from "./MobileMenu";
import useRentModal from "@/app/hooks/useRentModal";

interface UserMenuProps {
    currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
    const router = useRouter();
    const rentModal = useRentModal();

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    const onRent = useCallback(() => {
        if (!currentUser) {
            router.push("/auth");
        }

        rentModal.onOpen();
    }, [router, rentModal, currentUser]);

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div
                    onClick={onRent}
                    className="
                    
            hidden
            md:block
            font-poppins
            font-semibold
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100
            text-gray-600
            transition 
            cursor-pointer
          "
                >
                    Stayhub your home
                </div>
                <div
                    onClick={toggleOpen}
                    className="
          p-4
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
                >
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <Avatar src={currentUser?.image} />
                    </div>
                </div>
            </div>
            {isOpen && (
                <>
                    <div
                        className="
                    hidden
                    md:block
                    xl:block
                    lg:block
                    absolute 
                    rounded-xl 
                    shadow-md
                    w-[40vw]
                    md:w-3/4 
                    bg-white
                    overflow-hidden 
                    right-0 
                    top-12 
                    text-sm
          "
                    >
                        <div className="flex flex-col cursor-pointer">
                            {currentUser ? (
                                <>
                                    <MenuItem
                                        label="My trips"
                                        onClick={() => router.push("/trips")}
                                    />
                                    <MenuItem
                                        label="My favorites"
                                        onClick={() =>
                                            router.push("/favorites")
                                        }
                                    />
                                    <MenuItem
                                        label="My reservations"
                                        onClick={() =>
                                            router.push("/reservations")
                                        }
                                    />
                                    <MenuItem
                                        label="My properties"
                                        onClick={() =>
                                            router.push("/properties")
                                        }
                                    />
                                    <MenuItem
                                        label="My profile"
                                        onClick={() => router.push("/profile")}
                                    />
                                    <MenuItem
                                        label="Stayhub your home"
                                        onClick={onRent}
                                    />
                                    <hr />
                                    <MenuItem
                                        label="Logout"
                                        onClick={() => signOut()}
                                    />
                                </>
                            ) : (
                                <>
                                    <MenuItem
                                        label="Login"
                                        onClick={() => ""}
                                    />
                                    <MenuItem
                                        label="Sign up"
                                        onClick={() => ""}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                    <div
                        className="block
                    md:hidden
                    xl:hidden
                    lg:hidden"
                    >
                        <MobileMenu
                            toggle={toggleOpen}
                            currentUser={currentUser}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default UserMenu;
