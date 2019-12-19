
<template>
  <section>
    <p class="mg-b-20">The next and previous buttons help you to navigate through your content.</p>
    <div class="row row-sm">
      <div class="col-md-4">
        <div class="custom-control custom-switch mg-t-10" v-for='(amn,index) in amenities' :key='"amenity_"+index'>
          <input type="checkbox"  class="custom-control-input amenity-input" :id='"amenity_"+index' />
          <label class="custom-control-label" :for='"amenity_"+index'>{{amn.id}}</label>
        </div>        
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
  name: "Amenities",
  data(){
    return{
      hotelAmenities:[]
    }
  },
  created() {
    this.$store.commit("GET_ALL_AMENITIES");
  },
  computed:{
    ...mapState([
      'regFormPage',
      'amenities'
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
        this.$store.commit('SET_REG_FORM_STEP',4);
      }
      
    },
    incrRegPage: function(){
      console.log('incrementing');
      let amenityFields = {}
      let inputElems = document.getElementsByClassName('amenity-input');
      console.log(inputElems);

      for (var i = 0; i < inputElems.length; i++) {
          amenityFields[i] = { status:inputElems[i].checked };
      }
      
      console.log(amenityFields);

      if(this.regFormPage<8){
        this.$store.commit('SET_REG_FORM_STEP',6);
        this.$store.commit('PUSH_REG_FORM_FIELDS',{'amenities':amenityFields});
      }
      
    },
  }
};
</script>