
                  <template>
  <section>
    <p class="mg-b-20">Wonderful transition effects.</p>
    <div class="row row-xs">
      <div class="form-group col-sm-6">
        <label>City</label>
        <input v-model='city' type="text" class="form-control" placeholder />
      </div>
      <div class="form-group col-sm-6">
        <label>District</label>
        <input v-model='district' type="text" class="form-control" placeholder />
      </div>
      <div class="form-group col-sm-6">
        <label>State</label>
        <input v-model='state' type="text" class="form-control" placeholder />
      </div>
      <div class="form-group col-sm-6">
        <label>Country</label>
        <input v-model='country' type="text" class="form-control" placeholder />
      </div>
      <div class="form-group col-sm-12">
        <label>Google Map Location</label>
        <input v-model='mapLoc' type="text" class="form-control" placeholder />
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
  name: "Location",
  data(){
    return{
      city:null,
      district:null,
      state:null,
      country:null,
      mapLoc:null
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
      let locationFields = {
        city:this.city,
        district:this.district,
        state:this.state,
        country:this.country,
        mapLoc:this.mapLoc
      }
      if(this.regFormPage<8){
        this.$store.commit('SET_REG_FORM_STEP',3);
        this.$store.commit('PUSH_REG_FORM_FIELDS',{'location':locationFields});
      }
      
    },
  }
};
</script>