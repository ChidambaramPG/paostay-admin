<template>
  <div>
    <NavigationMenu />
    <div class="content content-fixed">
      <div class="container pd-x-0 pd-lg-x-10 pd-xl-x-0">
        <TopHeader/>
        <DashboardStat/>

        <div class="row row-xs">
          <TransactonHistory/>
          <RecentEarnings/>
        </div>

        <div class="row row-xs">
          <RecentBookings/>
          <NewCustomers/>
          <HotelRequest/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import NavigationMenu from "../components/NavigationMenu.vue";
import { mapState, mapMutations, mapActions } from "vuex";

import DashboardStat from "../components/dashboard/DashboardStat.vue";
import TransactonHistory from "../components/dashboard/TransactonHistory.vue";
import RecentEarnings from "../components/dashboard/RecentEarnings.vue";
import RecentBookings from "../components/dashboard/RecentBookings.vue";
import NewCustomers from "../components/dashboard/NewCustomers.vue";
import HotelRequest from "../components/dashboard/HotelRequest.vue";
import TopHeader from "../components/dashboard/TopHeader.vue";


export default {
  name: "dashboard",
  data() {
    return {

    };
  },
  computed:{
    
    ...mapMutations([
      "SET_HOTEL_LISTS"
    ]),

  },
  created() {

  },
  methods: {

  },
  components: {
    NavigationMenu,
    DashboardStat,
    TransactonHistory,
    RecentEarnings,
    RecentBookings,
    NewCustomers,
    HotelRequest,
    TopHeader
  },
  // mounted() {
  //   this.$store.commit("SET_HOTEL_LISTS");
  // },
};
</script>