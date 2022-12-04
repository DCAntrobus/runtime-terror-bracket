import mongoose, { Schema } from 'mongoose';

const Scheme = mongoose.Schema;

const teamSchema = new Schema({
    name: String,
    score: Number
}, {
    timestamps: true,
    collection: 'teams'
});

export default mongoose.model('Team', teamSchema);

