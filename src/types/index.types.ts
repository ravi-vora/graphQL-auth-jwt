import { UserTypeDefs } from './user.types.js'

const allTypes = [UserTypeDefs];

var types = ``;

allTypes.forEach((type : String) => {
    types += type;
})

export const Types = types;