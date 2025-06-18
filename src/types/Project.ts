export type Project = {
  id: number;
  name: string;
  thumbnail: string;
  shortDescription: string;
  longDescription: string;
  type: string;
  githubUrl: string;
  demoUrl: string;
  techStack: Tech[];
};

type Tech = {
  name: string;
  url: string;
};
