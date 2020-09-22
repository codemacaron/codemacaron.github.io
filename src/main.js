import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

import router from "./router";
import store from "./store";
import firebase from "firebase/app";

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: process.env.VUE_APP_F_API_KEY,
  authDomain: process.env.VUE_APP_F_DATABASEURL_KEY,
  databaseURL: process.env.VUE_APP_F_PROJECTID_KEY,
  projectId: process.env.VUE_APP_F_STORAGEBUCKET_KEY,
  storageBucket: process.env.VUE_APP_F_MESSAGINGSENDERID_KEY,
  appId: process.env.VUE_APP_F_MEASURMENTID_KEY,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
