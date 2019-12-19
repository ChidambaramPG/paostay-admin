<template>
  <div>
    <NavigationMenu />
    <div class="content content-fixed min-vh-100">
      <div class="container pd-x-0 pd-lg-x-10 pd-xl-x-0">
        <div
          class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30"
        >
          <div>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-style1 mg-b-10">
                <li class="breadcrumb-item">
                  <a href="#">Hotels</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  All Hotels
                </li>
              </ol>
            </nav>
            <h4 class="mg-b-0 tx-spacing--1">Welcome Samad!</h4>
          </div>
          <div class="d-none d-md-block">
            <router-link
              to="hotel-requests"
              class="btn btn-sm pd-x-15 btn-primary btn-uppercase"
              >Hotel Requests (6)</router-link
            >
            <button class="btn btn-sm pd-x-15 btn-white btn-uppercase mg-l-5">
              <i data-feather="refresh-cw" class="wd-10 mg-r-5"></i> Refresh
            </button>
          </div>
        </div>
        <div class="row row-xs">
          <div class="col-md-12">
            <div class="card-body pd-y-30">
              <div class="d-sm-flex">
                <div class="media">
                  <div
                    class="wd-40 wd-md-50 ht-40 ht-md-50 bg-success tx-white mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded op-6"
                  >
                    <i data-feather="bar-chart-2"></i>
                  </div>
                  <div class="media-body">
                    <h6
                      class="tx-sans tx-uppercase tx-10 tx-spacing-1 tx-color-03 tx-semibold tx-nowrap mg-b-5 mg-md-b-8"
                    >
                      Total Hotels
                    </h6>
                    <h4
                      class="tx-20 tx-sm-18 tx-md-24 tx-normal tx-rubik mg-b-0"
                    >
                      1,958,104
                    </h4>
                  </div>
                </div>
                <div class="media mg-t-20 mg-sm-t-0 mg-sm-l-15 mg-md-l-40">
                  <div
                    class="wd-40 wd-md-50 ht-40 ht-md-50 bg-warning tx-white mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded op-5"
                  >
                    <i data-feather="bar-chart-2"></i>
                  </div>
                  <div class="media-body">
                    <h6
                      class="tx-sans tx-uppercase tx-10 tx-spacing-1 tx-color-03 tx-semibold mg-b-5 mg-md-b-8"
                    >
                      New Signups
                    </h6>
                    <h4
                      class="tx-20 tx-sm-18 tx-md-24 tx-normal tx-rubik mg-b-0"
                    >
                      234,769
                    </h4>
                  </div>
                </div>
                <div class="media mg-t-20 mg-sm-t-0 mg-sm-l-15 mg-md-l-40">
                  <div
                    class="wd-40 wd-md-50 ht-40 ht-md-50 bg-primary tx-white mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded op-4"
                  >
                    <i data-feather="bar-chart-2"></i>
                  </div>
                  <div class="media-body">
                    <h6
                      class="tx-sans tx-uppercase tx-10 tx-spacing-1 tx-color-03 tx-semibold mg-b-5 mg-md-b-8"
                    >
                      Active Hotels
                    </h6>
                    <h4
                      class="tx-20 tx-sm-18 tx-md-24 tx-normal tx-rubik mg-b-0"
                    >
                      8,469
                    </h4>
                  </div>
                </div>
                <div class="media mg-t-20 mg-sm-t-0 mg-sm-l-15 mg-md-l-40">
                  <div
                    class="wd-40 wd-md-50 ht-40 ht-md-50 bg-pink tx-white mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded op-4"
                  >
                    <i data-feather="bar-chart-2"></i>
                  </div>
                  <div class="media-body">
                    <h6
                      class="tx-sans tx-uppercase tx-10 tx-spacing-1 tx-color-03 tx-semibold mg-b-5 mg-md-b-8"
                    >
                      Inactive Hotels
                    </h6>
                    <h4
                      class="tx-20 tx-sm-18 tx-md-24 tx-normal tx-rubik mg-b-0"
                    >
                      469
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row row-xs">
          <div class="col-lg-12 col-xl-12 mg-t-10">
            <div class="card mg-b-10">
              <div class="card-header">
                <div>
                  <h6 class="mg-b-0">Your Most Recent Earnings</h6>
                  <!-- <p class="tx-13 tx-color-03 mg-b-0">Your last 10 Bookings</p> -->
                </div>
              </div>
              <div class="table-responsive pd-25">
                <table
                  class="table table-dashboard mg-b-0"
                  id="booking-history"
                >
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Hotel Name</th>
                      <th>Hotel Type</th>
                      <th>Contact Person</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Place</th>
                      <th>Bookings</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(hotel, index) in acceptedHotels" :key="index">
                      <td>{{ index + 1 }}</td>
                      <td>{{ hotel.general.name }}</td>
                      <td>
                        <div class="tx-16 mg-l-10">
                          <i
                            class="icon ion-md-star lh-0 tx-orange"
                            v-for="star in parseInt(hotel.general.type)"
                            :key="'star_' + star"
                          ></i>
                        </div>
                      </td>
                      <td>{{hotel.contact.name}}</td>
                      <td>{{hotel.contact.mobile}}</td>
                      <td>{{hotel.contact.email}}</td>
                      <td>{{hotel.general.address}}</td>
                      <td>12</td>
                      <td>
                        <div class="mg-l-auto d-flex align-self-center">
                          <nav class="nav nav-icon-only">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#disable"
                              class="nav-link d-none d-sm-block"
                            >
                              <i data-feather="slash"></i>
                            </a>
                            <a
                              href="#quick-details"
                              class="off-canvas-menu nav-link d-none d-sm-block"
                            >
                              <i data-feather="eye"></i>
                            </a>
                            <a href="#" class="nav-link d-none d-sm-block">
                              <i data-feather="grid"></i>
                            </a>
                          </nav>
                        </div>
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
  </div>
</template>

<script>
import NavigationMenu from "../components/NavigationMenu.vue";
import store from "../store.js";

export default {
  name: "Hotels",
  data() {
    return {
      acceptedHotels: []
    };
  },
  created() {
    if (!store.state.allHotels.length > 0) {
      console.log("1. fetch request sending");
      this.$store.dispatch("HOTEL_LIST_ASYNC_FETCH").then(() => {
        console.log("6. fetch request completed");
        console.log("7. filter request sending");
        this.$store.dispatch("FILTER_HOTEL_FOR_ACCEPTED").then(() => {
          console.log("12. filtering request completed");
          this.acceptedHotels = this.$store.state.hotelAcceptedList;
        });
      });
    } else {
      this.$store.dispatch("FILTER_HOTEL_FOR_ACCEPTED").then(() => {
        console.log("12. filtering request completed");
        this.acceptedHotels = this.$store.state.hotelAcceptedList;
      });
    }
  },
  methods: {},

  components: {
    NavigationMenu
  }
};
</script>
