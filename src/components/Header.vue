<template>
  <header class="navbar navbar-header navbar-header-fixed">
    <NavigationMenu />
    <div class="navbar-right">
      <div class="dropdown dropdown-notification">
        <a href class="dropdown-link new-indicator" data-toggle="dropdown">
          <i data-feather="bell"></i>
          <span>2</span>
        </a>
        <Notifications/>
      </div>
      <UserProfile/>
    </div>
  </header>
</template>

<script>
import firebase from "firebase";
import NavigationMenu from "../components/NavigationMenu.vue";
import Notifications from "../components/Notifications";
import UserProfile from "../components/UserProfile"

export default {
  name: "Header"
};
</script>