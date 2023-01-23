import { GraphQLError, GraphQLScalarType } from 'graphql';
import { validateEmail } from '../helpers/util.helper.js';
const emailValidation = (value) => {
    if (typeof value !== 'string')
        throw new GraphQLError(`Value is not string : ${value}`);
    if (!validateEmail(value))
        throw new GraphQLError(`Value is not a valid email address : ${value}`);
    return value;
};
const GraphQLEmailAddressConfig = {
    name: 'EmailAddress',
    description: "A valid email address",
    serialize: emailValidation,
    parseValue: (value) => value,
    ParseLiteral: (ast) => ast.value
};
export const GraphQLEmailAddress = new GraphQLScalarType(GraphQLEmailAddressConfig);
