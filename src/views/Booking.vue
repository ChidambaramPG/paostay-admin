<template>
  <div>
    <NavigationMenu />
    <div class="content content-fixed">
      <div class="container pd-x-0 pd-lg-x-10 pd-xl-x-0">
        <top-header/>
        <booking-stat/>
        <all-bookings/>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationMenu from "../components/NavigationMenu.vue";
import TopHeader from "../components/booking/TopHeader.vue";
import BookingStat from "../components/booking/BookingStat.vue";
import AllBookings from "../components/booking/AllBookings.vue";

export default {
  name: "booking",
  data() {
    return {};
  },
  created() {},
  methods: {},

  components: {
    NavigationMenu,
    TopHeader,
    BookingStat,
    AllBookings
  }
};
</script>