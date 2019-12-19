<template>
  <div
    class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30"
  >
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-style1 mg-b-10">
          <li class="breadcrumb-item"><a href="#">Booking History</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            This Week Bookings
          </li>
        </ol>
      </nav>
      <h4 class="mg-b-0 tx-spacing--1">Welcome Samad!</h4>
    </div>
    <div class="d-none d-md-block">
      <button class="btn btn-sm pd-x-15 btn-primary btn-uppercase">
        This Week
      </button>
      <button class="btn btn-sm pd-x-15 btn-white btn-uppercase mg-l-5">
        This Month
      </button>
      <button class="btn btn-sm pd-x-15 btn-white btn-uppercase mg-l-5">
        All Time
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "TopHeader"
};
</script>
