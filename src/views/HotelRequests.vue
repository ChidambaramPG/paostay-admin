<template>
  <div>
    <NavigationMenu />
    <div class="content content-fixed min-vh-100">
		<div class="container pd-x-0 pd-lg-x-10 pd-xl-x-0">
			<div class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
	          <div>
	            <nav aria-label="breadcrumb">
	              <ol class="breadcrumb breadcrumb-style1 mg-b-10">
	                <li class="breadcrumb-item"><a href="#">Hotels</a></li>
	                <li class="breadcrumb-item active" aria-current="page">Hotel Requests</li>
	              </ol>
	            </nav>
	            <h4 class="mg-b-0 tx-spacing--1">Welcome Samad!</h4>
	          </div>
	          <div class="d-none d-md-block">
	          	<a href="hotels.html" class="btn btn-sm pd-x-15 btn-primary btn-uppercase">Hotels</a>
	            <button class="btn btn-sm pd-x-15 btn-white btn-uppercase mg-l-5">
	            	<i data-feather="refresh-cw" class="wd-10 mg-r-5"></i> Refresh
	            </button>
	          </div>
	        </div>
		    <div class="row row-xs">
		    	<div class="col-lg-12 col-xl-12 mg-t-10">
		            <div class="card mg-b-10">
			            <div class="card-header">
			                <div>
			                  <h6 class="mg-b-0">Recent Hotel Requests</h6>
			                  <!-- <p class="tx-13 tx-color-03 mg-b-0">Your last 10 Bookings</p> -->
			                </div>
			            </div>
			            <div class="table-responsive pd-25">
			                <table class="table table-dashboard mg-b-0" id="booking-history">
			                	<thead>
				                    <tr>
				                      <th>ID</th>
				                      <th>Hotel</th>
				                      <th>Hotel Type</th>
				                      <th>Contact</th>
				                      <th>Phone</th>
				                      <th>Email</th>
				                      <th>Place</th>
				                      <th>Base Price</th>
				                      <th>Details</th>
				                    </tr>
			                  	</thead>
				                <tbody>
				                    <tr v-for="(hotel,index) in pendinghotels" :key="index">
				                      <td>{{index+1}}</td>
				                      <td>{{hotel.general.name}}</td>
				                      <td>
				                      	<div class="tx-16 mg-l-10">
			                                <i class="icon ion-md-star lh-0 tx-orange" 
											v-for="star in parseInt(hotel.general.type)" 
											:key="'star_'+star"></i>
		                               	</div>
				                      </td>
				                      <td>{{hotel.contact.name}}</td>
				                      <td>{{hotel.contact.mobile}}</td>
				                      <td>{{hotel.contact.email}}</td>
				                      <td>{{hotel.location.city}}</td>
				                      <td>{{hotel.general.basePrice}}</td>
				                      <td>
				                      	<a href="#" 
                                          class="btn btn-sm pd-x-15 btn-primary btn-uppercase" 
										  :id="index"
                                          @click="(index) => modalToggle(index)"
                                        > 
                                        View Details
                                        </a>
				                      </td>
				                    </tr>
				                    
				                </tbody>
			                </table>
			            </div>
		            </div>
		        </div>
		    </div>
		</div>
	</div>
    <RequestDetails v-if='showModal' @modalStatus="setModalView" @removeHotelView="removePendingHotel"/>
  </div>
</template>

<script>
import NavigationMenu from "../components/NavigationMenu.vue";
import RequestDetails from "../components/modals/RequestDetails.vue";
import firebase from 'firebase';
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  name: "HotelRequests",
  data() {
    return {
        showModal:false,
		hotelsFetched:false,
		pendinghotels:[],
		selectedPendingIndex:undefined
    };
  },
  computed:{
    
	...mapActions([
		"HOTEL_LIST_ASYNC_FETCH",
		'FILTER_HOTEL_FOR_PENDING'
	])

  },
  methods: {
      modalToggle: function(indx){
		  console.log('view details');
		  this.$store.commit("SET_SELECTED_HOTEL_DETAILS",indx);
		  this.selectedPendingIndex = indx;
		  this.showModal = true;
	  },
	  setModalView: function(){
		this.showModal = false;
	  },
	  removePendingHotel: function(){
		
		this.pendinghotels = this.pendinghotels.splice(this.selectedPendingIndex,1)
	  }
  },

  components: {
    NavigationMenu,
    RequestDetails
  },
  created(){

		console.log("1. fetch request sending")
		this.$store.dispatch("HOTEL_LIST_ASYNC_FETCH").then(() => {
			console.log("6. fetch request completed")
			console.log("7. filter request sending")
			this.$store.dispatch("FILTER_HOTEL_FOR_PENDING").then(()=>{
				console.log("12. filtering request completed")
				this.pendinghotels = this.$store.state.hotelPendingRequests;
			})
		})
  },
};
</script>