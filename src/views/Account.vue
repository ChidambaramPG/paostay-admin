<template>
  <div>
    <NavigationMenu />
    <div class="content content-fixed min-vh-100">
        <div class="container pd-x-0 pd-lg-x-10 pd-xl-x-0">
            <div class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
                <div>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb breadcrumb-style1 mg-b-10">
                            <li class="breadcrumb-item"><a href="#">Account</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Account Settings</li>
                        </ol>
                    </nav>
                    <h4 class="mg-b-0 tx-spacing--1">Hello Samad!</h4>
                </div>
            </div>
            <div class="row row-xs">
                <AccountSidebar/>
                <AccountContent/>
                <AccountModals/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import NavigationMenu from "../components/NavigationMenu.vue";
import AccountSidebar from "../components/accounts/AccountSidebar.vue";
import AccountContent from "../components/accounts/AccountContent.vue";
import AccountModals from "../components/accounts/AccountModals.vue";

export default {
  name: "Account",
  
  components: {
    NavigationMenu,
    AccountSidebar,
    AccountContent,
    AccountModals
  }
};
</script>