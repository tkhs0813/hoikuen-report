<script setup lang="ts">
import baseButton from "@/components/ui/BaseButton.vue";
import { BUTTON_COLOR } from "@/components/ui/BaseButton.constant";
import { useMonthlyReportListStore } from "./MonthlyReportList.store";
import { Report } from "./MonthlyReportList.type";

const props = defineProps<{
  report: Report;
}>();

const monthlyReportListStore = useMonthlyReportListStore();

function onCardClick() {
  monthlyReportListStore.selectReport(props.report);
  monthlyReportListStore.openMonthlyReportViewDialog();
}
</script>

<template>
  <v-card class="mx-auto" max-width="344" @click="onCardClick">
    <v-img :src="report.photoURL" height="200px" cover></v-img>

    <v-card-title>{{ report.type }}</v-card-title>

    <v-card-actions>
      <base-button :color="BUTTON_COLOR.PRIMARY" :block="false">
        見る
      </base-button>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>
