import { defineStore } from "pinia";
import { Report } from "./MonthlyReportList.type";

type State = {
  selectedReport: Report | null;
  monthlyReportViewDialog: boolean;
};

export const useMonthlyReportListStore = defineStore("monthlyReportList", {
  state: (): State => {
    return {
      /** 選択したレポート */
      selectedReport: null,
      /** レポート閲覧ダイアログの開閉状態 */
      monthlyReportViewDialog: false,
    };
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
