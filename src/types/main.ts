export interface mentor {
  id: number;
  name: string;
  image: string;
  description: string;
}

export interface mentorList {
  mentors: mentor[];
}
