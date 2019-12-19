<template>
  <section>
    <p class="mg-b-20">The next and previous buttons help you to navigate through your content.</p>
    <div class="row row-xs">
      <div class="form-group col-sm-4">
        <label>Closest Airport</label>
        <input v-model="airport" type="text" class="form-control" placeholder />
      </div>
      <div class="form-group col-sm-4">
        <label>Closest Railway Station</label>
        <input v-model="railwayStation" type="text" class="form-control" placeholder />
      </div>
      <div class="form-group col-sm-4">
        <label>Closest Taxi Stand</label>
        <input v-model="taxiStand" type="text" class="form-control" placeholder />
      </div>
      <div class="form-group col-sm-6">
        <label>Closest Landmark</label>
        <div class="input-group">
          <input
            v-model="landmark"
            type="text"
            class="form-control"
            placeholder
            aria-label
            aria-describedby="button-addon2"
          />
          <div class="input-group-append">
            <button class="btn btn-primary" type="button" id="button-addon2" @click="addLandmark">
              <i data-feather="plus-circle"></i> Add New
            </button>
          </div>
        </div>
        <table class="table">
          <tr v-for='(lmrk,index) in landmarks' v-bind:key='"landmark_"+index'>
            <td>{{lmrk}}</td>
            <td>
              <a href="#" class="tx-pink">
                <i data-feather="x-circle"></i>
              </a>
            </td>
          </tr>
          
        </table>
      </div>
      <div class="form-group col-sm-6">
        <label>Tourist Spot</label>
        <div class="input-group">
          <input
            v-model="touristSpot"
            type="text"
            class="form-control"
            placeholder
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <div class="input-group-append">
            <button
              class="btn btn-primary"
              type="button"
              id="button-addon2"
              @click="addTouristSpot"
            >
              <i data-feather="plus-circle"></i> Add New
            </button>
          </div>
        </div>
        <table class="table">
          <tr v-for='(spot,index) in touristSpots' v-bind:key='"spot_"+index'>
            <td>{{spot}}</td>
            <td>
              <a href="#" class="tx-pink">
                <i data-feather="x-circle"></i>
              </a>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <!-- row -->
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
import { mapState, mapMutations } from "vuex";

export default {
  name: "AreaInfo",
  data() {
    return {
      airport: null,
      railwayStation: null,
      taxiStand: null,
      landmarks: [],
      touristSpots: [],
      landmark: null,
      touristSpot: null
    };
  },
  computed: {
    ...mapState(["regFormPage"]),
    ...mapMutations([
      "INCR_REG_FORM_STEP",
      "DECR_REG_FORM_STEP",
      "SET_REG_FORM_STEP"
    ])
  },
  methods: {
    decrRegPage: function() {
      console.log("decrementing");
      if (this.regFormPage > 1) {
        this.$store.commit("SET_REG_FORM_STEP", 3);
      }
    },
    incrRegPage: function() {
      console.log("incrementing");
      let areaInfoFields = {
        airport: this.airport,
        railwayStation: this.railwayStation,
        taxiStand: this.taxiStand,
        landmarks: this.landmarks,
        touristSpots: this.touristSpots
      };
      if (this.regFormPage < 8) {
        this.$store.commit("SET_REG_FORM_STEP", 5);
        this.$store.commit("PUSH_REG_FORM_FIELDS", {
          'areaInfo': areaInfoFields
        });
      }
    },
    addLandmark: function() {
      this.landmarks.push(this.landmark);
      this.landmark = null;
    },
    addTouristSpot: function() {
      this.touristSpots.push(this.touristSpot);
      this.touristSpot = null;
    }
  }
};
</script>
