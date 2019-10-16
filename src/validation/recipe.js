const Joi = require('@hapi/joi');

exports.createRecipe = (data) => {
    const schema = Joi.object({
        label: Joi.string()
            .min(2)
            .required(),
        calories: Joi.number()
            .required(),
        image: Joi.string()
            .required(),
        ingredients: Joi.array()
            .items(Joi.string())
            .required()
    });

    return schema.validate(data);
};