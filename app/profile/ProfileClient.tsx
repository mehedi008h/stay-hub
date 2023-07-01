"use client";

import { IoMailOpenOutline } from "react-icons/io5";
import Container from "../components/common/Container";
import { BsPhone } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";
import { SafeUser } from "../types";
import Image from "next/image";
import Button from "../components/common/Button";

interface ProfileClientProps {
    currentUser?: SafeUser | null;
}

const ProfileClient: React.FC<ProfileClientProps> = ({ currentUser }) => {
    return (
        <Container>
            <div className="p-3 rounded-md shadow w-3/4 mx-auto my-12">
                <div className="flex gap-4 w-full">
                    <div>
                        <div className="w-72 h-60 rounded-md">
                            <Image
                                className="rounded-md h-full w-full object-cover"
                                height="288"
                                width="240"
                                alt="Avatar"
                                src={
                                    currentUser?.image ||
                                    "/images/placeholder.jpg"
                                }
                            />
                        </div>
                        <div className=" mt-3">
                            <Button
                                label="Update Profile"
                                small
                                onClick={() => ""}
                            />
                        </div>
                    </div>
                    <div className="pt-8">
                        <h1 className="font-semibold text-3xl">
                            {currentUser?.name}
                        </h1>
                        <p className="text-neutral-500 w-11/12 my-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Adipisci veniam ipsum unde dolorum animi
                            necessitatibus!
                        </p>
                        <div className="flex flex-col gap-2 mt-2">
                            <div className="flex items-center gap-3 text-neutral-700">
                                <IoMailOpenOutline />
                                <span className="font-jetbrains text-base">
                                    {currentUser?.email}
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-neutral-700">
                                <BsPhone />
                                <span className="font-jetbrains text-base">
                                    01990636964
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-neutral-700">
                                <FaRegAddressCard />
                                <span className="font-jetbrains text-base">
                                    Dhanmondi 32, Dhaka
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ProfileClient;
