"use client";

import { useCallback } from "react";

import Button from "../common/Button";
import Link from "next/link";
import { SiHomeassistant } from "react-icons/si";

interface AuthProps {
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryActionLabel?: string;
}

const Auth: React.FC<AuthProps> = ({
    onSubmit,
    title,
    body,
    actionLabel,
    footer,
    disabled,
    secondaryAction,
    secondaryActionLabel,
}) => {
    const handleSubmit = useCallback(() => {
        if (disabled) {
            return;
        }

        onSubmit();
    }, [onSubmit, disabled]);

    const handleSecondaryAction = useCallback(() => {
        if (disabled || !secondaryAction) {
            return;
        }

        secondaryAction();
    }, [secondaryAction, disabled]);
    return (
        <div className="justify-center xl:items-center lg:items-center md:items-center items-end flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <Link
                href="/"
                className="absolute top-5 left-8 text-white flex items-center gap-3 bg-blur h-12 px-3 cursor-pointer group transition duration-75 ease-in-out hover:text-green-500"
            >
                <SiHomeassistant size={20} />
                <h3 className="group-hover:block hidden text-green-500 font-semibold">
                    Go Back
                </h3>
            </Link>
            <div
                className="
          relative 
          w-full
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          mx-auto 
          h-auto
          lg:h-auto
          md:h-auto
          "
            >
                {/*content*/}
                <div
                    className={`
            translate
            duration-300
            h-full
          `}
                >
                    <div
                        className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0 
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-full 
             bg-blur
              outline-none 
              focus:outline-none
              transition
              duration-300
              ease-in-out
            "
                    >
                        {/*body*/}
                        <div className="relative p-6 flex-auto ">{body}</div>
                        {/*footer*/}
                        <div className="flex flex-col gap-2 p-6">
                            <div
                                className="
                    flex 
                    flex-row 
                    items-center 
                    gap-4 
                    w-full
                  "
                            >
                                {secondaryAction && secondaryActionLabel && (
                                    <Button
                                        disabled={disabled}
                                        label={secondaryActionLabel}
                                        onClick={handleSecondaryAction}
                                        outline
                                    />
                                )}
                                <Button
                                    disabled={disabled}
                                    label={actionLabel}
                                    onClick={handleSubmit}
                                />
                            </div>
                            {footer}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
