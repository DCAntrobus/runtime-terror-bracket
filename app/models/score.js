import mongoose, { Schema } from 'mongoose';

const Scheme = mongoose.Schema;

const scoreSchema = new Schema({
    scoreNumber: Number,
    tournamentID: String,
    score: Number
}, {
    timestamps: true,
    collection: 'scores'
});

export default mongoose.model('Score', scoreSchema);