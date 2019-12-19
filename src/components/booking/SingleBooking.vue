<template>
  <tr>
      <!-- <td>{{data}}</td> -->
    <td>{{ changeDateFormatType1(requestData.bookedDate.seconds) }}</td>
    <td>#{{requestData.id}}</td>
    <td>{{requestData.username}}</td>
    <td>{{requestData.hotelName}}</td>
    <td>{{calculateNights(requestData.checkoutDate.seconds,requestData.checkinDate.seconds)}}</td>
    <td>{{requestData.adultCount}} Adults,{{requestData.childCount}} Children</td>
    <td>₹{{requestData.totalAmount}}</td>
    <td>{{changeDateFormatType2(requestData.checkinDate.seconds)}}</td>
    <td>{{changeDateFormatType2(requestData.checkoutDate.seconds)}}</td>
    <td class="tx-medium">
      <a href="#recent-booking" class="off-canvas-menu">View Details</a>
    </td>
  </tr>
</template>

<script>
export default {
    name:"SingleBooking",
    data(){
        return {
            months:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
        }
    },
    props:[
        "data"
    ],
    methods:{
        changeDateFormatType1(sec){
            let dt = new Date(sec * 1000);
            return dt.getDate()+"/"+dt.getMonth()+"/"+dt.getFullYear();
        },
        calculateNights(cout,cin){
            // console.log(cin,cout)
            return Math.ceil((cout-cin)/ (60*60*24));
        },
        changeDateFormatType2(sec){
            let dt = new Date(sec * 1000);
            return dt.getDate()+" "+ this.months[dt.getMonth()] +" "+dt.getFullYear(); 
        }
    },
    computed:{
        requestData(){
            return this.data;
        }
    }
}
</script>
