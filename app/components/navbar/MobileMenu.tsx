"use client";
import Link from "next/link";
import { HiMenuAlt4 } from "react-icons/hi";
import { motion } from "framer-motion";

import { IoIosArrowDown } from "react-icons/io";
import React from "react";
import MobileMenuItem from "./MobileMenuItem";
import { SafeUser } from "@/app/types";
import { signOut } from "next-auth/react";

interface MobileProps {
    toggle: () => void;
    currentUser?: SafeUser | null;
}
const MobileMenu: React.FC<MobileProps> = ({ toggle, currentUser }) => {
    return (
        <motion.div
            whileInView={{ y: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="app__navbar-menu"
        >
            <IoIosArrowDown
                className="mx-auto"
                color="white"
                size={60}
                onClick={toggle}
            />
            <ul className="nav_view_list">
                {currentUser ? (
                    <>
                        <MobileMenuItem
                            label="My trips"
                            toggle={toggle}
                            link="/trips"
                        />
                        <MobileMenuItem
                            label="My favorites"
                            toggle={toggle}
                            link="/favorites"
                        />
                        <MobileMenuItem
                            label="My reservations"
                            toggle={toggle}
                            link="/reservations"
                        />
                        <MobileMenuItem
                            label="My properties"
                            toggle={toggle}
                            link="/properties"
                        />
                        <MobileMenuItem
                            label="Stayhub your home"
                            toggle={toggle}
                            link="/properties"
                        />
                        <div className="w-full flex mt-4">
                            <button
                                onClick={() => signOut()}
                                className="w-3/4 mx-auto py-1 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold font-jetbrains text-lg rounded-full text-center"
                            >
                                Logout
                            </button>
                        </div>
                    </>
                ) : (
                    <MobileMenuItem
                        label="Login"
                        toggle={toggle}
                        link="/auth"
                    />
                )}
            </ul>
        </motion.div>
    );
};

export default MobileMenu;
