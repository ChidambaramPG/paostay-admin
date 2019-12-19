<template>
  <div class="row row-xs">
    <div class="col-lg-12 col-xl-12 mg-t-10">
      <div class="card mg-b-10">
        <div class="card-header">
          <div>
            <h6 class="mg-b-0">Your Most Recent Bookings</h6>
            <!-- <p class="tx-13 tx-color-03 mg-b-0">Your last 10 Bookings</p> -->
          </div>
        </div>
        <div class="table-responsive pd-25">
          <table class="table table-dashboard mg-b-0" id="booking-history">
            <thead>
              <tr>
                <th>Date</th>
                <th>ID</th>
                <th>Name</th>
                <th>Hotel Name</th>
                <th>Nights</th>
                <th>Occupancy</th>
                <th>Price</th>
                <th>Arrival</th>
                <th>Departure</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <SingleBooking v-for="(request,index) in requests" :key="index" :data="request"/>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
import SingleBooking from "./SingleBooking.vue";
export default {
    name:"AllBookings",
    data(){
        return{
            requests:[]
        }
    },
    created(){
        // firebase request 
        firebase.firestore().collection("Booking").get().then(res => {
            if(!res.empty){
                res.forEach( item => {
                    console.log(item.data())
                    this.requests.push({...item.data(),id:item.key});
                })
            }

        })
    },
    methods:{
        
    },
    components:{
        SingleBooking,
    }
}
</script>