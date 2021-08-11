const MainLayout = () => import("layouts/MainLayout.vue");
const AppLayout = () => import("layouts/AppLayout.vue");

const Users = () => import("src/pages/Users.vue");
const Wallet = () => import("src/pages/Wallet.vue");

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [{ path: "", component: Users }]
  },
  {
    path: "/app",
    component: AppLayout,
    children: [{ path: "", component: Wallet }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
