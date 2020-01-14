<template>
    <NewRoomType v-if="accountSection == 'rooms'" />
    <new-coupon  v-else-if="accountSection == 'coupons'" />
    
</template>

<script>

import store from "../../store.js";
import NewRoomType from "../modals/NewRoomType.vue";
import NewCoupon from "../modals/NewCoupon.vue";


export default {
    name: "AccountModals",
    computed: {
        accountSection() {
            return this.$store.state.accountSidebarSelecton;
        }
    },
    components: {
       NewRoomType,
       NewCoupon
    }
}
</script>