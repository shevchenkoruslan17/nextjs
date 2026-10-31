"use client";

import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import { authSchema } from "@/schemas/auth.schema";
import { IAuthForm } from "@/types/auth.types";

const AuthForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<IAuthForm>({
        resolver: joiResolver(authSchema),
        mode: "onTouched",
    });

    const onSubmit = (data: IAuthForm) => {
        console.log(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Authorization</h1>

            <div>
                <input
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div>
                <input
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                />
                {errors.password && <p>{errors.password.message}</p>}
            </div>

            <button type="submit">Login</button>
        </form>
    );
};

export default AuthForm;