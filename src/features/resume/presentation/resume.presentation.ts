export type ResumePresentation = {
  basics: {
    name: string;
    label: string;
    email: string;
    phone: string;
    website: string;
    summary: string;
    // other fields...
  };
  work: {
    company: string;
    position: string;
    website: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
  }[];
  // other sections...
};
