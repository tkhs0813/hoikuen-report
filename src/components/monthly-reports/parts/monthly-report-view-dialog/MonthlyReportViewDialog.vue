<script setup lang="ts">
import { useMonthlyReportsStore } from "../../MonthlyReports.store";
import baseButton from "@/components/ui/button/base-button.vue";
import { BUTTON_COLOR } from "@/components/ui/button/button.constant";

const monthlyReportsStore = useMonthlyReportsStore();

function onCloseButtonClick() {
  monthlyReportsStore.closeMonthlyReportViewDialog();
  monthlyReportsStore.selectedReport = null;
}
</script>

<template>
  <v-dialog v-model="monthlyReportsStore.monthlyReportViewDialog" width="80%">
    <v-card>
      <v-img :src="monthlyReportsStore.selectedReport?.photoURL" cover></v-img>
      <v-card-actions>
        <base-button :color="BUTTON_COLOR.PRIMARY" @click="onCloseButtonClick">
          閉じる
        </base-button>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
