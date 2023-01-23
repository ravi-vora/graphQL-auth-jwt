import { UserResolver } from "./user.resolver.js";
import { 
    GraphQLEmailAddress, 
    GraphQLPhoneNumber, 
    GraphQLFirstName, 
    GraphQLLastName, 
    GraphQLPassword
} from '../scalars/user.scalar.js'


export const Resolvers = {
    EmailAddress: GraphQLEmailAddress,
    PhoneNumber: GraphQLPhoneNumber,
    FirstName: GraphQLFirstName,
    LastName: GraphQLLastName,
    Password: GraphQLPassword,
    Query: {
        "users": UserResolver['users'],
        "signinUser": UserResolver["signinUser"],
        "auth": UserResolver["auth"]
    },
    Mutation: {
        "signupUser": UserResolver["signupUser"]
    }
}