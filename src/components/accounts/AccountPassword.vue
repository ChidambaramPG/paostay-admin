<template>
	<div class="col-md-8">
        <div class="card pd-40">
            <div class="row">
                <div class="col-md-8">
                    <form action="" class="form">
                        <div class="form-group">
                            <label for="">Current Password</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="">New Password</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="">Confirm New Password</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary"><i data-feather="check-circle"></i> Update Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from "../../store.js";

export default{
	name:"AccountSidebar",
	methods:{
		setAccountSection(sec){
			store.commit("setAccountSidebarSelecton",sec)
		}
	}
}
</script>