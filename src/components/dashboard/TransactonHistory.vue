<template>
    <div class="col-md-6 col-xl-4 mg-t-10">
        <div class="card ht-100p">
          <div class="card-header d-flex align-items-center justify-content-between">
            <h6 class="mg-b-0">Transaction History</h6>
            <div class="d-flex tx-18">
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
              <div class="avatar d-none d-sm-block">
                <span class="avatar-initial rounded-circle bg-teal">
                  <i class="icon ion-md-checkmark"></i>
                </span>
              </div>
              <div class="pd-sm-l-10">
                <p class="tx-medium mg-b-0">Payment from #10322</p>
                <small class="tx-12 tx-color-03 mg-b-0">Mar 21, 2019, 3:30pm</small>
              </div>
              <div class="mg-l-auto text-right">
                <p class="tx-medium mg-b-0">+ ₹250.00</p>
                <small class="tx-12 tx-success mg-b-0">Paid Online</small>
              </div>
            </li>
            <li class="list-group-item d-flex pd-sm-x-20">
              <div class="avatar d-none d-sm-block">
                <span class="avatar-initial rounded-circle bg-indigo op-5">
                  <i class="icon ion-md-return-left"></i>
                </span>
              </div>
              <div class="pd-sm-l-10">
                <p class="tx-medium mg-b-2">Process refund to #00910</p>
                <small class="tx-12 tx-color-03 mg-b-0">Mar 21, 2019, 1:00pm</small>
              </div>
              <div class="mg-l-auto text-right">
                <p class="tx-medium mg-b-2">-₹16.50</p>
                <small class="tx-12 tx-success mg-b-0">Paid Online</small>
              </div>
            </li>
            <li class="list-group-item d-flex pd-sm-x-20">
              <div class="avatar d-none d-sm-block">
                <span class="avatar-initial rounded-circle bg-teal">
                  <i class="icon ion-md-wallet"></i>
                </span>
              </div>
              <div class="pd-sm-l-10">
                <p class="tx-medium mg-b-0">Payment from #023328</p>
                <small class="tx-12 tx-color-03 mg-b-0">Mar 20, 2019, 10:30pm</small>
              </div>
              <div class="mg-l-auto text-right">
                <p class="tx-medium mg-b-2">+ ₹500</p>
                <small class="tx-12 tx-info mg-b-0">Paid at Hotel</small>
              </div>
            </li>
            <li class="list-group-item d-flex pd-sm-x-20">
              <div class="avatar d-none d-sm-block">
                <span class="avatar-initial rounded-circle bg-teal">
                  <i class="icon ion-md-checkmark"></i>
                </span>
              </div>
              <div class="pd-sm-l-10">
                <p class="tx-medium mg-b-0">Payment from #023328</p>
                <small class="tx-12 tx-color-03 mg-b-0">Mar 20, 2019, 10:30pm</small>
              </div>
              <div class="mg-l-auto text-right">
                <p class="tx-medium mg-b-0">+ ₹129.50</p>
                <small class="tx-12 tx-success mg-b-0">Paid Online</small>
              </div>
            </li>
            <li class="list-group-item d-flex pd-sm-x-20">
              <div class="avatar d-none d-sm-block">
                <span class="avatar-initial rounded-circle bg-gray-400">
                  <i class="icon ion-md-close"></i>
                </span>
              </div>
              <div class="pd-sm-l-10">
                <p class="tx-medium mg-b-0">Payment failed from #087651</p>
                <small class="tx-12 tx-color-03 mg-b-0">Mar 19, 2019, 12:54pm</small>
              </div>
              <div class="mg-l-auto text-right">
                <p class="tx-medium mg-b-0">₹150.00</p>
                <small class="tx-12 tx-danger mg-b-0">Declined</small>
              </div>
            </li>
            <li class="list-group-item d-flex pd-sm-x-20">
              <div class="avatar d-none d-sm-block">
                <span class="avatar-initial rounded-circle bg-gray-400">
                  <i class="icon ion-md-close"></i>
                </span>
              </div>
              <div class="pd-sm-l-10">
                <p class="tx-medium mg-b-0">Payment failed from #087651</p>
                <small class="tx-12 tx-color-03 mg-b-0">Mar 19, 2019, 12:54pm</small>
              </div>
              <div class="mg-l-auto text-right">
                <p class="tx-medium mg-b-0">₹150.00</p>
                <small class="tx-12 tx-danger mg-b-0">Declined</small>
              </div>
            </li>
          </ul>
          <div class="card-footer text-center tx-13">
            <a href="transactions.html" class="link-03">
              View All Transactions
              <i class="icon ion-md-arrow-down mg-l-5"></i>
            </a>
          </div>
        </div>
      </div>
</template>

<script>

export default {
    name: "TransactonHistory",
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