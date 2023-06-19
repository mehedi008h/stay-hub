"use client";

import Link from "next/link";

interface MenuItemProps {
    toggle: () => void;
    label: string;
    link: string;
}

const MobileMenuItem: React.FC<MenuItemProps> = ({ toggle, label, link }) => {
    return (
        <li className="list">
            <Link href={link} onClick={toggle} className="font-jetbrains">
                {label}
            </Link>
        </li>
    );
};

export default MobileMenuItem;
