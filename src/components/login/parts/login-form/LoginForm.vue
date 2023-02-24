<script setup lang="ts">
import * as yup from "yup";

import BaseTextBox from "@/components/ui/textbox/base-textbox.vue";
import BaseForm from "@/components/ui/form/base-form.vue";
import BaseButton from "@/components/ui/button/base-button.vue";
import BaseCheckbox from "@/components/ui/checkbox/base-checkbox.vue";
import BaseLink from "@/components/ui/link/base-link.vue";
import {
  BUTTON_COLOR,
  BUTTON_TYPE,
} from "@/components/ui/button/button.constant";
import { TEXTBOX_TYPE } from "@/components/ui/textbox/textbox.constant";
import { ref } from "vue";

const schema = yup.object({
  email: yup.string().email().required().label("email"),
  password: yup.string().min(6).required().label("password"),
});

const email = ref("");
const password = ref("");

function submit() {
  return;
}
</script>

<template>
  <base-form :validation-schema="schema" @submit="submit">
    <base-text-box
      v-model="email"
      name="email"
      label="Email"
      :type="TEXTBOX_TYPE.EMAIL"
      class="mt-4"
    />
    <base-text-box
      v-model="password"
      name="password"
      label="Password"
      :type="TEXTBOX_TYPE.PASSWORD"
      class="mt-4"
    />
    <div class="d-flex align-center mb-4 mb-sm-0">
      <base-checkbox label="Remember me?" />
      <div class="ml-auto">
        <base-link to="/">ホームに戻る</base-link>
      </div>
    </div>
    <base-button
      :type="BUTTON_TYPE.SUBMIT"
      :color="BUTTON_COLOR.SECONDARY"
      class="mr-4"
    >
      Sign In
    </base-button>
  </base-form>

  <div class="text-center mt-6">
    <div class="d-flex align-center justify-center gap-2">
      <base-button
        :color="BUTTON_COLOR.SECONDARY"
        :icon="true"
        :block="false"
        class="mr-4"
      >
        <v-icon>mdi-twitter</v-icon>
      </base-button>
      <base-button :color="BUTTON_COLOR.PRIMARY" :icon="true" :block="false">
        <v-icon>mdi-github</v-icon>
      </base-button>
    </div>
  </div>
</template>
