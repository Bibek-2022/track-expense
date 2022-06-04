import mongoose from 'mongoose'

const UserSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: [50, 'Name must be less than 50 characters']
    },
    email: {
        type: String,
        unique: true,
        index: 1,
        required: true,
        maxLength: [50, 'Name must be less than 50 characters']
    },
    password: {
        type: String,
        required: true,
        minLength: [5, 'Password must be more than 5 characters'],
        maxLength: [50, 'Password must be less than 50 characters']
    },

}, 
{
    timestamps: true
})

//we just created a new schema called UserSchema, now time to convert that schem into a real table in our database
export default mongoose.model('User', UserSchema) // users