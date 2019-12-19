<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
	        <h5 class="modal-title" id="exampleModalLabel"><i data-feather="check-circle" class="tx-success"></i> Approve Hotel</h5>
	        <button type="button" class="close" @click="closeModal">
	          <span aria-hidden="true">&times;</span>
	        </button>
	      </div>
	      <div class="modal-body pd-40">
	      	<ul class="nav nav-line" id="myTab" role="tablist">
	      	  <li class="nav-item">
	      	    <a class="nav-link" @click.prevent="() => setTabPosition(0)" id="general-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">General</a>
	      	  </li>
	      	  <li class="nav-item">
	      	    <a class="nav-link" @click.prevent ="() => setTabPosition(1)" id="profile-tab" data-toggle="tab" href="#location-tab" role="tab" aria-controls="profile" aria-selected="false">Location</a>
	      	  </li>
	      	  <li class="nav-item">
	      	    <a class="nav-link" @click.prevent ="() => setTabPosition(2)" id="contact-tab" data-toggle="tab" href="#tax-fee" role="tab" aria-controls="contact" aria-selected="false">Taxes & Fee</a>
	      	  </li>
	      	  <li class="nav-item">
	      	    <a class="nav-link" @click.prevent ="() => setTabPosition(3)" id="contact-tab" data-toggle="tab" href="#area-info" role="tab" aria-controls="contact" aria-selected="false">Area Info</a>
	      	  </li>
	      	  <li class="nav-item">
	      	    <a class="nav-link" @click.prevent ="() => setTabPosition(4)" id="contact-tab" data-toggle="tab" href="#amenities" role="tab" aria-controls="contact" aria-selected="false">Amenities</a>
	      	  </li>
	      	  <li class="nav-item">
	      	    <a class="nav-link" @click.prevent ="() => setTabPosition(5)" id="contact-tab" data-toggle="tab" href="#meal-plan" role="tab" aria-controls="contact" aria-selected="false">Meal Plan</a>
	      	  </li>
	      	  <li class="nav-item">
	      	    <a class="nav-link" @click.prevent ="() => setTabPosition(6)" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contacts</a>
	      	  </li>
	      	  <li class="nav-item">
	      	    <a class="nav-link" @click.prevent ="() => setTabPosition(7)" id="contact-tab" data-toggle="tab" href="#hotel-policy" role="tab" aria-controls="contact" aria-selected="false">Hotel Policy</a>
	      	  </li>
	      	</ul>
	      	<div class="tab-content bd bd-gray-300 bd-t-0 pd-20" id="myTabContent">
	      	  <div class="" v-if="tabPosition == 0" id="home" role="tabpanel" aria-labelledby="general-tab">
	      	    <h6>General Details</h6>
	      	    <div class="row">
	      	    	<div class="col-md-6">
    		      	    <ul class="list-group list-group-flush mg-b-0 tx-13">
    		      	    	<li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Hotel Code</span>
    			               <span class="tx-rubik tx-color-03">#971</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Hotel Group</span>
    			               <span class="tx-rubik">{{hotelDetails.general.group}}</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Hotel Name</span>
    			               <span class="tx-rubik">{{hotelDetails.general.name}}</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Hotel Type</span>
    			               	<span class="tx-rubik">
    			               		<div class="tx-16 mg-l-10">
	                                 <i class="icon ion-md-star lh-0 tx-orange" 
									 v-for="(star,index) in parseInt(hotelDetails.general.type)" :key="'star_'+index"></i>
	                               	</div>
    			           		</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Full Address</span>
    			               <span class="tx-rubik">{{hotelDetails.general.address}}</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Phone</span>
    			               <span class="tx-rubik">{{hotelDetails.general.phone}}</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Toll Free Number</span>
    			               <span class="tx-rubik">{{hotelDetails.general.tollFree}}</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Fax</span>
    			               <span class="tx-rubik">{{hotelDetails.general.fax}}</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Rooms</span>
    			               <span class="tx-rubik">{{hotelDetails.general.rooms}}</span>
    			            </li>
    			        </ul>
	      	    	</div>
	      	    	<div class="col-md-6">
    		      	    <ul class="list-group list-group-flush mg-b-0 tx-13">
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Check-in Time</span>
    			               <span class="tx-rubik">{{hotelDetails.general.checkin}}</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Check-out Time</span>
    			               <span class="tx-rubik">{{hotelDetails.general.chekout}}</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Cancellation Policy Days</span>
    			               <span class="tx-rubik">{{hotelDetails.general.cancelDays}}</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Trip Advisor</span>
    			               <span class="tx-rubik">
    			               	<a :href="hotelDetails.general.name" target="_blank">
								   <i data-feather="external-link" class="wd-12 ht-12 stroke-wd-3"></i> View Link
								</a>
    			               </span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Payment Options</span>
    			               <span class="tx-rubik">Online, Offline</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Languages Spoken</span>
    			               <span class="tx-rubik">{{hotelDetails.general.langSpoken}}</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Currency</span>
    			               <span class="tx-rubik">{{hotelDetails.general.currency}}</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">24x7 Reception</span>
    			               <span class="tx-rubik">{{hotelDetails.general.allDayReception}}</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Base Price</span>
    			               <span class="tx-rubik">{{hotelDetails.general.basePrice}}</span>
    			            </li>
    			        </ul>
	      	    	</div>
	      	    </div>
	      	  </div>
	      	  <div class=" " v-if="tabPosition == 1" id="location-tab" role="tabpanel" aria-labelledby="profile-tab">
	      	    <h6>Location Details</h6>
	      	    <div class="row">
	      	    	<div class="col-md-6">
    		      	    <ul class="list-group list-group-flush mg-b-0 tx-13">
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">City</span>
    			               <span class="tx-rubik tx-success">{{hotelDetails.location.city}}</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">District</span>
    			               <span class="tx-rubik">{{hotelDetails.location.district}}</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">State</span>
    			               <span class="tx-rubik">{{hotelDetails.location.state}}</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Country</span>
    			               <span class="tx-rubik">{{hotelDetails.location.country}}</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Google Map Coordinates</span>
    			               <span class="tx-rubik">{{hotelDetails.location.maploc}}</span>
    			            </li>
    			        </ul>
	      	    	</div>
	      	    	<div class="col-md-6">
    		      	    <div class="map-loc">
    		      	    	<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15716.090868949952!2d76.334939!3d10.014982!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x81ee7cc9377b3f9f!2sHotel+Hill+View!5e0!3m2!1sen!2sin!4v1564996199223!5m2!1sen!2sin" width="100%" height="200" frameborder="0" style="border:0" allowfullscreen></iframe>
    		      	    </div>
	      	    	</div>
	      	    </div>
	      	  </div>
	      	  <div class=" " v-if="tabPosition == 2" id="tax-fee" role="tabpanel" aria-labelledby="contact-tab">
	      	    <h6>Taxes & Fee</h6>
	      	    <div class="row">
	      	    	<div class="col-md-6">
    		      	    <ul class="list-group list-group-flush mg-b-0 tx-13">
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">GSTIN</span>
    			               <span class="tx-rubik">{{hotelDetails.tax.gstNum}}</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">VAT Number</span>
    			               <span class="tx-rubik">{{hotelDetails.tax.vatNum}}</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">GST Tax%</span>
    			               <span class="tx-rubik">{{hotelDetails.tax.gstPercent}}%</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">VAT Tax%</span>
    			               <span class="tx-rubik">{{hotelDetails.tax.taxPercent}}%</span>
    			            </li>
    			        </ul>
	      	    	</div>
	      	    	<div class="col-md-6">
    		      	    <ul class="list-group list-group-flush mg-b-0 tx-13">
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Service Charge</span>
    			               <span class="tx-rubik">5%</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Tourism Fee</span>
    			               <span class="tx-rubik">10%</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Municipality Fee</span>
    			               <span class="tx-rubik">2%</span>
    			            </li>
    			        </ul>
	      	    	</div>
	      	    </div>
	      	  </div>
	      	  <div class=" " v-if="tabPosition == 3" id="area-info" role="tabpanel" aria-labelledby="contact-tab">
	      	    <h6>Area Info</h6>
	      	    <div class="row">
	      	    	<div class="col-md-6">
    		      	    <ul class="list-group list-group-flush mg-b-0 tx-13">
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between"
								v-for="(landmark,index) in hotelDetails.areaInfo.landmarks"
								:key="'landmak_'+index"
							>
    			               <span class="tx-medium">Closest Landmark {{index + 1}}</span>
    			               <span class="tx-rubik">{{landmark}}</span>
    			            </li>
    			            
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Closest Airport</span>
    			               <span class="tx-rubik">{{hotelDetails.areaInfo.airport}}</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Closest Railway Station</span>
    			               <span class="tx-rubik">{{hotelDetails.areaInfo.railwayStation}}</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Closest Taxi Stand</span>
    			               <span class="tx-rubik">{{hotelDetails.areaInfo.taxiStand}}</span>
    			            </li>
    			        </ul>
	      	    	</div>
	      	    	<div class="col-md-6">
    		      	    <ul class="list-group list-group-flush mg-b-0 tx-13">
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between"
								v-for="(spot,index) in hotelDetails.areaInfo.touristSpots"
								:key="'landmak_'+index"
							>
    			               <span class="tx-medium">Tourist Spot {{index + 1}}</span>
    			               <span class="tx-rubik">{{spot}}</span>
    			            </li>
    			            
    			        </ul>
	      	    	</div>
	      	    </div>
	      	  </div>
	      	  <div class=" " v-if="tabPosition == 4" id="amenities" role="tabpanel" aria-labelledby="contact-tab">
	      	    <h6>Amenities</h6>
	      	    <div class="row">
	      	    	<div class="col-md-6">
    		      	    <ul class="list-group list-group-flush mg-b-0 tx-13">
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Free parking</span>
    			               <span class="tx-rubik tx-success">Yes</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Gym / Workout Room </span>
    			               <span class="tx-rubik tx-success">Yes</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Babysitting</span>
    			               <span class="tx-rubik tx-success">Yes</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Business Centre</span>
    			               <span class="tx-rubik tx-success">Yes</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Free internet</span>
    			               <span class="tx-rubik tx-success">Yes</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Public wifi</span>
    			               <span class="tx-rubik tx-success">Yes</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Restaurant</span>
    			               <span class="tx-rubik tx-success">Yes</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Dry cleaning</span>
    			               <span class="tx-rubik tx-success">Yes</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Free High Speed Internet (WiFi)</span>
    			               <span class="tx-rubik tx-success">Yes</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Bar / lounge</span>
    			               <span class="tx-rubik tx-pink">No</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Swimming Pool</span>
    			               <span class="tx-rubik tx-success">Yes</span>
    			            </li>
    			            
    			        </ul>
	      	    	</div>
	      	    	<div class="col-md-6">
    		      	    <ul class="list-group list-group-flush mg-b-0 tx-13">
    		      	    	<li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Kid / Family Friendly</span>
    			               <span class="tx-rubik tx-success">Yes</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Concierge</span>
    			               <span class="tx-rubik tx-pink">No</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Wifi</span>
    			               <span class="tx-rubik tx-success">Yes</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Non-smoking hotel</span>
    			               <span class="tx-rubik tx-success">Yes</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Laundry service</span>
    			               <span class="tx-rubik tx-success">Yes</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Non-smoking rooms</span>
    			               <span class="tx-rubik tx-success">Yes</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Air conditioning</span>
    			               <span class="tx-rubik tx-success">Yes</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Family rooms</span>
    			               <span class="tx-rubik tx-success">Yes</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Room service</span>
    			               <span class="tx-rubik tx-success">Yes</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Couple Friedly</span>
    			               <span class="tx-rubik tx-success">Yes</span>
    			            </li>
    			            <li class="list-group-item pd-x-0 d-flex justify-content-between">
    			               <span class="tx-medium">Wheelchair Accessible</span>
    			               <span class="tx-rubik tx-success">Yes</span>
    			            </li>
    			        </ul>
	      	    	</div>
	      	    </div>
	      	  </div>
	      	  <div class=" " v-if="tabPosition == 5" id="meal-plan" role="tabpanel" aria-labelledby="contact-tab">
	      	  	<h6>Meal Plan</h6>
	      	  	<ul class="list-group list-group-flush mg-b-0 tx-13">
		            <li class="list-group-item pd-x-0 d-flex justify-content-between">
		               <span class="tx-medium">Room including all meals</span>
		               <span class="tx-rubik tx-pink">{{hotelDetails.meals.allMeals}}</span>
		            </li>
		            <li class="list-group-item pd-x-0 d-flex justify-content-between">
		               <span class="tx-medium">Room including breakfast and any one meal</span>
		               <span class="tx-rubik tx-success">{{hotelDetails.meals.BFandOne}}</span>
		            </li>
		            <li class="list-group-item pd-x-0 d-flex justify-content-between">
		               <span class="tx-medium">Room including only breakfast</span>
		               <span class="tx-rubik tx-success">{{hotelDetails.meals.onlyBF}}</span>
		            </li>
		            <li class="list-group-item pd-x-0 d-flex justify-content-between">
		               <span class="tx-medium">Only Room (Without any meals)</span>
		               <span class="tx-rubik tx-success">{{hotelDetails.meals.noMeal}}</span>
		            </li>
		        </ul>
	      	  </div>
	      	  <div class=" " v-if="tabPosition == 6" id="contact" role="tabpanel" aria-labelledby="contact-tab">
	      	  	<h6>Contacts</h6>
	      	  	<table class="table">
	      	  		<thead>
	      	  			<tr>
	      	  				<th>Person Name</th>
	      	  				<th>Designation</th>
	      	  				<th>Email</th>
	      	  				<th>Mobile Number</th>
	      	  				<th>WhatsApp</th>
	      	  				<th>Type</th>
	      	  			</tr>
	      	  		</thead>
	      	  		<tbody>
	      	  			<tr>
	      	  				<td>{{hotelDetails.contact.name}}</td>
	      	  				<td>{{hotelDetails.contact.designation}}</td>
	      	  				<td>
	      	  					<a :href="'mailto:'+hotelDetails.contact.email" 
									target="_blank" 
									class="tx-info" 
									title="jon@gmail.com">{{hotelDetails.contact.email}}</a>
	      	  				</td>
	      	  				<td>{{hotelDetails.contact.mobile}}</td>
	      	  				<td>
	      	  					<a :href="'https://wa.me/'+hotelDetails.contact.mobile+'?text=Hello'" 
									target="_blank" class="tx-success">
									<i class="icon ion-logo-whatsapp"></i>
								</a>
	      	  				</td>
	      	  				<td>{{hotelDetails.contact.type}}</td>
	      	  			</tr>
	      	  			
	      	  		</tbody>
	      	  	</table>
	      	  </div>
	      	  <div class=" " v-if="tabPosition == 7" id="hotel-policy" role="tabpanel" aria-labelledby="contact-tab">
	      	  	<h6>Contacts</h6>
	      	  	<table class="table">
	      	  		<thead>
	      	  			<tr>
	      	  				<th>Policy</th>
	      	  				<th>Details</th>
	      	  			</tr>
	      	  		</thead>
	      	  		<tbody>
	      	  			<tr v-for="(policy,index) in hotelDetails.policy" :key="index">
	      	  				<td>{{policy.name}}</td>
	      	  				<td>{{policy.description}}</td>
	      	  			</tr>
	      	  			
	      	  		</tbody>
	      	  	</table>
	      	  </div>
	      	</div>
	      </div>
	      <div class="modal-footer">
	        <button type="button" 
				:id="hotelDetails.uid" 
				class="btn btn-secondary" 
				@click.prevent="rejectHotel($event)"> Reject
			</button>
			<button type="button" 
				:id="hotelDetails.uid" 
				class="btn btn-primary" 
				@click.prevent="acceptHotel($event)">
					<i data-feather="check-circle" ></i> Approve
			</button>
	      </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

import { mapState, mapMutations, mapActions } from "vuex";
import firebase from 'firebase';

export default {
  name: "RequestDetails",
  data(){
      return {
		  tabPosition:0,
		  hotelDetails:[]
      }
  },
  methods: {
      setTabPosition: function(secNum){
        // event.preventDefault();
        console.log('setting section :',secNum);
        this.tabPosition = secNum;
	  },
	  closeModal: function(){
		this.$emit("modalStatus",false)
	  },
	  acceptHotel: function(event){
		event.preventDefault();
		console.log(event.target.id)
		let hotelref = firebase.firestore().collection("Hotels").doc(event.target.id);
		hotelref.update({
			status:"accepted"
		});
		this.$emit("modalStatus",false);
		this.$emit("removeHotelView");

	  },
	  rejectHotel: function(event){
		event.preventDefault();
		console.log(event.target.id)
		let hotelref = firebase.firestore().collection("Hotels").doc(event.target.id);
		hotelref.update({status:"rejected"});
		this.$emit("modalStatus",false);
		
	  }

  },
  created(){
	  this.hotelDetails = this.$store.state.selectedHotel;
  }
};
</script>

<style>
    .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
    }

    .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
    }

    .modal-container {
    /* width: 90%; */
    margin: 3	0px;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header h3 {
    margin-top: 0;
    color: #42b983;
    }

    .modal-body {
    margin: 20px 0;
    }

    .modal-default-button {
    float: right;
    }
	.modal{
		display: block !important; /* I added this to see the modal, you don't need this */
		width:80%;
	}

	/* Important part */
	.modal-dialog{
		overflow-y: initial !important
	}
	.modal-body{
		height: 300px;
		
		overflow-y: auto;
	}

    /*
    * The following styles are auto-applied to elements with
    * transition="modal" when their visibility is toggled
    * by Vue.js.
    *
    * You can easily play with the modal transition by editing
    * these styles.
    */

    .modal-enter {
    opacity: 0;
    }

    .modal-leave-active {
    opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    }
    
</style>