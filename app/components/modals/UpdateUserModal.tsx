"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

import Modal from "./Modal";
import ImageUpload from "../inputs/ImageUpload";
import Input from "../inputs/Input";
import Heading from "../common/Heading";
import useUserUpdateModal from "@/app/hooks/useUserUpdateModal";
import Textarea from "../inputs/Textarea";

enum STEPS {
    INFO = 0,
    DESCRIPTION = 1,
    IMAGES = 2,
}

const UpdateModal = () => {
    const router = useRouter();
    const updateModal = useUserUpdateModal();

    const [isLoading, setIsLoading] = useState(false);
    const [step, setStep] = useState(STEPS.INFO);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
        reset,
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            phone: "",
            address: "",
            work: "",
            bio: "",
            imageSrc: "",
        },
    });

    const imageSrc = watch("imageSrc");

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
        });
    };

    const onBack = () => {
        setStep((value) => value - 1);
    };

    const onNext = () => {
        setStep((value) => value + 1);
    };

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if (step !== STEPS.IMAGES) {
            return onNext();
        }

        setIsLoading(true);
        console.log("Update data", data);
    };

    const actionLabel = useMemo(() => {
        if (step === STEPS.IMAGES) {
            return "Create";
        }

        return "Next";
    }, [step]);

    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.INFO) {
            return undefined;
        }

        return "Back";
    }, [step]);

    let bodyContent = (
        <div className="flex flex-col gap-8">
            <Heading
                title="Give your latest information "
                subtitle="Update information"
            />
            <div
                className="
          grid 
          grid-cols-1  
          gap-3
          max-h-[50vh]
          overflow-y-auto
          pr-2
        "
            >
                <Input
                    id="name"
                    label="Name"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <hr />
                <Input
                    id="phone"
                    label="Phone"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                />
                <hr />
                <Input
                    id="address"
                    label="Address"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                />
            </div>
        </div>
    );

    if (step === STEPS.IMAGES) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="Add a photo of your"
                    subtitle="Show your latest photo to everyone!"
                />
                <ImageUpload
                    onChange={(value) => setCustomValue("imageSrc", value)}
                    value={imageSrc}
                />
            </div>
        );
    }

    if (step === STEPS.DESCRIPTION) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="How would you describe yourself?"
                    subtitle="Short and sweet works best!"
                />
                <Input
                    id="work"
                    label="Work"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                />
                <hr />

                <Textarea
                    id="bio"
                    label="Bio"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                />
            </div>
        );
    }

    return (
        <Modal
            disabled={isLoading}
            isOpen={updateModal.isOpen}
            title="Update Profile"
            actionLabel={actionLabel}
            onSubmit={handleSubmit(onSubmit)}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={step === STEPS.INFO ? undefined : onBack}
            onClose={updateModal.onClose}
            body={bodyContent}
        />
    );
};

export default UpdateModal;
