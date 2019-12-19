<template>
    <NewRoomType v-if="accountSection == 'rooms'" />
    
</template>

<script>

import store from "../../store.js";
import NewRoomType from "../modals/NewRoomType.vue";

export default {
    name: "AccountModals",
    computed: {
        accountSection() {
            return this.$store.state.accountSidebarSelecton;
        }
    },
    components: {
       NewRoomType
    }
}
</script>