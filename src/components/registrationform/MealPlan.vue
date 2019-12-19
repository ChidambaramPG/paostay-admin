<template>
  <section>
    <p class="mg-b-20">The next and previous buttons help you to navigate through your content.</p>
    <div class="row row-sm">
      <div class="col-md-6">
        <div class="custom-control custom-switch mg-t-10">
          <input type="checkbox" class="custom-control-input mealplan" id="customSwitch1" @click='toggleState("allMeals")' />
          <label class="custom-control-label" for="customSwitch1">Room including all meals</label>
        </div>
        <div class="custom-control custom-switch mg-t-10">
          <input type="checkbox" class="custom-control-input mealplan" id="customSwitch2" @click='toggleState("BFandOne")' />
          <label
            class="custom-control-label"
            for="customSwitch2"
          >Room including breakfast and any one meal</label>
        </div>
        <div class="custom-control custom-switch mg-t-10">
          <input type="checkbox" class="custom-control-input mealplan" id="customSwitch3" @click='toggleState("onlyBF")' />
          <label class="custom-control-label" for="customSwitch3">Room including only breakfast</label>
        </div>
        <div class="custom-control custom-switch mg-t-10">
          <input type="checkbox" class="custom-control-input mealplan" id="customSwitch4" @click='toggleState("noMeal")' />
          <label class="custom-control-label" for="customSwitch4">Only Room (Without any meals)</label>
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
  name: "MealPlan",
  data(){
    return{
      allMeals:false,
      onlyBF:false,
      BFandOne:false,
      noMeal:false
    }
  },
  computed:{
    ...mapState([
      'regFormPage',
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
        this.$store.commit('SET_REG_FORM_STEP',5);
      }
      
    },
    incrRegPage: function(){
      console.log('incrementing');
      let mealFields = {
          allMeals:this.allMeals,
          onlyBF:this.onlyBF,
          BFandOne:this.BFandOne,
          noMeal:this.noMeal,
      }

      if(this.regFormPage<8){
        this.$store.commit('SET_REG_FORM_STEP',7);
        this.$store.commit('PUSH_REG_FORM_FIELDS',{'meals':mealFields});
      }
      
    },
    toggleState:function(itm){
      switch(itm){

        case 'allMeals':
          if(this.allMeals == true){
            this.allMeals = false;
          }else{
            this.allMeals = true;
          }
          break;
        
        case 'BFandOne':
          if(this.BFandOne == true){
            this.BFandOne = false;
          }else{
            this.BFandOne = true;
          }
          break;
        
        case 'onlyBF':
          if(this.onlyBF == true){
            this.onlyBF = false;
          }else{
            this.onlyBF = true;
          }
          break;
        
        case 'noMeal':
          if(this.noMeal == true){
            this.noMeal = false;
          }else{
            this.noMeal = true;
          }
          break;
        
      }
    }
  }
};
</script>
