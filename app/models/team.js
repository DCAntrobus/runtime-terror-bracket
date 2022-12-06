import mongoose, { Schema } from 'mongoose';

const Scheme = mongoose.Schema;

const teamSchema = new Schema({
    name: String,
    teamNumber: Number,
    tournamentID: String,
    scoreR16: Number,
    scoreQF: Number,
    scoreSF: Number,
    scoreFinal: Number
}, {
    timestamps: true,
    collection: 'teams'
});

export default mongoose.model('Team', teamSchema);

