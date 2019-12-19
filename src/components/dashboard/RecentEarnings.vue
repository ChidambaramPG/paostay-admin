<template>
    <div class="col-lg-12 col-xl-8 mg-t-10">
        <div class="card mg-b-10">
          <div
            class="card-header pd-t-20 d-sm-flex align-items-start justify-content-between bd-b-0 pd-b-0"
          >
            <div>
              <h6 class="mg-b-5">Your Most Recent Earnings</h6>
              <p
                class="tx-13 tx-color-03 mg-b-0"
              >Your sales and referral earnings over the last 30 days</p>
            </div>
          </div>
          <div class="card-body pd-y-30">
            <div class="d-sm-flex">
              <div class="media">
                <div
                  class="wd-40 wd-md-50 ht-40 ht-md-50 bg-teal tx-white mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded op-6"
                >
                  <i data-feather="bar-chart-2"></i>
                </div>
                <div class="media-body">
                  <h6
                    class="tx-sans tx-uppercase tx-10 tx-spacing-1 tx-color-03 tx-semibold tx-nowrap mg-b-5 mg-md-b-8"
                  >Gross Earnings</h6>
                  <h4 class="tx-20 tx-sm-18 tx-md-24 tx-normal tx-rubik mg-b-0">₹1,958,104</h4>
                </div>
              </div>
              <div class="media mg-t-20 mg-sm-t-0 mg-sm-l-15 mg-md-l-40">
                <div
                  class="wd-40 wd-md-50 ht-40 ht-md-50 bg-pink tx-white mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded op-5"
                >
                  <i data-feather="bar-chart-2"></i>
                </div>
                <div class="media-body">
                  <h6
                    class="tx-sans tx-uppercase tx-10 tx-spacing-1 tx-color-03 tx-semibold mg-b-5 mg-md-b-8"
                  >Hotel Earnings</h6>
                  <h4 class="tx-20 tx-sm-18 tx-md-24 tx-normal tx-rubik mg-b-0">
                    ₹234,769
                    <small>.50</small>
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
                  >Net Earnings</h6>
                  <h4 class="tx-20 tx-sm-18 tx-md-24 tx-normal tx-rubik mg-b-0">
                    ₹1,608,469
                    <small>.50</small>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <!-- card-body -->
          <div class="table-responsive">
            <table class="table table-dashboard mg-b-0">
              <thead>
                <tr>
                  <th>Date</th>
                  <th class="text-right">Bookings Count</th>
                  <th class="text-right">Gross Earnings</th>
                  <th class="text-right">Hotel Earnings</th>
                  <th class="text-right">Net Earnings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="tx-color-03 tx-normal">07/05/2018</td>
                  <td class="tx-medium text-right">1,050</td>
                  <td class="text-right tx-teal">+ ₹32,580.00</td>
                  <td class="text-right tx-pink">- ₹3,023.10</td>
                  <td class="tx-medium text-right">
                    ₹28,670.90
                    <span class="mg-l-5 tx-10 tx-normal tx-success">
                      <i class="icon ion-md-arrow-up"></i> 4.5%
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="tx-color-03 tx-normal">06/04/2018</td>
                  <td class="tx-medium text-right">980</td>
                  <td class="text-right tx-teal">+ ₹30,065.10</td>
                  <td class="text-right tx-pink">- ₹2,780.00</td>
                  <td class="tx-medium text-right">
                    ₹26,930.40
                    <span class="mg-l-5 tx-10 tx-normal tx-danger">
                      <i class="icon ion-md-arrow-down"></i> 0.8%
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="tx-color-03 tx-normal">05/04/2018</td>
                  <td class="tx-medium text-right">980</td>
                  <td class="text-right tx-teal">+ ₹30,065.10</td>
                  <td class="text-right tx-pink">- ₹2,780.00</td>
                  <td class="tx-medium text-right">
                    ₹26,930.40
                    <span class="mg-l-5 tx-10 tx-normal tx-danger">
                      <i class="icon ion-md-arrow-down"></i> 0.8%
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="tx-color-03 tx-normal">04/04/2018</td>
                  <td class="tx-medium text-right">980</td>
                  <td class="text-right tx-teal">+ ₹30,065.10</td>
                  <td class="text-right tx-pink">- ₹2,780.00</td>
                  <td class="tx-medium text-right">
                    ₹26,930.40
                    <span class="mg-l-5 tx-10 tx-normal tx-danger">
                      <i class="icon ion-md-arrow-down"></i> 0.8%
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="tx-color-03 tx-normal">03/04/2018</td>
                  <td class="tx-medium text-right">980</td>
                  <td class="text-right tx-teal">+ ₹30,065.10</td>
                  <td class="text-right tx-pink">- ₹2,780.00</td>
                  <td class="tx-medium text-right">
                    ₹26,930.40
                    <span class="mg-l-5 tx-10 tx-normal tx-danger">
                      <i class="icon ion-md-arrow-down"></i> 0.8%
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- table-responsive -->
          <div class="card-footer text-center tx-13">
            <a href="earnings.html" class="link-03">
              View All Earning
              <i class="icon ion-md-arrow-down mg-l-5"></i>
            </a>
          </div>
        </div>
      </div>
</template>

<script>

// import NavigationMenu from "../components/NavigationMenu.vue";

export default {
    name: "RecentEarnings",
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