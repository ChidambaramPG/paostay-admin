<template>
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
                Bookings
              </h6>
              <h4 class="tx-20 tx-sm-18 tx-md-24 tx-normal tx-rubik mg-b-0">
                1,958
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
                Avg. Booking Value
              </h6>
              <h4 class="tx-20 tx-sm-18 tx-md-24 tx-normal tx-rubik mg-b-0">
                ₹506
              </h4>
            </div>
          </div>
          <div class="media mg-t-20 mg-sm-t-0 mg-sm-l-15 mg-md-l-40">
            <div
              class="wd-40 wd-md-50 ht-40 ht-md-50 bg-info tx-white mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded op-4"
            >
              <i data-feather="bar-chart-2"></i>
            </div>
            <div class="media-body">
              <h6
                class="tx-sans tx-uppercase tx-10 tx-spacing-1 tx-color-03 tx-semibold mg-b-5 mg-md-b-8"
              >
                Booked Hotels
              </h6>
              <h4 class="tx-20 tx-sm-18 tx-md-24 tx-normal tx-rubik mg-b-0">
                8,469
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
                Most Booked
              </h6>
              <h4 class="tx-20 tx-sm-18 tx-md-24 tx-normal tx-rubik mg-b-0">
                469
                <small class="tx-md-14"
                  ><span class="tx-medium tx-success"
                    >Hotel Hill View <i class="icon ion-md-ribbon"></i
                  ></span>
                </small>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name:"BookingStat"
}
</script>