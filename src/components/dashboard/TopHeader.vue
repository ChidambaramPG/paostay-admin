<template>
    <div class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
        <div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb breadcrumb-style1 mg-b-10">
                    <li class="breadcrumb-item">
                        <a href="#">Dashboard</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Sales Monitoring</li>
                </ol>
            </nav>
            <h4 class="mg-b-0 tx-spacing--1">Welcome Samad!</h4>
        </div>
        <div class="d-none d-md-block">
            <a href="bookings.html" class="btn btn-sm pd-x-15 btn-primary btn-uppercase">
                <i data-feather="calendar" class="wd-10 mg-r-5"></i> Go to Bookings
            </a>
        </div>
    </div>
</template>
<script>
// import NavigationMenu from "../components/NavigationMenu.vue";

export default {
    name: "TopHeader",
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