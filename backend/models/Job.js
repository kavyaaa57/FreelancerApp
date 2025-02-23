import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
    title: String,
    description: String,
    budget: Number,
    employerId: mongoose.Schema.Types.ObjectId,
});

export default mongoose.model('Job', JobSchema);
