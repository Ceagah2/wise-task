import User from '@/assets/user.png';
import { atom } from "jotai";
import { JobsProps, TaskProps, UserJobsProps, type UserDataProps } from "./types";

export const userDataAtom = atom<UserDataProps>({
  name: "",
  email: "",
  imageUrl: User,
  costPerHour: "",
  role: "",
  taxPrice: "",
  personalCost: "",
})
export const tasksAtom = atom<TaskProps[]>([]);

export const jobsAtom = atom<JobsProps[]>([])

export const userJobsAtom = atom<UserJobsProps>({
  jobs: [],
})