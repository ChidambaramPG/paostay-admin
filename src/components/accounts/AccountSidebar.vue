<template>
	<div class="col-md-4">
        <div class="card pd-40">
        	
            <ul class="steps steps-vertical">
                <li class="step-item active">
                    <a href="account.html" class="step-link" @click.prevent="() => setAccountSection('settings')">
                        <span class="step-icon"><i data-feather="user"></i></span>
                        <div>
                            <span class="step-title">Account Settings</span>
                            <span class="step-desc">Your personal details.</span>
                        </div>
                    </a>
                </li>
                <li class="step-item">
                    <a href="password.html" class="step-link" @click.prevent="() => setAccountSection('password')">
                        <span class="step-icon"><i data-feather="lock"></i></span>
                        <div>
                            <span class="step-title">Change Password</span>
                            <span class="step-desc">Change your password</span>
                        </div>
                    </a>
                </li>
                <li class="step-item">
                    <a href="password.html" class="step-link" @click.prevent="() => setAccountSection('rooms')">
                        <span class="step-icon"><i data-feather="lock"></i></span>
                        <div>
                            <span class="step-title">Room Types</span>
                            <span class="step-desc">Add and edit new oom types</span>
                        </div>
                    </a>
                </li>
            </ul>
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