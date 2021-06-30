<template >
  <TheNavbar />
  <div class="container-fluid bg-blue">
    <div class="container-lg position-relative d-flex flex-column align-items-lg-center sign-tabs tab-content ">
      <ul class="nav nav-tabs row" id="myTab0" role="tablist">
  <li class="nav-item col-6" role="presentation">
    <button
      class="nav-link btn-tabs active "
      id="tab0"
      data-bs-toggle="tab"
      data-bs-target="#home0"
      type="button"
      role="tab"
      aria-controls="home"
      aria-selected="true"
      

    >
      Job Applicant
    </button>
  </li>
  <li class="nav-item col-6" role="presentation">
    <button class="nav-link " id="profile-tab0"
      data-bs-toggle="tab"
      data-bs-target="#profile0"
      type="button"
      role="tab"
      aria-controls="profile"
      aria-selected="false">Job Recruiter
  </button>
  
  </li>

</ul>
<div class="tab-content">
  <div
    class="tab-pane fade show py-5 px-5 active"
    id="home0"
    role="tabpanel"
    aria-labelledby="home-tab0"
  >
    <RegistrationFormJobApplicant/>
  </div>
  <div class="tab-pane fade py-5 px-5" id="profile0" role="tabpanel" aria-labelledby="profile-tab0">
    <RegistrationFormJobRecruiter/>
  </div>
</div>
    </div>
  </div>
</template>

<script>
// component
import TheNavbar from '../../components/TheNavbar.vue';
import "@/assets/style/components/Signup.css"
import RegistrationFormJobApplicant from '../../components/RegistrationFormJobApplicant.vue'
import RegistrationFormJobRecruiter from '../../components/RegistrationFormJobRecruiter.vue';


export default {
  name: "Signup",
  components: {
    TheNavbar,
    RegistrationFormJobApplicant,
    RegistrationFormJobRecruiter,

  },
};
</script>

