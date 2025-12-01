import express from 'express';
import { generateResponse } from '../utils/helpers';
import { StudyPlannerInput, StudyPlannerOutput } from '../types';

const router = express.Router();

router.post('/plan', async (req, res) => {
    const userInput: StudyPlannerInput = req.body;

    try {
        const response: StudyPlannerOutput = await generateResponse(userInput);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
});

export default router;