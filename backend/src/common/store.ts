export type Role = 'admin' | 'manager' | 'teacher' | 'student';

export interface User {
  id: string;
  role: Role;
  username: string;
  password: string;
  schoolCode?: string;
  classCode?: string;
  fullName: string;
  suspended?: boolean;
}

export interface ChatMessage {
  id: string;
  chatId: string;
  senderId: string;
  text: string;
  createdAt: string;
}

export interface Exam {
  id: string;
  title: string;
  classCode: string;
  active: boolean;
  durationMinutes: number;
}

export const store = {
  users: [
    { id: '1', role: 'admin', username: 'admin', password: 'admin123', fullName: 'ادمین آزمیک' },
    { id: '2', role: 'teacher', username: 'teacher1', password: 'teacher123', schoolCode: 'SCH-1', fullName: 'زهرا احمدی' },
    { id: '3', role: 'student', username: 'student1', password: 'student123', classCode: 'CLS-101', fullName: 'علی رضایی' }
  ] as User[],
  messages: [] as ChatMessage[],
  exams: [
    { id: 'ex-1', title: 'ریاضی', classCode: 'CLS-101', active: true, durationMinutes: 25 }
  ] as Exam[],
  announcements: [{ id: 'n1', text: 'به آزمیک خوش آمدید', createdAt: new Date().toISOString() }],
  settings: {
    chatClosed: false,
    aiChatClosed: false,
    searchClosed: false
  }
};
