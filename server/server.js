import { clerkMiddleware, requireAuth } from '@clerk/express';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import aiRouter from './routes/aiRoutes.js';
import userRouter from './routes/userRoutes.js';


const app = express();

// await cloudinary();

app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())

app.get('/', (req, res) => res.send('server is live'));

app.use(requireAuth())

app.use('/api/ai', aiRouter)
app.use('/api/user', userRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
