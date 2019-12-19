<template>
  <section>
    <p class="mg-b-20">The next and previous buttons help you to navigate through your content.</p>
    <div class="row row-sm">
      <div class="form-group col-sm-4">
        <label>Name</label>
        <input v-model='name' type="text" class="form-control" placeholder />
      </div>
      <div class="form-group col-sm-4">
        <label>Designation</label>
        <input v-model='designation' type="text" class="form-control" placeholder />
      </div>
      <div class="form-group col-sm-4">
        <label>Email</label>
        <input v-model='email' type="text" class="form-control" placeholder />
      </div>
      <div class="form-group col-sm-4">
        <label>Mobile Number</label>
        <input v-model='mobile' type="text" class="form-control" placeholder />
      </div>
      <div class="form-group col-sm-4">
        <label>WhatsApp Number</label>
        <input v-model='whatsApp' type="text" class="form-control" placeholder />
      </div>
      <div class="form-group col-sm-4">
        <label>Type</label>
        <select v-model='type' class="form-control">
          <option value="Primary Point of Contact">Primary Point of Contact</option>
          <option value="Reservation Contact">Reservation Contact</option>
          <option value="Availability Contact">Availability Contact</option>
          <option value="Photo/Description Contact">Photo/Description Contact</option>
          <option value="Pricing Contact">Pricing Contact</option>
          <option value="Pricing Contact">Contracts Contact</option>
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

import { mapState, mapMutations } from 'vuex';

export default {
  name: "Contacts",
  data(){
    return {
      name:null,
      designation:null,
      email:null,
      mobile:null,
      whatsApp:null,
      type:null
    }
  },
  computed:{
    ...mapState([
      'regFormPage',
      'amenities'
    ]),
    ...mapMutations([
      'INCR_REG_FORM_STEP',
      'DECR_REG_FORM_STEP',
      'SET_REG_FORM_STEP',
      'PUSH_REG_FORM_FIELDS'
    ]),


  },
  methods:{
    decrRegPage: function(){
      console.log('decrementing');
      if(this.regFormPage>1){
        this.$store.commit('SET_REG_FORM_STEP',6);
      }
      
    },
    incrRegPage: function(){
      console.log('incrementing');

      let contactFields = {
        name:this.name,
        designation:this.designation,
        email:this.email,
        mobile:this.mobile,
        whatsApp:this.whatsApp,
        type:this.type,
      }
      
      if(this.regFormPage<8){
        this.$store.commit('SET_REG_FORM_STEP',8);
        this.$store.commit('PUSH_REG_FORM_FIELDS',{'contact':contactFields});
      }
      
    },
    
  }
};
</script>