import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/layouts/headerOnlyLayout.vue"),
      children: [
        {
          path: "/",
          redirect: "/monthly-reports",
        },
        {
          path: "/login",
          name: "LoginPage",
          component: () => import("@/components/login/Login.page.vue"),
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
            import(
              "@/components/monthly-reports/list/MonthlyReportList.page.vue"
            ),
        },
      ],
    },
  ],
});

export default router;
