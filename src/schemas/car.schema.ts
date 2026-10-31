import Joi from "joi";

export const carSchema = Joi.object({
    brand: Joi.string()
        .pattern(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄҐґ]{1,20}$/)
        .required()
        .messages({
            "string.empty": "Вкажіть марку автомобіля",
            "string.pattern.base": "Марка повинна містити від 1 до 20 літер",
            "any.required": "Марка обов'язкова",
        }),

    price: Joi.number()
        .integer()
        .min(0)
        .max(1000000)
        .required()
        .messages({
            "number.base": "Ціна повинна бути числом",
            "number.min": "Ціна не може бути меншою за 0",
            "number.max": "Максимальна ціна — 1000000",
            "number.integer": "Ціна повинна бути цілим числом",
            "any.required": "Вкажіть ціну",
        }),

    year: Joi.number()
        .integer()
        .min(1990)
        .max(2026)
        .required()
        .messages({
            "number.base": "Рік повинен бути числом",
            "number.min": "Мінімальний рік — 1990",
            "number.max": "Максимальний рік — 2026",
            "number.integer": "Рік повинен бути цілим числом",
            "any.required": "Вкажіть рік",
        }),
});