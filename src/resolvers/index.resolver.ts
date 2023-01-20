import { UserResolver } from "./user.resolver.js";
import { GraphQLEmailType } from '../scalars/utils.scalar.js'


export const Resolvers = {
    Query: {
        ...UserResolver
    },
    Email: GraphQLEmailType
}