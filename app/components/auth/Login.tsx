"use client";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import Auth from "./Auth";
import Heading from "../common/Heading";
import Button from "../common/Button";
import useAuth from "@/app/hooks/useAuth";
import Input from "../inputs/input";

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const auth = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        console.log("Data: " + JSON.stringify(data));
    };

    const onToggle = useCallback(() => {
        auth.onRegister();
    }, [auth]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading title="Welcome back" subtitle="Login to your account!" />
            <Input
                id="email"
                label="Email"
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
                onClick={() => ""}
            />
            <Button
                outline
                label="Continue with Github"
                icon={AiFillGithub}
                onClick={() => ""}
            />
            <div
                className="
      text-neutral-400 text-center mt-4 font-light"
            >
                <p>
                    First time using Airbnb?
                    <span
                        onClick={onToggle}
                        className="
              text-green-500
              cursor-pointer 
              hover:underline
            "
                    >
                        {" "}
                        Create an account
                    </span>
                </p>
            </div>
        </div>
    );
    return (
        <Auth
            disabled={isLoading}
            title="Login"
            actionLabel="Continue"
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    );
};

export default Login;
