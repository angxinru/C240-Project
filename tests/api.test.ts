import { requestStudyPlan, getStudyTips } from '../src/api/index';

describe('Study Planner Chatbot API', () => {
    test('should return a study plan for given subjects and time', async () => {
        const subjects = ['Math', 'Science'];
        const availableTime = 10; // in hours
        const response = await requestStudyPlan(subjects, availableTime);
        
        expect(response).toHaveProperty('studyPlan');
        expect(response.studyPlan).toBeDefined();
        expect(response.studyPlan).toContain('Math');
        expect(response.studyPlan).toContain('Science');
    });

    test('should return study tips', async () => {
        const response = await getStudyTips();
        
        expect(response).toHaveProperty('tips');
        expect(response.tips).toBeInstanceOf(Array);
        expect(response.tips.length).toBeGreaterThan(0);
    });

    test('should handle empty subjects input', async () => {
        const subjects = [];
        const availableTime = 5; // in hours
        const response = await requestStudyPlan(subjects, availableTime);
        
        expect(response).toHaveProperty('error');
        expect(response.error).toBe('No subjects provided');
    });

    test('should handle excessive available time', async () => {
        const subjects = ['History'];
        const availableTime = 100; // in hours
        const response = await requestStudyPlan(subjects, availableTime);
        
        expect(response).toHaveProperty('studyPlan');
        expect(response.studyPlan).toBeDefined();
    });
});