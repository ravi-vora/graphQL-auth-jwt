import mongoose, { Schema } from 'mongoose';
const UserCollectionSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    hash: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    }
});
/**
 * hide some credentials to query by accident
 */
UserCollectionSchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj["hash"];
    delete obj["salt"];
    delete obj["__v"];
    return obj;
};
UserCollectionSchema.path("email").validate(async (email) => {
    const count = await mongoose.models.user.countDocuments({ email });
    return !count;
}, "'email' already registered.");
UserCollectionSchema.path("phone").validate(async (phone) => {
    const count = await mongoose.models.user.countDocuments({ phone });
    return !count;
}, "'phone' already registered.");
export const User = mongoose.model('user', UserCollectionSchema);
