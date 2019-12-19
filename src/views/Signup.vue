<template>
    <div class="content content-auth">
        <div class="container">
            <div class="media align-items-stretch justify-content-center ht-100p">
                <div class="sign-wrapper mg-lg-r-50 mg-xl-r-60">
                    <div class="pd-t-20 wd-100p">
                        <h4 class="tx-color-01 mg-b-5">Create New Account</h4>
                        <p class="tx-color-03 tx-16 mg-b-40">It's free to signup and only takes a minute.</p>
                        <div class="form-group mg-b-10">
                            <label>Email address</label>
                            <input v-model='email' type="email" class="form-control" placeholder="bruce@gmail.com">
                        </div>
                        <div class="form-group mg-b-10">
                            <div class="d-flex justify-content-between mg-b-5">
                                <label class="mg-b-0-f">Password</label>
                            </div>
                            <input v-model='password' type="password" class="form-control" placeholder="Enter your password">
                        </div>
                        <div class="form-group mg-b-10">
                            <label>Your Name</label>
                            <input v-model='name' type="text" class="form-control" placeholder="Bruce Wayne">
                        </div>
                        <div class="form-group mg-b-10">
                            <label>Hotel</label>
                            <input v-model='hotel' type="text" class="form-control" placeholder="Hotel Taj">
                        </div>
                        <div class="form-group mg-b-10 tx-12">
                            By clicking <strong>Create an account</strong> below, you agree to our terms of service and privacy statement.
                        </div><!-- form-group -->
                        <button class="btn btn-brand-02 btn-block" @click='signUpMethod'>Create Account</button>
                        <div class="divider-text">or</div>
                        <div class="tx-13 mg-t-20 tx-center">Already have an account? <router-link to="signin">Sign In</router-link></div>
                    </div>
                </div><!-- sign-wrapper -->
                <div class="media-body pd-y-30 pd-lg-x-50 pd-xl-x-60 align-items-center d-none d-lg-flex pos-relative">
                    <div class="mx-lg-wd-500 mx-xl-wd-550">
                        <img src="../assets/img/img16.png" class="img-fluid" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase';

    export default {
        name: "signup",
        data() {
            return {
                email:null,
                password:null,
                name:null,
                hotel:null,
                errors:[]
            }
        },
        methods:{
            signUpMethod() {
                
                if(this.email && this.password && this.name && this.hotel){

                    if(this.validEmail(this.email)){
                        firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(
                            function(user){
                                console.log('account has been created');
                                // console.log(this)
                                // routeToLink('dashboard')
                                this.$router.replace("dashboard")
                            },
                            function(err){
                                console.log(err)
                            }
                        )
                    }

                }else{
                    this.errors.push('items missing')
                }
                
            },
            validEmail: function (email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }
        }
    };
    const routeToLink = (link) => {
        console.log(this)
        this.$router.replace(link)
    }
</script>