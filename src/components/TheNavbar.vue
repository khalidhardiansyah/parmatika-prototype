<template>

  <div class="container-fluid nav-color position-fixed top-0" >
  <nav class="navbar navbar-expand-lg nav-light">
  <div class="container-lg py-3">
    <router-link class="navbar-brand" to="/">Cari Kerja</router-link>
       <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item px-5 ">
          <router-link class="nav-link text-nav" aria-current="page" to="/">Find Jobs</router-link>
        </li>
        <li class="nav-item px-5">
          <router-link class="nav-link text-nav" to="/">Upload Resume</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item px-5">
            <router-link class=" nav-link text-nav" data-bs-toggle="modal" data-bs-target="#staticBackdrop" to="">Sign In</router-link>
        </li>
          <li class="nav-item">
              <router-link class="nav-link text-nav" to="/signup">Register</router-link>
        </li>
      </ul>
    </div>
  </div>

</nav>
      
  </div>
<TheModalLogin/>
</template>

<script>

import TheModalLogin from "./TheModalLogin"


export default {
    name : 'TheNavbar',
    components:{
        TheModalLogin,
    }
};
</script>

<style scoped>
@import '../assets/style/components/Navbar.css'
</style>

