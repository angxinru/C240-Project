export const formatStudyPlan = (studyPlan: any): string => {
    // Format the study plan into a readable string
    return JSON.stringify(studyPlan, null, 2);
};

export const validateInput = (input: any): boolean => {
    // Validate user input for required fields
    return input.subject && input.time && input.tasks.length > 0;
};

export const calculateStudyHours = (startTime: string, endTime: string): number => {
    // Calculate the number of study hours between start and end time
    const start = new Date(`1970-01-01T${startTime}:00`);
    const end = new Date(`1970-01-01T${endTime}:00`);
    const hours = (end.getTime() - start.getTime()) / (1000 * 60 * 60);
    return hours >= 0 ? hours : 0;
};