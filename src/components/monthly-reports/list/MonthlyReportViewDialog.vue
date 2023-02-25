<script setup lang="ts">
import { useMonthlyReportListStore } from "./MonthlyReportList.store";
import baseButton from "@/components/ui/BaseButton.vue";
import { BUTTON_COLOR } from "@/components/ui/BaseButton.constant";

const monthlyReportListStore = useMonthlyReportListStore();

function onCloseButtonClick() {
  monthlyReportListStore.closeMonthlyReportViewDialog();
  monthlyReportListStore.selectedReport = null;
}
</script>

<template>
  <v-dialog
    v-model="monthlyReportListStore.monthlyReportViewDialog"
    width="80%"
  >
    <v-card>
      <v-img
        :src="monthlyReportListStore.selectedReport?.photoURL"
        cover
      ></v-img>
      <v-card-actions>
        <base-button :color="BUTTON_COLOR.PRIMARY" @click="onCloseButtonClick">
          閉じる
        </base-button>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
