<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import { MonthlyReport } from "../../MonthlyReports.type";
import MonthlyReportCard from "../monthly-report-card/MonthlyReportCard.vue";

type GetMonthlyReportsResponse = MonthlyReport[];

const monthlyReports = ref<MonthlyReport[]>();

const response = await axios.get<GetMonthlyReportsResponse>("/reports");
monthlyReports.value = response.data;
</script>

<template>
  <v-row v-if="monthlyReports">
    <template
      v-for="monthlyReport in monthlyReports"
      :key="`${monthlyReport.year}${monthlyReport.month}`"
    >
      <v-col class="mt-2" cols="12">
        <strong>{{ monthlyReport.year }} / {{ monthlyReport.month }} </strong>
      </v-col>

      <v-col
        v-for="report in monthlyReport.reports"
        :key="report.id"
        cols="12"
        md="6"
        lg="4"
      >
        <monthly-report-card :report="report" />
      </v-col>
    </template>
  </v-row>
</template>
