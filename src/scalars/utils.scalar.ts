import {GraphQLError, GraphQLScalarType} from 'graphql'
import { validateEmail } from '../helpers/util.helper.js';

const checkEmail = (value: string) => {
    if(!validateEmail(value)) {
        throw new GraphQLError("not a valid email address", {
            extensions: { code: 'BAD_USER_EMAIL' }
        })
    } else return value.trim().toString()
}

const GraphQLEmailTypeConfig = {
    name: 'Email',
    description: 'valid email address',
    serialize: checkEmail,
    parseValue: checkEmail
}

export const GraphQLEmailType = new GraphQLScalarType(GraphQLEmailTypeConfig);