"use client";

import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { authSchema } from "@/schemas/auth.schema";
import { IAuthForm } from "@/types/auth.types";

const AuthPage = () => {

    const {register, handleSubmit, formState: { errors, isValid }, reset,} = useForm<IAuthForm>({
        resolver: joiResolver(authSchema),
        mode: "onTouched",
    });

    const onSubmit = (data: IAuthForm) => {
        console.log("Form data:", data);
        reset();
    };
    return (
        <div>
            <h1>Authorization</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter email"
                        {...register("email")}
                    />
                    {errors.email && (
                        <p>{errors.email.message}</p>
                    )}
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        {...register("password")}
                    />
                    {errors.password && (
                        <p>{errors.password.message}</p>
                    )}
                </div>
                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    );
};

export default AuthPage;