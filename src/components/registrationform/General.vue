<template>
  <section>
    <p class="mg-b-20">Tell us more about your hotel!</p>
    <div class="row row-xs">
      <div class="form-group col-sm-6">
        <label>Hotel Group</label>
        <input v-model="group" type="text" class="form-control" placeholder />
      </div>
      <div class="form-group col-sm-6">
        <label>Hotel Name</label>
        <input v-model="name" type="text" class="form-control" placeholder />
      </div>
      <div class="col-sm-6">
        <label>Type</label>
        <select v-model="type" class="custom-select" required>
          <option value disabled selected>Select Type</option>
          <option value="5">5 Star</option>
          <option value="4">4 Star</option>
          <option value="3">3 Star</option>
          <option value="2">2 Star</option>
          <option value="1">1 Star</option>
        </select>
      </div>
      <div class="form-group col-sm-6">
        <label>Full Address</label>
        <input v-model="address" type="text" class="form-control" placeholder />
      </div>
    </div>
    <div class="row row-xs">
      <div class="form-group col-sm-3">
        <label>Base Price</label>
        <input v-model="basePrice" type="text" class="form-control" placeholder="₹" />
      </div>
      <div class="form-group col-sm-3">
        <label>Check-in Time</label>
        <input v-model="checkin" type="text" class="form-control" placeholder />
      </div>
      <div class="form-group col-sm-3">
        <label>Check-out Time</label>
        <input v-model="chekout" type="text" class="form-control" placeholder />
      </div>
      <div class="form-group col-sm-3">
        <label>Total Rooms</label>
        <input v-model="rooms" type="text" class="form-control" placeholder />
      </div>
    </div>
    <div class="row row-xs">
      <div class="form-group col-sm-3">
        <label>Phone</label>
        <input v-model="phone" type="text" class="form-control" placeholder />
      </div>
      <div class="form-group col-sm-3">
        <label>Toll Free Number</label>
        <input v-model="tollFree" type="text" class="form-control" placeholder />
      </div>
      <div class="form-group col-sm-3">
        <label>Fax</label>
        <input v-model="fax" type="text" class="form-control" placeholder />
      </div>
      <div class="form-group col-sm-3">
        <label>Cancellation Policy Days</label>
        <input v-model="cancelDays" type="text" class="form-control" placeholder />
      </div>
    </div>
    <div class="row row-xs">
      <div class="form-group col-sm-3">
        <label>Trip Advisor Link</label>
        <input v-model="tripAdvisor" type="text" class="form-control" placeholder />
      </div>
      <div class="form-group col-sm-3">
        <label>Language Spoken</label>
        <input v-model="langSpoken" type="text" class="form-control" placeholder />
      </div>
      <div class="form-group col-sm-3">
        <label>Currency</label>
        <input v-model="currency" type="text" class="form-control" placeholder />
      </div>
      <div class="form-group col-sm-3">
        <label>24x7 Reception</label>
        <select v-model="allDayReception" class="custom-select" required>
          <option value disabled selected>Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
    </div>
    <div class='row'>

      <div class="col-md-2">
        <button class='btn btn-block btn-success' @click='decrRegPage'>Previous</button>
      </div>
      <div class="col-md-8">
        
      </div>
      <div class="col-md-2">
        <button class='btn btn-block btn-info' @click='incrRegPage'>Next</button>
      </div>
      
    </div>
  </section>
</template>

<script>

// import store from '@/store.js';
import { mapState, mapMutations } from 'vuex';

export default {
  name: "General",
  data() {
    return {
      group: null,
      name: null,
      type: null,
      address: null,
      basePrice: null,
      checkin: null,
      chekout: null,
      rooms: null,
      phone: null,
      tollFree: null,
      fax: null,
      cancelDays: null,
      tripAdvisor: null,
      langSpoken: null,
      currency: null,
      allDayReception: null,
    }
  },
  computed:{
    ...mapState([
      'regFormPage'
    ]),
    ...mapMutations([
      'INCR_REG_FORM_STEP',
      'DECR_REG_FORM_STEP',
      'SET_REG_FORM_STEP'
    ]),


  },
  methods:{
    decrRegPage: function(){
      console.log('decrementing');
      if(this.regFormPage>1){
        this.$store.commit('SET_REG_FORM_STEP',1);
      }
      
    },
    incrRegPage: function(){
      console.log('incrementing');
      let generalFields = { 
        group: this.group,
        name: this.name,
        type: this.type,
        address: this.address,
        basePrice: this.basePrice,
        checkin: this.checkin,
        chekout: this.chekout,
        rooms: this.rooms,
        phone: this.phone,
        tollFree: this.tollFree,
        fax: this.fax,
        cancelDays: this.cancelDays,
        tripAdvisor: this.tripAdvisor,
        langSpoken: this.langSpoken,
        currency: this.currency,
        allDayReception: this.allDayReception,
      }
      if(this.regFormPage<8){
        this.$store.commit('SET_REG_FORM_STEP',2);
        this.$store.commit('PUSH_REG_FORM_FIELDS',{'general':generalFields});
      }
      
    },
  }

}
</script>