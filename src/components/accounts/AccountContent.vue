<template>
    <AccountRooms v-if="accountSection == 'rooms'" />
    <AccountSettings v-else-if="accountSection == 'settings'" />
    <AccountPassword v-else-if="accountSection == 'password'" />
    <AccountCoupons v-else-if="accountSection == 'coupons'" />
</template>

<script>

import store from "../../store.js";
import AccountPassword from "./AccountPassword.vue";
import AccountSettings from "./AccountSettings.vue";
import AccountRooms from "./AccountRooms.vue";
import AccountCoupons from "./AccountCoupons.vue";

export default {
    name: "AccountContent",
    computed: {
        accountSection() {
            return this.$store.state.accountSidebarSelecton;
        }
    },
    components: {
        AccountRooms,
        AccountSettings,
        AccountPassword,
        AccountCoupons
    }
}
</script>