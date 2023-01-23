import {GraphQLError, GraphQLScalarType} from 'graphql'
import { validateEmail, validatePhone } from '../helpers/util.helper.js';

/**
 * Email Address 
 */
const emailValidation = (value) => {
    if ( typeof value !== 'string' ) throw new GraphQLError(`Value is not string : ${value}`);
    if ( !validateEmail(value) ) throw new GraphQLError(`Value is not a valid email address : ${value}`);
    return value;
}

const GraphQLEmailAddressConfig = {
    name: 'EmailAddress',
    description: "A valid email address",
    serialize: emailValidation,
    parseValue: emailValidation,
    ParseLiteral: (ast) => ast.value
}

/**
 * Phone Number
 */
const phoneValidation = (value) => {
    if ( typeof value !== 'string' ) throw new GraphQLError(`Value is not string : ${value}`);
    if ( !validatePhone(value) ) throw new GraphQLError(`Value is not a valid Phone number : ${value}`);
    return value;
}

const GraphQLPhoneNumberConfig = {
    name: 'PhoneNumber',
    description: "A valid Phone number",
    serialize: phoneValidation,
    parseValue: phoneValidation,
    ParseLiteral: (ast) => ast.value
}

/**
 * First name
 */
const firstNameValidation = (value) => {
    if ( typeof value !== 'string' ) throw new GraphQLError(`Value is not string : ${value}`);
    if ( value.length < 2 ) throw new GraphQLError(`Value is too short : ${value}`);
    if ( value.length > 12 ) throw new GraphQLError(`Value is too long : ${value}`);
    return value;
}

const GraphQLFirstNameConfig = {
    name: 'FirstName',
    description: "A valid firstname",
    serialize: firstNameValidation,
    parseValue: firstNameValidation,
    ParseLiteral: (ast) => ast.value
}

/**
 * Last name
 */
const lastNameValidation = (value) => {
    if ( typeof value !== 'string' ) throw new GraphQLError(`Value is not string : ${value}`);
    if ( value.length < 2 ) throw new GraphQLError(`Value is too short : ${value}`);
    if ( value.length > 12 ) throw new GraphQLError(`Value is too long : ${value}`);
    return value;
}

const GraphQLLastNameConfig = {
    name: 'LastName',
    description: "A valid lastname",
    serialize: lastNameValidation,
    parseValue: lastNameValidation,
    ParseLiteral: (ast) => ast.value
}

/**
 * Password
 */
const passwordValidation = (value) => {
    if ( typeof value !== 'string' ) throw new GraphQLError(`Value is not string : ${value}`);
    if ( value.length < 8 ) throw new GraphQLError(`Value is too short, atleast 8 character required : ${value}`);
    if ( value.length > 14 ) throw new GraphQLError(`Value is too long, maximum 14 character allowed : ${value}`);
    if ( value.search(/[a-z]/i) < 0 ) throw new GraphQLError(`Value must contain atleast one letter : ${value}`);
    if ( value.search(/[0-9]/) < 0 ) throw new GraphQLError(`Value must contain atleast one digit : ${value}`);
    return value;
}

const GraphQLPasswordConfig = {
    name: 'Password',
    description: "A valid password",
    serialize: passwordValidation,
    parseValue: passwordValidation,
    ParseLiteral: (ast) => ast.value
}

export const GraphQLEmailAddress = new GraphQLScalarType(GraphQLEmailAddressConfig);
export const GraphQLPhoneNumber = new GraphQLScalarType(GraphQLPhoneNumberConfig);
export const GraphQLFirstName = new GraphQLScalarType(GraphQLFirstNameConfig);
export const GraphQLLastName = new GraphQLScalarType(GraphQLLastNameConfig);
export const GraphQLPassword = new GraphQLScalarType(GraphQLPasswordConfig);