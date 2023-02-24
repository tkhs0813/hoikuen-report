import { defineStore } from "pinia";
import { Report } from "./MonthlyReports.type";

type State = {
  selectedReport: Report | null;
  monthlyReportViewDialog: boolean;
};

export const useMonthlyReportsStore = defineStore("monthlyReports", {
  state: (): State => {
    return { selectedReport: null, monthlyReportViewDialog: false };
  },
  actions: {
    selectReport(report: Report) {
      this.selectedReport = report;
    },
    openMonthlyReportViewDialog() {
      this.monthlyReportViewDialog = true;
    },
    closeMonthlyReportViewDialog() {
      this.monthlyReportViewDialog = false;
    },
  },
});
