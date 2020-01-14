<template>
    <div class="col-md-8">
        <div class="row" style="margin-bottom:20px;">
            <div class="col-md-9"></div>
            <div class="col-md-3">
                <div class="d-none d-md-block">
                    <button class="btn btn-sm pd-x-15 btn-primary btn-uppercase" 
                    data-toggle="modal" data-target="#new-room">
                    <i data-feather="plus-circle"></i> Add New Room Type</button>
                </div>
            </div>
        </div>
        
        <div class="card mg-b-10">
            <div class="table-responsive pd-25">
                <table class="table table-dashboard mg-b-0">
                    <thead>
                        <tr>
                            
                            <th>Room Type</th>
                            <th>Maximum Guests</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(room,index) in roomTypes" :key="index">
                            
                            <td>{{room.roomName}}</td>
                            
                            <td>{{room.maxGuests}}</td>

                            <td>
                                <div class="custom-control custom-switch">
                                    <input type="checkbox" class="custom-control-input" id="customSwitch1" checked>
                                    <label class="custom-control-label" for="customSwitch1">{{room.status}}</label>
                                </div>
                            </td>
                            <td>
                                <a href="#" data-toggle="modal" data-target="#new-room" class="tx-rubik tx-medium tx-uppercase">Edit</a>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import store from "../../store.js";
import firebase from "firebase";

export default {
    name: "AccountRooms",
    data(){
        return {
            roomTypes:[]
        }
    },
    methods: {
        setAccountSection(sec) {
            store.commit("setAccountSidebarSelecton", sec)
        }
    },
    created(){
        let dbRef = firebase.firestore().collection("RoomTypes");
        dbRef.onSnapshot((response) => {
            console.log(response);
            let roomTypes = []
            response.forEach( (item) => {
                roomTypes.push(item.data())
            })
            this.roomTypes = roomTypes;
        })
    }
}
</script>