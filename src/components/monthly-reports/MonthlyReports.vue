<script setup lang="ts">
import MonthlyReportList from "./parts/monthly-report-list/MonthlyReportList.vue";
import MonthlyReportViewDialog from "./parts/monthly-report-view-dialog/MonthlyReportViewDialog.vue";
</script>

<template>
  <v-container>
    <Suspense>
      <monthly-report-list />
    </Suspense>
  </v-container>
  <monthly-report-view-dialog />
</template>
