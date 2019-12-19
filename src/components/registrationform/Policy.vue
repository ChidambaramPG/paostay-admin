<template>
  <section>
    <p class="mg-b-20">The next and previous buttons help you to navigate through your content.</p>
    <div class="row row-sm">
      <div class="form-group col-sm-3">
        <label>Policy Name</label>
        <input v-model="policyName" type="text" class="form-control" placeholder="Privacy Policy" />
      </div>
      <div class="form-group col-sm-9">
        <label>Details</label>
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Policy Details"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            v-model="policyDesc"
          />
          <div class="input-group-append">
            <button class="btn btn-primary" type="button" id="button-addon2" @click="addPolicy">
              <i data-feather="plus-circle"></i> Add New
            </button>
          </div>
        </div>
      </div>
      <div class="form-group col-sm-12">
        <table class="table">
          <tr>
            <th>Policy Name</th>
            <th>Details</th>
            <th>Action</th>
          </tr>
          <tr v-for="(pol,index) in policies" :key="'policy_'+index">
            <td>{{pol.name}}</td>
            <td>{{pol.description}}</td>
            <td>
              <a href="#" class="tx-pink">
                <i data-feather="x-circle"></i>
              </a>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-md-2">
        <button class="btn btn-block btn-success" @click="decrRegPage">Previous</button>
      </div>
      <div class="col-md-8"></div>
      <div class="col-md-2">
        <button class="btn btn-block btn-info" @click="finishRegPage">Finish</button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "Policy",
  data() {
    return {
      policies: [],
      policy: null,
      policyName: null,
      policyDesc: null
    };
  },
  computed: {
    ...mapState(["regFormPage", "amenities"]),
    ...mapMutations([
      "INCR_REG_FORM_STEP",
      "DECR_REG_FORM_STEP",
      "SET_REG_FORM_STEP",
      "SET_HOTEL_DETAILS"
    ]),
    ...mapActions([
      'SET_HOTEL_DETAILS'
    ])
  },
  methods: {
    decrRegPage: function() {
      console.log("decrementing");
      if (this.regFormPage > 1) {
        this.$store.commit("SET_REG_FORM_STEP", 6);
      }
    },
    incrRegPage: function() {
      console.log("incrementing");

      if (this.regFormPage < 8) {
        this.$store.commit("SET_REG_FORM_STEP", 8);
        this.$store.commit("PUSH_REG_FORM_FIELDS", { policy: this.policies });
      }
    },
    addPolicy: function() {
      this.policies.push({
        name: this.policyName,
        description: this.policyDesc
      });
      this.policyName = null;
      this.policyDesc = null;
    },
    finishRegPage: function() {
      console.log("finishing");

      // if (this.regFormPage < 8) {
        this.$store.commit("PUSH_REG_FORM_FIELDS", { policy: this.policies });
        this.$store.dispatch("SET_HOTEL_DETAILS");
      // }
    }
  }
};
</script>
