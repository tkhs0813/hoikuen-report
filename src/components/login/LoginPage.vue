<script setup lang="ts">
import LoginForm from "./parts/login-form/LoginForm.vue";
</script>

<template>
  <v-row class="h-100vh">
    <v-col cols="12" class="d-flex align-center justify-center">
      <v-container>
        <div class="pa-7 pa-sm-12">
          <v-row justify="center">
            <v-col cols="12" lg="9" xl="6">
              <h2 class="font-weight-bold">ログイン</h2>
              <h6 class="text-subtitle-1 text-grey-darken-1">
                アカウントをお持ちでない方は
                <a
                  href="javascript:void(0)"
                  class="text-primary text-decoration-none"
                >
                  アカウント登録
                </a>
              </h6>

              <LoginForm />
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-col>
  </v-row>
</template>
