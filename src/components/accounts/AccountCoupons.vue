<template>
  <div class="col-md-8">
    <div class="row" style="margin-bottom:20px;">
      <div class="col-md-9"></div>
      <div class="col-md-3">
        <div class="d-none d-md-block">
          <button
            class="btn btn-sm pd-x-15 btn-primary btn-uppercase"
            data-toggle="modal"
            data-target="#new-coupon"
          >
            <i data-feather="plus-circle"></i> Add New Coupon
          </button>
        </div>
      </div>
    </div>

    <div class="card mg-b-10">
      <div class="table-responsive pd-25">
        <table class="table table-dashboard mg-b-0">
          <thead>
            <tr>
              <th>Coupon Type</th>
              <th>Coupon Code</th>
              <th>Coupon Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(coupon, index) in coupons" :key="index">
              <td>{{ coupon.couponType }}</td>

              <td>{{ coupon.couponName }}</td>
              <td>{{ coupon.couponValue }}<span v-if="coupon.valueType=='percent'">%</span></td>

              <td>
                <div class="custom-control custom-switch">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customSwitch1"
                    checked
                  />
                  <label class="custom-control-label" for="customSwitch1">{{
                    coupon.status
                  }}</label>
                </div>
              </td>
              <td>
                <a
                  href="#"
                  data-toggle="modal"
                  data-target="#new-room"
                  class="tx-rubik tx-medium tx-uppercase"
                  >Edit</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../../store.js";
import firebase from "firebase";

export default {
  name: "AccountCoupons",
  data() {
    return {
      coupons: []
    };
  },
  methods: {
    setAccountSection(sec) {
      store.commit("setAccountSidebarSelecton", sec);
    }
  },
  created() {
    let dbRef = firebase.firestore().collection("Coupons");
    dbRef.onSnapshot(response => {
      console.log(response);
      let coupons = [];
      response.forEach(item => {
        coupons.push(item.data());
      });
      this.coupons = coupons;
    });
  }
};
</script>
