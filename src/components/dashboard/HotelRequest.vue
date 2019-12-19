<template>
    <div class="col-sm-6 col-lg-4 mg-t-10">
        <div class="card">
            <div class="card-header d-flex justify-content-between">
                <h6 class="lh-5 mg-b-0">
                    <i class="icon ion-ios-bed"></i>
                    Hotel Request
                    <span class="tx-medium tx-pink mg-r-5">1/{{requests.length}}</span>
                </h6>
                <div class="d-flex align-items-center tx-18">
                    <a href class="link-03 lh-0">
                        <i class="wd-20 ht-20 ion ion-md-arrow-dropleft"></i>
                    </a>
                    <a href class="link-03 lh-0 mg-l-10" @click="incrReqShown">
                        <i class="wd-20 ht-20 ion ion-md-arrow-dropright"></i>
                    </a>
                </div>
            </div>
            <!-- card-header -->
            <div class="card-body pd-x-20 pd-b-10"  v-if="requests.length > 0">
                <p class="tx-uppercase tx-11 tx-spacing-1 tx-color-03 tx-medium mg-b-5">{{requests[reqShown].general.type}}</p>
                <h3 class="tx-26 tx-normal tx-rubik tx-spacing--2 mg-b-5">{{requests[reqShown].general.name}}</h3>
                <div class="d-flex mg-b-25">
                    <p class="tx-12 tx-rubik mg-b-0">
                        <span class="tx-medium tx-success mg-r-5">
                            <i class="icon ion-ios-pin"></i>
                        </span>
                        {{requests[reqShown].location.city}},{{requests[reqShown].location.district}},{{requests[reqShown].location.state}}
                    </p>
                </div>
                <div class="d-flex mg-b-25">
                    <button class="btn btn-sm btn-uppercase btn-white flex-fill tx-spacing-1">Details</button>
                    <button class="btn btn-sm btn-uppercase btn-primary flex-fill tx-spacing-1 mg-l-10" data-toggle="modal" data-target="#quick-approve" :id="reqShown" @click="quickApprove">Quick Approve</button>
                </div>
                <div class="d-flex align-items-center justify-content-between mg-b-10">
                    <p class="tx-uppercase tx-11 tx-spacing-1 tx-color-03 tx-medium mg-b-0">Hotel Details</p>
                    <a href="hotel-requests.html" class="tx-uppercase tx-11 tx-medium mg-b-0">Show All</a>
                </div>
                <ul class="list-group list-group-flush mg-b-0 tx-13">
                    <li class="list-group-item pd-x-0 d-flex justify-content-between">
                        <span class="tx-medium">Phone</span>
                        <span class="tx-rubik">{{requests[reqShown].general.phone}}</span>
                    </li>
                    <li class="list-group-item pd-x-0 d-flex justify-content-between">
                        <span class="tx-medium">Contact Person</span>
                        <span class="tx-rubik">{{requests[reqShown].contact.name}}</span>
                    </li>
                    <li class="list-group-item pd-x-0 d-flex justify-content-between">
                        <span class="tx-medium">Rooms</span>
                        <span class="tx-rubik">{{requests[reqShown].general.rooms}}</span>
                    </li>
                    <li class="list-group-item pd-x-0 d-flex justify-content-between">
                        <span class="tx-medium">Base Price</span>
                        <span class="tx-rubik">₹{{requests[reqShown].general.basePrice}}</span>
                    </li>
                </ul>
            </div>
            <div class="card-body pd-x-20 pd-b-10"  v-else>
                <p class="tx-uppercase tx-11 tx-spacing-1 tx-color-03 tx-medium mg-b-5">No New Requests</p>
            </div>
            <!-- card-body -->
        </div>
    </div>
</template>
<script>

import firebase from "firebase";

export default {
    name: "HotelRequest",
    data() {
        return {
            requests:[],
            reqShown:0
        };
    },
    computed: {

    },
    created() {

        firebase.firestore()
        .collection("Hotels")
        .where("status","==","pending")
        .limit(6)
        .onSnapshot( res => {
            console.log()
            this.requests = []
            if(!res.empty){
                res.forEach( item => {
                    console.log("pending: ",item.data())
                    this.requests.push({...item.data(),id:item.id})
                })
            }else{
                console.log("res:",res)
            }
        })
    },
    methods: {
        incrReqShown(){
            if(this.reqShown < this.requests.length){
                this.reqShown++;
            }
            
        },
        quickApprove(){
            let selectedHotel = this.requests[this.reqShown].id;

            firebase.firestore().collection("Hotels").doc(selectedHotel).update({status:"accepted"});

        }
    },
    components: {
        // NavigationMenu
    },
    // mounted() {
    //   this.$store.commit("SET_HOTEL_LISTS");
    // },
};
</script>