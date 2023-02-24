import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/layouts/BlankLayout.vue"),
      children: [
        {
          path: "/",
          redirect: "/monthly-reports",
        },
        {
          path: "/login",
          name: "LoginPage",
          component: () => import("@/components/login/LoginPage.vue"),
        },
      ],
    },
    {
      path: "/monthly-reports",
      component: () => import("@/layouts/defaultLayout.vue"),
      children: [
        {
          path: "",
          name: "MonthlyReports",
          component: () =>
            import("@/components/monthly-reports/MonthlyReports.vue"),
        },
      ],
    },
  ],
});

export default router;
