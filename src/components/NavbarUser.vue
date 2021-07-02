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
          <router-link class="nav-link text-nav" aria-current="page" to="/Findjob">Find Jobs</router-link>
        </li>
      </ul>
      <!-- <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
              <router-link class="nav-link text-nav" to="/" @click="Logout">Log Out</router-link>
        </li>
      </ul> -->

      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
         <li class="nav-item dropdown">
          <a class="nav-link text-nav dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hallo, {{name}}
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <router-link class="dropdown-item text-nav" to="/" @click="Logout">Log Out</router-link>
            </li>
            <!-- <li><a class="dropdown-item" href="#">Action</a></li> -->
            
            <!-- <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li> -->
          </ul>
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
        let c = confirm("Wanna log out?")
        console.log(c)
        if(c == true){
          localStorage.removeItem('token')
          this.$router.push('/')
        }else {
          
        }
      }
    },
    props:['name']
    
};
</script>

<style scoped>
@import '../assets/style/components/Navbar.css'
</style>

