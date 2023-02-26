<script setup lang="ts">
import MonthlyReportList from "./MonthlyReportList.vue";
import MonthlyReportViewDialog from "./MonthlyReportViewDialog.vue";
</script>

<template>
  <v-row class="h-100vh">
    <v-col cols="12" class="d-flex align-center justify-center">
      <v-container>
        <div class="pa-7 pa-sm-12">
          <Suspense>
            <monthly-report-list />
          </Suspense>
        </div>
      </v-container>
    </v-col>
  </v-row>
  <v-container> </v-container>
  <monthly-report-view-dialog />
</template>
