export interface UserInput {
    subjects: string[];
    studyHours: number;
    preferredStudyTimes: string[];
    revisionDays: string[];
}

export interface StudyPlan {
    timetable: Record<string, string[]>;
    dailyTasks: string[];
    breakTimes: string[];
    studyTips: string[];
}

export interface ApiResponse {
    success: boolean;
    message: string;
    data?: StudyPlan;
}