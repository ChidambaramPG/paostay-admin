<template>
    <div class="row row-xs">
        <div class="col-sm-6 col-lg-3">
            <div class="card card-body">
                <h6 class="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-8">Bookings</h6>
                <div class="d-flex d-lg-block d-xl-flex align-items-end">
                    <h3 class="tx-normal tx-rubik mg-b-0 mg-r-5 lh-1">0.81%</h3>
                    <p class="tx-11 tx-color-03 mg-b-0">
                        <span class="tx-medium tx-success">
                            1.2%
                            <i class="icon ion-md-arrow-up"></i>
                        </span> than last week
                    </p>
                </div>
                <div class="chart-three">
                    <div id="flotChart3" class="flot-chart ht-30"></div>
                </div>
                <!-- chart-three -->
            </div>
        </div>
        <div class="col-sm-6 col-lg-3 mg-t-10 mg-sm-t-0">
            <div class="card card-body">
                <h6 class="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-8">User Signups</h6>
                <div class="d-flex d-lg-block d-xl-flex align-items-end">
                    <h3 class="tx-normal tx-rubik mg-b-0 mg-r-5 lh-1">3,137</h3>
                    <p class="tx-11 tx-color-03 mg-b-0">
                        <span class="tx-medium tx-danger">
                            0.7%
                            <i class="icon ion-md-arrow-down"></i>
                        </span> than last week
                    </p>
                </div>
                <div class="chart-three">
                    <div id="flotChart4" class="flot-chart ht-30"></div>
                </div>
                <!-- chart-three -->
            </div>
        </div>
        <div class="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0">
            <div class="card card-body">
                <h6 class="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-8">Avg. Booking Value</h6>
                <div class="d-flex d-lg-block d-xl-flex align-items-end">
                    <h3 class="tx-normal tx-rubik mg-b-0 mg-r-5 lh-1">₹506.20</h3>
                    <p class="tx-11 tx-color-03 mg-b-0">
                        <span class="tx-medium tx-danger">
                            0.3%
                            <i class="icon ion-md-arrow-down"></i>
                        </span> than last week
                    </p>
                </div>
                <div class="chart-three">
                    <div id="flotChart5" class="flot-chart ht-30"></div>
                </div>
                <!-- chart-three -->
            </div>
        </div>
        <div class="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0">
            <div class="card card-body">
                <h6 class="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-8">Hotels</h6>
                <div class="d-flex d-lg-block d-xl-flex align-items-end">
                    <h3 class="tx-normal tx-rubik mg-b-0 mg-r-5 lh-1">1,650</h3>
                    <p class="tx-11 tx-color-03 mg-b-0">
                        <span class="tx-medium tx-success">
                            2.1%
                            <i class="icon ion-md-arrow-up"></i>
                        </span> than last week
                    </p>
                </div>
                <div class="chart-three">
                    <div id="flotChart6" class="flot-chart ht-30"></div>
                </div>
                <!-- chart-three -->
            </div>
        </div>
    </div>
</template>

<script>

// import NavigationMenu from "../components/NavigationMenu.vue";

export default {
    name: "DashboardStat",
    data() {
        return {

        };
    },
    computed: {

    },
    created() {

    },
    methods: {

    },
    components: {
        // NavigationMenu
    },
    // mounted() {
    //   this.$store.commit("SET_HOTEL_LISTS");
    // },
};
</script>