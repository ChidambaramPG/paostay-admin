import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import firebase from "firebase";
import store from "./store";


let app = "";

var firebaseConfig = {
  apiKey: "AIzaSyD3UWA40FepiY2xzadKKFrUp09ndcUcm-M",
  authDomain: "paostay-test-backend.firebaseapp.com",
  databaseURL: "https://paostay-test-backend.firebaseio.com",
  projectId: "paostay-test-backend",
  storageBucket: "paostay-test-backend.appspot.com",
  messagingSenderId: "997785228088",
  appId: "1:997785228088:web:4528fabf8e11b332aba7cd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((st) => {
  console.log(st);
  console.log("auth state changed");
  if (!app) {
    console.log('initializing vue');
    Vue.config.productionTip = false;
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount("#app");
