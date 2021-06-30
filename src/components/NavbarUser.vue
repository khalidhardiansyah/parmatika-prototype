<template>

  <div class="container-fluid nav-color position-fixed top-0" >
  <nav class="navbar navbar-expand-lg ">
  <div class="container-lg py-3">
    <router-link class="navbar-brand" to="/">Cari Kerja</router-link>
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item px-5 ">
          <router-link class="nav-link text-nav" aria-current="page" to="">Find Jobs</router-link>
        </li>
        <li class="nav-item px-5">
          <router-link class="nav-link text-nav" to=" ">Upload Resume</router-link>
        </li>
        <li class="nav-item px-5">
          <router-link class="nav-link text-nav" to="/about" tabindex="-1" aria-current="page">About</router-link>
        </li>
        <li class="nav-item px-5">
          <router-link class="nav-link text-nav" to="/contact" tabindex="-1" aria-current="page">Contact</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
              <router-link class="nav-link text-nav" to="/" @click="Logout">Log Out</router-link>
        </li>
      </ul>
    </div>
  </div>

</nav>
      
  </div>
</template>

<script>

export default {
    name : 'NavbarUser',
    methods:{
      Logout(){
        confirm("Wanna log out?")
      }
    }
};
</script>

<style scoped>
@import '../assets/style/components/Navbar.css'
</style>

