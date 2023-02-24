<script lang="ts" setup>
import { defineProps, toRef } from "vue";
import { useField } from "vee-validate";
import { TextBoxType } from "./textbox.type";

const props = defineProps<{
  modelValue: string;
  name: string;
  type: TextBoxType;
  label: string;
}>();

defineEmits(["update:modelValue"]);

const { value, errors } = useField(
  toRef(props, "name").value as string,
  undefined
);
</script>

<template>
  <v-text-field
    :value="value"
    :label="label"
    :error-messages="errors"
    :type="type"
    variant="outlined"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
