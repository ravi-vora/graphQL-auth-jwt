import Joi from 'joi';
export const validateUserSignup = (user) => {
    const Schema = Joi.object({
        firstName: Joi.string().min(2).max(10).required(),
        lastName: Joi.string().min(2).max(10).required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', "in"] } }).required(),
        phone: Joi.string().pattern(/^\+?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/).required(),
        password: Joi.string().min(8).max(14).alphanum().required()
    });
    return Schema.validate(user);
};
export const validateUserSignin = (user) => {
    const Schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', "in"] } }).required(),
        password: Joi.string().min(8).max(14).alphanum().required()
    });
    return Schema.validate(user);
};
