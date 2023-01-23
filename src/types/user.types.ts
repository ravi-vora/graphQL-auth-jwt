export const UserTypeDefs = `#graphql
    scalar EmailAddress
    scalar PhoneNumber
    scalar FirstName
    scalar LastName
    scalar Password

    type User {
        id: ID!,
        firstName: FirstName!,
        lastName: LastName!,
        email: EmailAddress!,
        phone: PhoneNumber!
    }

    type NewUser {
        id: ID!
        firstName: FirstName!,
        lastName: LastName!,
        email: EmailAddress!,
        phone: PhoneNumber!,
        token: String!,
        expires: String!
    }

    type Query {
        users: [User!]!,
        signinUser(
            email: EmailAddress!
            password: Password!
        ): NewUser!
        auth: User!
    }

    type Mutation {
        signupUser(
            firstName: FirstName!
            lastName: LastName!
            email: EmailAddress!
            phone: PhoneNumber!
            password: Password!
        ): NewUser!
    }
`;