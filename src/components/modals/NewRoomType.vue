<template>
	<div class="modal fade" id="new-room" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                        <i data-feather="layers" class="tx-primary tx-12"></i> New Room
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="">
                        <div class="form-group mg-b-10">
                            <label for="">Room Type Name</label>
                            <input type="text" class="form-control" placeholder="Deluxe Suite" v-model="typeName">
                        </div>
                        <div class="form-group mg-b-10">
                            <label for="">Max Guests</label>
                            <select v-model="maxGuests" class="form-control rooms">
                                <option value=1>1</option>
                                <option value=2>2</option>
                                <option value=3>3</option>
                                <option value=4>4</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" @click="addNewRoomType">Add Room Type</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from "../../store.js";
import firebase from "firebase";

export default{
	name:"NewRoomType",
    data(){
        return {
            typeName:"",
            maxGuests:1
        }
    },
    methods:{
        addNewRoomType(){
            if(this.typeName!="" &&  parseInt(this.maxGuests) > 0){
                console.log("adding new room type");
                let dbRef = firebase.firestore().collection("RoomTypes");
                dbRef.add({roomName:this.typeName,maxGuests:this.maxGuests,status:'active'}).then((resp)=>{
                    console.log("added");
                })
            }
        }
    }
	
}
</script>