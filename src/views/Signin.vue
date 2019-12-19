<template>
  <div class="content content-fixed content-auth">
    <div class="container">
      <div class="media align-items-stretch justify-content-center ht-100p pos-relative">
        <div class="media-body align-items-center d-none d-lg-flex">
          <div class="mx-wd-600">
            <img src="../assets/img/img15.png" class="img-fluid" alt />
          </div>
        </div>
        <!-- media-body -->
        <div class="sign-wrapper mg-lg-l-50 mg-xl-l-60">
          <div class="wd-100p">
            <h3 class="tx-color-01 mg-b-5">Sign In</h3>
            <p class="tx-color-03 tx-16 mg-b-40">Welcome back! Please signin to continue.</p>

            <div class="form-group">
              <label>Email address</label>
              <input
                v-model="email"
                type="email"
                class="form-control"
                placeholder="yourname@yourmail.com"
              />
            </div>
            <div class="form-group">
              <div class="d-flex justify-content-between mg-b-5">
                <label class="mg-b-0-f">Password</label>
                <a href="forgot-password.html" class="tx-13">Forgot password?</a>
              </div>
              <input
                v-model="password"
                type="password"
                class="form-control"
                placeholder="Enter your password"
              />
            </div>
            <button class="btn btn-brand-02 btn-block" @click="signInMethod">Sign In</button>
            <!-- <div class="divider-text">or</div> -->
            <!-- <div class="tx-13 mg-t-20 tx-center">
              Don't have an account?
              <router-link to="signup">Create an Account</router-link>
            </div> -->
          </div>
        </div>
        <!-- sign-wrapper -->
      </div>
      <!-- media -->
    </div>
    <!-- container -->
  </div>
</template>

<script>
import firebase from "firebase";
import router from "../router";

export default {
  name: "signin",
  data() {
    return {
      email: null,
      password: null,
      errors: []
    };
  },
  methods: {
    signInMethod: function() {
      console.log(router);
      if (this.email && this.password) {
        if (this.validEmail(this.email)) {
          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
              (user) =>{
                console.log(user)
                router.replace("dashboard");
                // window.reload()
              }
          );
        }
      } else {
        this.errors.push("items missing");
      }
    },
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  },
  onCreate(){
    console.log(this)
  }
};
</script>