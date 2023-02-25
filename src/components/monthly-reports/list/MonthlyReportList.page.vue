<script setup lang="ts">
import MonthlyReportList from "./MonthlyReportList.vue";
import MonthlyReportViewDialog from "./MonthlyReportViewDialog.vue";
</script>

<template>
  <v-container>
    <Suspense>
      <monthly-report-list />
    </Suspense>
  </v-container>
  <monthly-report-view-dialog />
</template>
