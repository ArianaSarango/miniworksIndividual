export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  distance: string;
  pay: number;
  status: 'Disponible' | 'Aceptado' | 'Cerrado';
  description: string;
  tags?: string[];
  postedDate?: string;
  applicants?: number;
  views?: number;
}

export interface Session {
  id: number;
  device: string;
  location: string;
  ip: string;
  lastActive: string;
  current: boolean;
  type: 'desktop' | 'mobile';
}

export interface User {
  name: string;
  role: 'Student' | 'Employer';
  email: string;
  organization: string;
  avatarUrl: string;
}