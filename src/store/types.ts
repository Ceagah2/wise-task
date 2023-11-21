export interface UserDataProps {
  name: string;
  email: string;
  imageUrl: string;
  costPerHour: string;
  role: string;
  taxPrice: string;
  personalCost: string;
}

export interface TaskProps {
  [x: string]: any;
  id: string;
  title: string;
  description: string;
  estimatedTime: string;
  elapsedTime: string;
  createdAt: string;
  updatedAt: string;
  status: boolean;
}
export interface JobsProps {
  [x: string]: any;
  id: string;
  name: string;
  description: string;
  estimatedTime: string;
  elapsedTime: string;
  createdAt: string;
  updatedAt: string;
  responsible: string;
  responsibleContact: string;
  tasks: TaskProps[];
}
export interface UserJobsProps {
  jobs: JobsProps[];
}