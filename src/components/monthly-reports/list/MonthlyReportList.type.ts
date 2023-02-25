export type Report = {
  id: string;
  type: string;
  photoURL: string;
};

export type MonthlyReport = {
  year: number;
  month: number;
  reports: Report[];
};
