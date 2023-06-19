import { FcGoogle } from "react-icons/fc";
import Auth from "./Auth";
import { AiFillGithub } from "react-icons/ai";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";

import useAuth from "@/app/hooks/useAuth";
import Button from "../common/Button";
import Input from "../inputs/Input";
import Heading from "../common/Heading";
import axios from "axios";
import { useRouter } from "next/navigation";

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const auth = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        axios
            .post("/api/register", data)
            .then(() => {
                toast.success("Registered!");
                router.push("/");
            })
            .catch((error) => {
                toast.error(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const onToggle = useCallback(() => {
        auth.onLogin();
    }, [auth]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading title="Welcome to Airbnb" subtitle="Create an account!" />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="name"
                label="Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                label="Password"
                type="password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    );

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button
                outline
                label="Continue with Google"
                icon={FcGoogle}
                onClick={() => signIn("google")}
            />
            <Button
                outline
                label="Continue with Github"
                icon={AiFillGithub}
                onClick={() => signIn("github")}
            />
            <div
                className="
          text-neutral-500 
          text-center 
          mt-4 
          font-light
        "
            >
                <p>
                    Already have an account?
                    <span
                        onClick={onToggle}
                        className="
              text-green-500
              cursor-pointer 
              hover:underline
            "
                    >
                        {" "}
                        Log in
                    </span>
                </p>
            </div>
        </div>
    );
    return (
        <Auth
            disabled={isLoading}
            title="Register"
            actionLabel="Continue"
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    );
};

export default Register;
