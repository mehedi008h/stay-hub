"use client";

import { IconType } from "react-icons";

interface CategoryBoxProps {
    icon: IconType;
    label: string;
    selected?: boolean;
    onClick: (value: string) => void;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
    icon: Icon,
    label,
    selected,
    onClick,
}) => {
    return (
        <div
            onClick={() => onClick(label)}
            className={`
        rounded-xl
        border-2
        p-4
        flex
        flex-col
        gap-3
        hover:border-black
        dark:hover:border-neutral-600        
        transition
        cursor-pointer
        ${
            selected
                ? "border-rose-500 dark:border-rose-500 dark:text-rose-500 text-rose-500"
                : "border-neutral-400"
        }
      `}
        >
            <Icon size={30} />
            <div className="font-semibold font-jetbrains">{label}</div>
        </div>
    );
};

export default CategoryBox;
