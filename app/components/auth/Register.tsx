import { FcGoogle } from "react-icons/fc";
import Auth from "./Auth";
import { AiFillGithub } from "react-icons/ai";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import useAuth from "@/app/hooks/useAuth";

import Button from "../common/Button";
import Input from "../inputs/input";
import Heading from "../common/Heading";

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
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
