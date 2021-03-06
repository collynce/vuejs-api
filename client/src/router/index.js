import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Requests from "../components/Requests";
import Api from "../components/HelloWorld";
import Auth from "../components/Auth";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import {ActionContext as store} from "vuex";

Vue.use(VueRouter);


const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
            meta: {
                requiresAuth: true
            },
        },
        {
            path: "/about",
            name: "about",
            component: () =>
                import(/* webpackChunkName: "about" */ "../views/About.vue")
        },
        {
            path: '/requests',
            component: Requests,
        },
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
        },
        {
            path: '/api/:id',
            component: Api,
        }
    ]
});
// router.beforeEach(function (to, from, next) {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (store.getters.isLoggedIn) {
//             next();
//             return
//         }
//         next('/login')
//     } else {
//         next()
//     }
// });

export default router;
