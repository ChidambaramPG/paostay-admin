import Vue from "vue";
import Vuex from "vuex";

import firebase from "firebase";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    regFormFields: [],
    regFormPage: 1,
    amenities: [],
    hotelPendingRequests:[],
    hotelAcceptedList:[],
    allHotels:[],
    hotelsFetched:false,
    selectedHotel:[],
    accountSidebarSelecton:"settings"
  },
  mutations: {
    SET_REG_FORM_STEP: (state, payload) => {
      console.log(payload)
      state.regFormPage = payload;
    },
    INCR_REG_FORM_STEP: state => {
      console.log("INCR_REG_FORM_STEP");
      state.regFormPage++;
    },
    DECR_REG_FORM_STEP: state => {
      console.log("DECR_REG_FORM_STEP");
      state.regFormPage--;
    },
    PUSH_REG_FORM_FIELDS: (state, payload) => {
      console.log(payload);
      state.regFormFields = { ...state.regFormFields , ...payload };
    },
    SET_SELECTED_HOTEL_DETAILS: (state, payload) => {
      console.log(payload.target.id)
      console.log(state.hotelPendingRequests[parseInt(payload.target.id)])
      state.selectedHotel = state.hotelPendingRequests[parseInt(payload.target.id)]
    },
    GET_ALL_AMENITIES: state => {
      let db = firebase.firestore();
      let btRef = db.collection("Amenities");
      btRef
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
            state.amenities.push(doc);
          });
        })
        .catch(function(error) {
          console.log("Error getting document:", error);
        });
    },
    SET_HOTEL_LISTS:(state,payload) => {
      state.allHotels = payload;
    },
    SET_PENDING_HOTEL_LIST: (state,payload) => {
      state.hotelPendingRequests = payload;
    },
    setAccountSidebarSelecton:(state,payload) => {
      state.accountSidebarSelecton = payload;
    },
    SET_ACCEPTED_HOTEL_LIST: (state,payload) => {
      state.hotelAcceptedList = payload;
    },

  },
  actions:{
    HOTEL_LIST_ASYNC_FETCH: async ({commit}) => {
      console.log("2. fetch request received")
      let db = firebase.firestore();
      // let hotelsRef = db.collection("Hotels").where('status','==','pending');
      let hotels = [];
      let hotelsRef = db.collection("Hotels");
      console.log("3. fetching hotels")
      await hotelsRef.get().then(function(snapshot){
          console.log(snapshot)
          snapshot.forEach(function(doc){
              // console.log(doc.id, " => ", doc.data());
              hotels.push(doc);
          });
          console.log("4. fetching completed");
          console.log("5. adding list to store")
          commit("SET_HOTEL_LISTS",hotels);
      });
    },
    FILTER_HOTEL_FOR_PENDING: ({commit,state}) => {

      console.log("8. filter request received")
      let pendingHotels = [];
      console.log('9. filtering pending hotels')
      state.allHotels.forEach(function(hotel){
        // console.log(hotel.id,'=>',hotel.data())
        if(hotel.data().status == 'pending'){
          // console.log('pushing =>',hotel.data())
          let data = {...hotel.data(),uid:hotel.id}
          pendingHotels.push(data);
        }
      });
      // state.hotelPendingRequests = pendingHotels;
      console.log('10. filtering completed')
      console.log('11. addng lst to pending aray')
      commit("SET_PENDING_HOTEL_LIST",pendingHotels);
    },
    FILTER_HOTEL_FOR_ACCEPTED: ({commit,state}) => {

      console.log("8. filter request received")
      let acceptedHotels = [];
      console.log('9. filtering pending hotels')
      state.allHotels.forEach(function(hotel){
        // console.log(hotel.id,'=>',hotel.data())
        if(hotel.data().status == 'accepted'){
          // console.log('pushing =>',hotel.data())
          let data = {...hotel.data(),uid:hotel.id}
          acceptedHotels.push(data);
        }
      });
      // state.hotelPendingRequests = pendingHotels;
      console.log('10. filtering completed')
      console.log('11. addng lst to pending aray')
      commit("SET_ACCEPTED_HOTEL_LIST",acceptedHotels);
    },

  }
});
