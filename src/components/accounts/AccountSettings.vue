<template>
	<div class="col-md-8">
        <div class="card pd-40">
            <div class="row">
                <div class="col-md-8">
                    <form action="" class="form">
                        <div class="form-group">
                            <label for="">Name</label>
                            <input type="text" class="form-control" value="Abdul Samad">
                        </div>
                        <div class="form-group">
                            <label for="">Email</label>
                            <input type="text" class="form-control" value="samad@gmail.com">
                        </div>
                        <div class="form-group">
                            <label for="">Phone</label>
                            <input type="text" class="form-control" value="+91 9400400400">
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary"><i data-feather="check-circle"></i> Save Changes</button>
                        </div>
                    </form>
                </div>
                <div class="col-md-4">
                    <div class="form-group text-center">
                        <div class="avatar avatar-xxl m-auto">
                            <!-- <span class="avatar-initial rounded">df</span> -->
                            <img src="https://via.placeholder.com/500" class="rounded" alt="">
                        </div>
                        <div class="custom-file mg-t-20">
                            <div class="fileUpload btn btn-sm pd-x-15 btn-primary btn-uppercase">
                                <span>Upload</span>
                                <input type="file" class="upload" />
                            </div>
                        </div>
                    </div>
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