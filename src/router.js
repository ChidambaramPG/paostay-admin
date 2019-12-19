import firebase from "firebase";
import Vue from "vue";
import Router from "vue-router";

import Signin from "./views/Signin.vue";
import Dashboard from "./views/Dashboard.vue";
import Booking from "./views/Booking.vue";
import Hotels from "./views/Hotels.vue";
import HotelRequests from "./views/HotelRequests.vue";
import Account from "./views/Account.vue";
import Users from './views/Users.vue';

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "signin",
      component: Signin
    },
    {
      path: "/signin",
      name: "signin",
      component: Signin,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/booking",
      name: "booking",
      component: Booking,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/hotels",
      name: "hotels",
      component: Hotels,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/hotel-requests",
      name: "hotel-requests",
      component: HotelRequests,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/account",
      name: "account",
      component: Account,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/users",
      name: "users",
      component: Users,
      meta: {
        requiresAuth: true
      }
    },
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  console.log("<----------- BEFORE EACH ----------->");
  console.log("current user: ", currentUser);
  console.log("requires auth : ", requiresAuth);

  if (requiresAuth && !currentUser) next("signin");
  else if (!requiresAuth && currentUser ) next("dashboard");
  // else if (!requiresAuth && currentUser ) next(to);
  else next();
});

export default router;
