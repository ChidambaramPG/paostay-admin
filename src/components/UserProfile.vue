<template>
  <div class="dropdown dropdown-profile">
    <a href class="dropdown-link" data-toggle="dropdown" data-display="static">
      <div class="avatar avatar-sm">
        <img src="https://via.placeholder.com/500" class="rounded-circle" alt />
      </div>
    </a>
    <!-- dropdown-link -->
    <div class="dropdown-menu dropdown-menu-right tx-13">
      <div class="avatar avatar-lg mg-b-15">
        <img src="https://via.placeholder.com/500" class="rounded-circle" alt />
      </div>
      <h6 class="tx-semibold mg-b-5">Abdul Samad</h6>
      <p class="mg-b-25 tx-12 tx-color-03">Administrator</p>

      <router-link to="account" class="dropdown-item">
        <i data-feather="edit-3"></i> Edit Profile
      </router-link>
      <div class="dropdown-divider"></div>
      <a href="#" class="dropdown-item">
        <i data-feather="help-circle"></i> Help Center
      </a>
      <a href="staff.html" class="dropdown-item">
        <i data-feather="users"></i> Staff
      </a>
      <router-link to="account" class="dropdown-item">
        <i data-feather="settings"></i>Account Settings
      </router-link>
      <a href="page-signin.html" class="dropdown-item">
        <i data-feather="log-out"></i>Sign Out
      </a>
    </div>
    <!-- dropdown-menu -->
  </div>
</template>

<script>
export default {
  name: "UserProfile"
};
</script>