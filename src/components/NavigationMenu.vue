<template>
  <header class="navbar navbar-header navbar-header-fixed">
    <a href id="mainMenuOpen" class="burger-menu">
      <i data-feather="menu"></i>
    </a>
    <div class="navbar-brand">
      <a href="index.html" class="df-logo">
        <img src="../assets/img/logo-h.png" alt width="120" />
      </a>
    </div>
    <div id="navbarMenu" class="navbar-menu-wrapper">
      <div class="navbar-menu-header">
        <a href="index.html" class="df-logo">
          Pao
          <span>Stay</span>
        </a>
        <a id="mainMenuClose" href>
          <i data-feather="x"></i>
        </a>
      </div>
      <ul class="nav navbar-menu">
        <li class="nav-item">
          <router-link to="dashboard" class="nav-link">
            Dashboard
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="booking" class="nav-link">
            Booking
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="hotels" class="nav-link">
            <i data-feather="box"></i> Hotels
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="users" class="nav-link">
            <i data-feather="box"></i> Users
          </router-link>
        </li>
        <li class="nav-item with-sub">
          <router-link to="finance" class="nav-link">
            <i data-feather="box"></i> Finance
          </router-link>
          <ul class="navbar-menu-sub">
            <li class="nav-sub-item">
              <router-link to="earnings" class="nav-sub-link">
                <i data-feather="dollar-sign"></i>Earnings
              </router-link>
            </li>
            <li class="nav-sub-item">
              <router-link to="tansactions" class="nav-sub-link">
                <i data-feather="list"></i>Transactions
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="navbar-right">
      <Notifications/>
      <UserPofile />
    </div>
  </header>
</template>

<script>
import firebase from "firebase";
import UserPofile from "./UserProfile";
import Notifications from "./Notifications";

export default {
  name: "NavigationMenu",
  components:{
    UserPofile,
    Notifications,
  }
};
</script>