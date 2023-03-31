const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/suma", component: () => import("pages/SumaPage.vue") },
      { path: "/resta", component: () => import("pages/RestaPage.vue") },
      {
        path: "/multiplicacion",
        component: () => import("src/pages/MultiplicacionPage.vue"),
      },
      { path: "/division", component: () => import("pages/DivisionPage.vue") },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
