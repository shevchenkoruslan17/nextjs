import Joi from "joi";

export const authSchema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            "string.empty": "Email обов'язковий",
            "string.email": "Введіть коректний email",
            "any.required": "Email обов'язковий",
        }),

    password: Joi.string()
        .min(6)
        .required()
        .messages({
            "string.empty": "Пароль обов'язковий",
            "string.min": "Пароль повинен містити мінімум 6 символів",
            "any.required": "Пароль обов'язковий",
        }),
});