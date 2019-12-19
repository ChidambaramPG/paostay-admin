<template>
  <div>
    <NaigationMenu/>
    <div class="content content-fixed min-vh-100">
      <div class="container pd-x-0 pd-lg-x-10 pd-xl-x-0">
        <div class="d-sm-flex align-items-center justify-content-between">
          <div>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-style1 mg-b-10">
                <li class="breadcrumb-item">
                  <a href="#">Hotel Details</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Submit your request</li>
              </ol>
            </nav>
            <h4 class="mg-b-0 tx-spacing--1">Welcome John!</h4>
          </div>
        </div>
        <div class="row row-xs">
          <div class="col-lg-12 col-xl-12 mg-t-30">
            <div class="card mg-b-10 pd-25">
              <div class="tx-13 mg-b-25 pd-20">
                <div>
                  <div v-if="regFormPage==1">
                    <h3>General</h3>
                    <General/>
                  </div>

                  <div v-if="regFormPage==2">
                    <h3>Location</h3>
                    <Location />
                  </div>

                  <div v-if="regFormPage==3">
                    <h3>Taxes & Fee</h3>
                    <Taxes />
                  </div>

                  <div v-if="regFormPage==4">
                    <h3>Area Info</h3>
                    <AreaInfo />
                  </div>

                  <div v-if="regFormPage==5">
                    <h3>Amenities</h3>
                    <Amenities />
                  </div>

                  <div v-if="regFormPage==6">
                    <h3>Meal Plan</h3>
                    <MealPlan />
                  </div>

                  <div v-if="regFormPage==7">
                    <h3>Contacts</h3>
                    <Contacts />
                  </div>

                  <div v-if="regFormPage==8">
                    <h3>Hotel Policy</h3>
                    <Policy />
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import firebase from "firebase";

import General from "@/components/registrationform/General.vue";
import Location from "@/components/registrationform/Location.vue";
import Taxes from "@/components/registrationform/Taxes.vue";
import AreaInfo from "@/components/registrationform/AreaInfo.vue";
import Amenities from "@/components/registrationform/Amenities.vue";
import MealPlan from "@/components/registrationform/MealPlan.vue";
import Contacts from "@/components/registrationform/Contacts.vue";
import Policy from "@/components/registrationform/Policy.vue";
import NaigationMenu from "@/components/NavigationMenu.vue";

import { mapState } from 'vuex';

export default {
  name: "RegistrationForm",
  components: {
    General,
    Location,
    Taxes,
    AreaInfo,
    Amenities,
    MealPlan,
    Contacts,
    NaigationMenu,
    Policy,
  },
  data() {
    return {
      email: null,
      password: null,
      name: null,
      hotel: null,
      errors: [],
    };
  },
  computed:{

    ...mapState([
      'regFormPage'
    ]),

  },
  methods: {
    signUpMethod: function() {
      if (this.email && this.password && this.name && this.hotel) {
        if (this.validEmail(this.email)) {
          firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .then(
              function(user) {
                console.log("account has been created");
              },
              function(err) {
                console.log(err);
              }
            );
        }
      } else {
        this.errors.push("items missing");
      }
    },
    validEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    
  }
};
</script>