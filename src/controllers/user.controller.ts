import { GraphQLError } from "graphql";
import { NewUser, UserSchema } from "../config/user.config.js";
import { comparePassword, genPassword, issueJWT } from "../helpers/util.helper.js";
import { User } from "../models/user.model.js";

export const signupUser = (user: UserSchema) : Promise<NewUser | void> => {
    const newPassword = genPassword(user.password);
    const newUser = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        hash: newPassword.hash,
        salt: newPassword.salt
    }
    return User.create(newUser).then(user => {
        const jwt = issueJWT(user.id);
        return {
            token: jwt.token,
            expires: jwt.expires,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone
        }
    }).catch(e => {
        if(e["errors"]["email"]?.message) {
            throw new GraphQLError(e["errors"]["email"]?.message);
        } else if (e["errors"]["phone"]?.message) {
            throw new GraphQLError(e["errors"]["phone"]?.message)
        } else {
            throw new GraphQLError(e.message)
        }
    })
}

export const signinUser = ( user: {email: string, password: string} ) : Promise<NewUser | void> => {
    return User.findOne({ email: user.email }).then(user_result => {
        if(!user_result) {
            throw new GraphQLError("email is not registered!");
        } else {
            const verifyPassword = comparePassword(user.password, user_result.hash, user_result.salt);

            if(!verifyPassword) {
                throw new GraphQLError("wrong password");
            } else {
                const jwt = issueJWT(user_result.id);
                return {
                    firstName: user_result.firstName,
                    lastName: user_result.lastName,
                    email: user_result.email,
                    phone: user_result.phone,
                    token: jwt.token,
                    expires: jwt.expires
                }
            }
        }
    }).catch((e: Error) => {
        throw new GraphQLError(e.message);
    })
}