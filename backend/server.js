import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

import authRoutes from './routes/authRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`✅ MongoDB Connected`);
    app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
  })
  .catch((error) => console.error('❌ MongoDB Connection Failed:', error.message));
