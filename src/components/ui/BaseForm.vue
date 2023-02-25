<script setup lang="ts">
import { Form } from "vee-validate";
import { OptionalObjectSchema } from "yup/lib/object";

defineProps<{
  validationSchema: OptionalObjectSchema<any, any, any>;
}>();

const emits = defineEmits<{ (e: "submit"): void }>();

const onSubmit = () => {
  emits("submit");
};
</script>
<template>
  <Form as="v-form" :validation-schema="validationSchema" @submit="onSubmit">
    <slot></slot>
  </Form>
</template>
