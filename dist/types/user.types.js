export const UserTypeDefs = `#graphql
    scalar Email

    type User {
        id: ID!
        email: Email!
        phone: String!
    }

    type Query {
        user: [User!]!
        signupUser(email: Email!, password: String!): User!
    }
`;
