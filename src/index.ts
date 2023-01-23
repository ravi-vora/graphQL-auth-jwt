import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import {Types} from './types/index.types.js'
import {Resolvers} from './resolvers/index.resolver.js'
import { connectToDatabase } from './services/database.service.js';
import { verifyJwt } from './helpers/util.helper.js';
import { User } from './models/user.model.js';

const server = new ApolloServer({typeDefs: Types, resolvers: Resolvers});


try {
    connectToDatabase().then( async () => {
        const { url } = await startStandaloneServer(server, {
            listen: { port: parseInt(process.argv[2]) || 3000 },
            context: async ({ req }) => {
                const token = req.headers.authorization || '';
                const validateToken = verifyJwt(token);
                var user = null;
                if( validateToken.validate ) {
                    user = await User.findById(validateToken.id);
                }
                return {
                    user
                }
            }
        })
        
        console.log(`API is hosted at url : ${url}`)
    }).catch((e : Error) => {
        console.log(`server crashed : ${e.message}`)    
    })
} catch(e) {
    console.log(`server crashed : ${e.message}`)
}