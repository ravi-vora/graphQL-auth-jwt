import { GraphQLError } from "graphql";
import { signupUser, signinUser } from "../controllers/user.controller.js";
import { validateUserSignin, validateUserSignup } from "../middleware/user.middleware.js";
var Resolver = {};
Resolver['users'] = () => {
    return [
        {
            id: "1",
            firstName: "ravi",
            lastName: "vora",
            email: "ravi@gmail.com",
            phone: "+919328620376"
        },
        {
            id: "2",
            firstName: "ravi1",
            lastName: "vora1",
            email: "ravi1323@gmail.com",
            phone: "+919725104377"
        }
    ];
};
Resolver['signupUser'] = (_, args) => {
    const userValidate = validateUserSignup({
        firstName: args.firstName,
        lastName: args.lastName,
        email: args.email,
        phone: args.phone,
        password: args.password
    });
    if (userValidate.error) {
        throw new GraphQLError(userValidate.error.message);
    }
    else {
        const response = signupUser({
            firstName: args.firstName,
            lastName: args.lastName,
            email: args.email,
            phone: args.phone,
            password: args.password
        });
        return response;
    }
};
Resolver['signinUser'] = (_, args) => {
    const userValidate = validateUserSignin({
        email: args.email,
        password: args.password
    });
    if (userValidate.error) {
        throw new GraphQLError(userValidate.error.message);
    }
    else {
        const response = signinUser({
            email: args.email,
            password: args.password
        });
        return response;
    }
};
Resolver['auth'] = (_, args, context) => {
    if (context.user) {
        return context.user;
    }
    else {
        throw new GraphQLError("Unauthorized");
    }
};
export const UserResolver = Resolver;
