<template>
    <div class="col-lg-12 col-xl-5 mg-t-10">
        <div class="card mg-b-10">
            <div class="card-header">
                <div>
                    <h6 class="mg-b-0">Your Most Recent Bookings</h6>
                    <!-- <p class="tx-13 tx-color-03 mg-b-0">Your last 10 Bookings</p> -->
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-dashboard mg-b-0">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th class="text-right">Name</th>
                            <th class="text-right">Hotel Name</th>
                            <th class="text-right">Nights</th>
                            <th class="text-right">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="tx-color-03 tx-normal">#975</td>
                            <td class="tx-medium text-right">Bruce Wayne</td>
                            <td class="text-right tx-teal">Hotel Hill View</td>
                            <td class="text-right tx-pink">04</td>
                            <td class="tx-medium text-right">
                                <a href="#recent-booking" class="off-canvas-menu">View Details</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="tx-color-03 tx-normal">#975</td>
                            <td class="tx-medium text-right">Bruce Wayne</td>
                            <td class="text-right tx-teal">Hotel Hill View</td>
                            <td class="text-right tx-pink">04</td>
                            <td class="tx-medium text-right">
                                <a href="#recent-booking" class="off-canvas-menu">View Details</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="tx-color-03 tx-normal">#975</td>
                            <td class="tx-medium text-right">Bruce Wayne</td>
                            <td class="text-right tx-teal">Hotel Hill View</td>
                            <td class="text-right tx-pink">04</td>
                            <td class="tx-medium text-right">
                                <a href="#recent-booking" class="off-canvas-menu">View Details</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="tx-color-03 tx-normal">#975</td>
                            <td class="tx-medium text-right">Bruce Wayne</td>
                            <td class="text-right tx-teal">Hotel Hill View</td>
                            <td class="text-right tx-pink">04</td>
                            <td class="tx-medium text-right">
                                <a href="#recent-booking" class="off-canvas-menu">View Details</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="tx-color-03 tx-normal">#975</td>
                            <td class="tx-medium text-right">Bruce Wayne</td>
                            <td class="text-right tx-teal">Hotel Hill View</td>
                            <td class="text-right tx-pink">04</td>
                            <td class="tx-medium text-right">
                                <a href="#recent-booking" class="off-canvas-menu">View Details</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="tx-color-03 tx-normal">#975</td>
                            <td class="tx-medium text-right">Bruce Wayne</td>
                            <td class="text-right tx-teal">Hotel Hill View</td>
                            <td class="text-right tx-pink">04</td>
                            <td class="tx-medium text-right">
                                <a href="#recent-booking" class="off-canvas-menu">View Details</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="tx-color-03 tx-normal">#975</td>
                            <td class="tx-medium text-right">Bruce Wayne</td>
                            <td class="text-right tx-teal">Hotel Hill View</td>
                            <td class="text-right tx-pink">04</td>
                            <td class="tx-medium text-right">
                                <a href="#recent-booking" class="off-canvas-menu">View Details</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="tx-color-03 tx-normal">#975</td>
                            <td class="tx-medium text-right">Bruce Wayne</td>
                            <td class="text-right tx-teal">Hotel Hill View</td>
                            <td class="text-right tx-pink">04</td>
                            <td class="tx-medium text-right">
                                <a href="#recent-booking" class="off-canvas-menu">View Details</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="card-footer text-center tx-13">
                <a href="bookings.html" class="link-03">
                    View All Bookings
                    <i class="icon ion-md-arrow-down mg-l-5"></i>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
// import NavigationMenu from "../components/NavigationMenu.vue";

export default {
    name: "RecentBookings",
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