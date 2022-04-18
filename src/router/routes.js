const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Homepage.vue") },
    { path: "about", component: () => import("pages/About.vue") },
    { path: "countries/:id", component: () => import("pages/Countries/Countries.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("src/pages/Errors/Error404.vue"),
  },
];

export default routes;
