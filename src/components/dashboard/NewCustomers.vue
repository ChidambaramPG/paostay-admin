<template>
    <div class="col-md-6 col-xl-3 mg-t-10">
        <div class="card ht-100p">
            <div class="card-header d-flex align-items-center justify-content-between">
                <h6 class="mg-b-0">New Customers</h6>
                <div class="d-flex align-items-center tx-18">
                    <a href class="link-03 lh-0">
                        <i class="icon ion-md-refresh"></i>
                    </a>
                    <a href class="link-03 lh-0 mg-l-10">
                        <i class="icon ion-md-more"></i>
                    </a>
                </div>
            </div>
            <ul class="list-group list-group-flush tx-13">
                <li class="list-group-item d-flex pd-sm-x-20">
                    <div class="avatar">
                        <span class="avatar-initial rounded-circle bg-gray-600">s</span>
                    </div>
                    <div class="pd-l-10">
                        <p class="tx-medium mg-b-0">Socrates Itumay</p>
                        <small class="tx-12 tx-color-03 mg-b-0">Customer ID#00222</small>
                    </div>
                    <div class="mg-l-auto d-flex align-self-center">
                        <nav class="nav nav-icon-only">
                            <a href="#customer-details" class="off-canvas-menu nav-link d-none d-sm-block">
                                <i data-feather="user"></i>
                            </a>
                            <a href class="nav-link d-sm-none">
                                <i data-feather="more-vertical"></i>
                            </a>
                        </nav>
                    </div>
                </li>
                <li class="list-group-item d-flex pd-x-20">
                    <div class="avatar">
                        <img src="assets/img/img23.jpg" class="rounded-circle" alt />
                    </div>
                    <div class="pd-l-10">
                        <p class="tx-medium mg-b-0">Reynante Labares</p>
                        <small class="tx-12 tx-color-03 mg-b-0">Customer ID#00221</small>
                    </div>
                    <div class="mg-l-auto d-flex align-self-center">
                        <nav class="nav nav-icon-only">
                            <a href="#customer-details" class="off-canvas-menu nav-link d-none d-sm-block">
                                <i data-feather="user"></i>
                            </a>
                            <a href class="nav-link d-sm-none">
                                <i data-feather="more-vertical"></i>
                            </a>
                        </nav>
                    </div>
                </li>
                <li class="list-group-item d-flex pd-x-20">
                    <div class="avatar">
                        <img src="assets/img/img16.jpg" class="rounded-circle" alt />
                    </div>
                    <div class="pd-l-10">
                        <p class="tx-medium mg-b-0">Marianne Audrey</p>
                        <small class="tx-12 tx-color-03 mg-b-0">Customer ID#00220</small>
                    </div>
                    <div class="mg-l-auto d-flex align-self-center">
                        <nav class="nav nav-icon-only">
                            <a href="#customer-details" class="off-canvas-menu nav-link d-none d-sm-block">
                                <i data-feather="user"></i>
                            </a>
                            <a href class="nav-link d-sm-none">
                                <i data-feather="more-vertical"></i>
                            </a>
                        </nav>
                    </div>
                </li>
                <li class="list-group-item d-flex pd-x-20">
                    <div class="avatar">
                        <span class="avatar-initial rounded-circle bg-indigo op-5">o</span>
                    </div>
                    <div class="pd-l-10">
                        <p class="tx-medium mg-b-0">Owen Bongcaras</p>
                        <small class="tx-12 tx-color-03 mg-b-0">Customer ID#00219</small>
                    </div>
                    <div class="mg-l-auto d-flex align-self-center">
                        <nav class="nav nav-icon-only">
                            <a href="#customer-details" class="off-canvas-menu nav-link d-none d-sm-block">
                                <i data-feather="user"></i>
                            </a>
                            <a href class="nav-link d-sm-none">
                                <i data-feather="more-vertical"></i>
                            </a>
                        </nav>
                    </div>
                </li>
                <li class="list-group-item d-flex pd-x-20">
                    <div class="avatar">
                        <span class="avatar-initial rounded-circle bg-primary op-5">k</span>
                    </div>
                    <div class="pd-l-10">
                        <p class="tx-medium mg-b-0">Kirby Avendula</p>
                        <small class="tx-12 tx-color-03 mg-b-0">Customer ID#00218</small>
                    </div>
                    <div class="mg-l-auto d-flex align-self-center">
                        <nav class="nav nav-icon-only">
                            <a href="#customer-details" class="off-canvas-menu nav-link d-none d-sm-block">
                                <i data-feather="user"></i>
                            </a>
                            <a href class="nav-link d-sm-none">
                                <i data-feather="more-vertical"></i>
                            </a>
                        </nav>
                    </div>
                </li>
                <li class="list-group-item d-flex pd-x-20">
                    <div class="avatar">
                        <span class="avatar-initial rounded-circle bg-primary op-5">k</span>
                    </div>
                    <div class="pd-l-10">
                        <p class="tx-medium mg-b-0">Kirby Avendula</p>
                        <small class="tx-12 tx-color-03 mg-b-0">Customer ID#00218</small>
                    </div>
                    <div class="mg-l-auto d-flex align-self-center">
                        <nav class="nav nav-icon-only">
                            <a href="#customer-details" class="off-canvas-menu nav-link d-none d-sm-block">
                                <i data-feather="user"></i>
                            </a>
                            <a href class="nav-link d-sm-none">
                                <i data-feather="more-vertical"></i>
                            </a>
                        </nav>
                    </div>
                </li>
            </ul>
            <div class="card-footer text-center tx-13">
                <a href="users.html" class="link-03">
                    View More Customers
                    <i class="icon ion-md-arrow-down mg-l-5"></i>
                </a>
            </div>
            <!-- card-footer -->
        </div>
    </div>
</template>
<script>
// import NavigationMenu from "../components/NavigationMenu.vue";

import firebase from "firebase";

export default {
    name: "NewCustomers",
    data() {
        return {

        };
    },
    computed: {

    },
    created() {
        // firebase.firestore().
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