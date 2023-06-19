"use client";

interface MenuItemProps {
    onClick: () => void;
    label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
    return (
        <div
            onClick={onClick}
            className="
        px-4 
        py-3 
        hover:bg-neutral-100
        dark:hover:bg-neutral-300
        dark:hover:text-neutral-800 
        transition
        font-semibold
        font-jetbrains
        text-base
      "
        >
            {label}
        </div>
    );
};

export default MenuItem;
