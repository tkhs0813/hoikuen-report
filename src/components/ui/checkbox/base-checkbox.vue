<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string;
  }>(),
  {
    label: "",
  }
);
</script>
<template>
  <v-checkbox :label="label" hide-details></v-checkbox>
</template>
