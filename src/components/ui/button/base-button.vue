<script setup lang="ts">
import { ButtonType, ButtonColor } from "./button.type";

withDefaults(
  defineProps<{
    type?: ButtonType;
    color: ButtonColor;
    icon?: boolean;
    block?: boolean;
  }>(),
  {
    type: undefined,
    icon: false,
    block: true,
  }
);

defineEmits(["click"]);
</script>

<template>
  <v-btn
    :color="color"
    :block="block"
    :type="type"
    :icon="icon"
    @click="$emit('click')"
  >
    <slot></slot>
  </v-btn>
</template>
