import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Requests from "../components/Requests";
import Api from "../components/HelloWorld";
import Auth from "../components/Auth";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path:'/requests',
    component: Requests,
    children: [
      {
        path: '/auth',
        component: Auth,
        children: [
          {
            path: '/login',
            component: Login
          },
          {
            path: '/signup',
            component: Signup
          }
        ]
      }
    ]
  },
  {
    path:'/api/:id',
    component: Api,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
