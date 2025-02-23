import express from 'express';
import Job from '../models/Job.js';

const router = express.Router();

// Get all jobs
router.get('/', async (req, res) => {
    const jobs = await Job.find();
    res.json(jobs);
});

// Create a new job
router.post('/', async (req, res) => {
    const { title, description, budget, employerId } = req.body;
    const job = new Job({ title, description, budget, employerId });
    await job.save();
    res.status(201).json({ message: 'Job created', job });
});

export default router;
