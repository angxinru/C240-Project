const studyPlannerPrompts = {
    generateTimetable: (subjects, studyHours) => `
        Create a study timetable for the following subjects: ${subjects.join(', ')}.
        Allocate a total of ${studyHours} hours for study. Please include breaks and revision days.
    `,
    dailyTasks: (date) => `
        What are the recommended study tasks for ${date}? Please provide a list of tasks to complete.
    `,
    revisionDays: (subject) => `
        Suggest a revision plan for the subject: ${subject}. Include key topics and time allocation.
    `,
    breakTimes: (duration) => `
        Recommend break times during a ${duration}-hour study session. Include short and long breaks.
    `,
    studyTips: () => `
        Provide some effective study tips that can help improve focus and retention.
    `
};

export default studyPlannerPrompts;