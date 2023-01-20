var Resolver = {}

Resolver['user'] = () => {
    return [
        {
            id: 1,
            email: "ravi@gmail.com",
            phone: "+919328620376"
        },
        {
            id: 2,
            email: "ravi1323@gmail.com",
            phone: "+919725104377"
        }
    ]
}

Resolver['signupUser'] = (_, args) => {
    return {
        id: 1,
        email: args.email,
        phone: "+919328620376"
    }
}

export const UserResolver = Resolver;