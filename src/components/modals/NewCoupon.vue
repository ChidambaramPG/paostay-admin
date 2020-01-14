<template>
  <div
    class="modal fade"
    id="new-coupon"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            <i data-feather="layers" class="tx-primary tx-12"></i> New Coupon
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form action="">
            <div class="form-group mg-b-10">
              <label for="">Coupon Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="PAO50"
                v-model="name"
              />
            </div>
            <div class="form-group mg-b-10">
              <label for="">Type</label>
              <select
                v-model="type"
                class="form-control rooms"
                @change="event => changeCouponType(event)"
              >
                <option value="general" selected>General</option>
                <option value="specific">Specific</option>
              </select>
            </div>
            <div class="form-group mg-b-10" v-if="viewHotelSection">
              <label for="">Hotel</label>
              <select v-model="hotel" class="form-control rooms">
                <option
                  v-for="(hotel, index) in allHotels"
                  :key="index"
                  :value="hotel"
                  >{{hotel.general.name}}</option
                >
              </select>
            </div>
            <div class="form-group mg-b-10">
              <label for="">Percent Or Amount</label>
              <select v-model="valueType" class="form-control rooms">
                <option value="percent">Percent</option>
                <option value="amount">Amount</option>
              </select>
            </div>
            <div class="form-group mg-b-10">
              <label for="">Value</label>
              <input
                type="text"
                class="form-control"
                placeholder="85,500"
                v-model="value"
              />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Cancel
          </button>
          <button type="button" class="btn btn-primary" @click="addNewCoupon" data-dismiss="modal">
            Add Coupon
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../../store.js";
import firebase from "firebase";

export default {
  name: "NewCoupon",
  data() {
    return {
      name: "",
      type: "",
      hotel: null,
      valueType: "",
      value: "",
      viewHotelSection: false,
      errors: [],
      allHotels:[]
    };
  },
  computed: {
    
  },
  created() {
    // store.dispatch("HOTEL_LIST_ASYNC_FETCH");
    let hotels = []
    firebase.firestore().collection("Hotels").get().then(resp => {
        resp.forEach(hotel => {
            hotels.push({...hotel.data(),hid:hotel.id})
        })
        this.allHotels = hotels;
    })
  },
  methods: {
    changeCouponType(event) {
      console.log(event.target.value);
      if (event.target.value == "specific") {
        this.viewHotelSection = true;
      } else {
        this.viewHotelSection = false;
      }
    },
    addNewCoupon() {
      console.log("adding coupon");
      if (this.valueType == "percent" && this.value > 100) {
        this.errors.push("percent can only be less than 100");
        return;
      } else if (this.type == "specfic" && hotel == null) {
        this.errors.push("select a hotel for specalised offers");
        return;
      } else if (this.name == "") {
        this.errors.push("name is required");
        return;
      } else if (this.value == "") {
        this.errors.push("value is required");
        return;
      } else {
        this.errors = [];
      }

      if (this.errors.length < 1) {
          if(this.type == 'specific'){
              firebase.firestore().collection('Coupons').add({
                couponName:this.name,
                couponType:this.type,
                couponHotel:this.hotel.hid,
                couponValueType:this.valueType,
                couponValue:this.value,
                status:'active'
            }).then(resp => {
                console.log(resp);
            })
          }else{
            firebase.firestore().collection('Coupons').add({
                couponName:this.name,
                couponType:this.type,
                couponHotel:"",
                couponValueType:this.valueType,
                couponValue:this.value,
                status:'active'
            }).then(resp => {
                console.log(resp);
            })
          }
          
      }
    }
  }
};
</script>
