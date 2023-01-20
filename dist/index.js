import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { Types } from './types/index.types.js';
import { Resolvers } from './resolvers/index.resolver.js';
console.log(Types);
const server = new ApolloServer({ typeDefs: Types, resolvers: Resolvers });
try {
    const { url } = await startStandaloneServer(server, {
        listen: { port: parseInt(process.argv[2]) || 3000 },
    });
    console.log(`API is hosted at url : ${url}`);
}
catch (e) {
    console.log(`server crashed : ${e.message}`);
}
