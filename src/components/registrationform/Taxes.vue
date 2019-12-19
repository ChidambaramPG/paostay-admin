<template>
    <section>
        <p class="mg-b-20" >The next and previous buttons help you to navigate through your content.</p>
        <div class="row row-xs">
            <div class="form-group col-sm-6">
            <label>GSTIN</label>
            <input v-model='gstNum' type="text" class="form-control" placeholder />
            </div>
            <div class="form-group col-sm-6">
            <label>VAT Number</label>
            <input v-model='vatNum' type="text" class="form-control" placeholder />
            </div>
            <div class="form-group col-sm-6">
            <label>GST Tax%</label>
            <input v-model='gstPercent' type="text" class="form-control" placeholder />
            </div>
            <div class="form-group col-sm-6">
            <label>VAT Tax%</label>
            <input v-model='vatPercent' type="text" class="form-control" placeholder />
            </div>
            <div class="form-group col-sm-4">
            <label>Service Charge</label>
            <input v-model='serviceChange' type="text" class="form-control" placeholder />
            </div>
            <div class="form-group col-sm-4">
            <label>Tourism Fee</label>
            <input v-model='tourismFee' type="text" class="form-control" placeholder />
            </div>
            <div class="form-group col-sm-4">
            <label>Municipality Fee</label>
            <input v-model='municipalityFee' type="text" class="form-control" placeholder />
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
  name: "Taxes",
  data(){
    return{
      gstNum:null,
      vatNum:null,
      gstPercent:null,
      vatPercent:null,
      serviceChange:null,
      tourismFee:null,
      municipalityFee:null
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
        this.$store.commit('SET_REG_FORM_STEP',2);
      }
      
    },
    incrRegPage: function(){
      console.log('incrementing');
      let taxFields = {
        gstNum:this.gstNum,
        vatNum:this.vatNum,
        gstPercent:this.gstPercent,
        vatPercent:this.vatPercent,
        serviceChange:this.serviceChange,
        tourismFee:this.tourismFee,
        municipalityFee:this.municipalityFee,
      }
      if(this.regFormPage<8){
        this.$store.commit('SET_REG_FORM_STEP',4);
        this.$store.commit('PUSH_REG_FORM_FIELDS',{'tax':taxFields});
      }
      
    },
  }
  
};
</script>
