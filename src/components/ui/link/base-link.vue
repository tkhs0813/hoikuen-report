<script setup lang="ts">
defineProps<{ to: string }>();
</script>

<template>
  <RouterLink :to="to" class="text-primary text-decoration-none">
    <slot></slot
  ></RouterLink>
</template>
