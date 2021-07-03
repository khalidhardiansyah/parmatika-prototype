<template>

  <div class="container-fluid nav-color position-fixed top-0" >
  <nav class="navbar navbar-expand-lg ">
  <div class="container-lg py-3">
    <router-link class="navbar-brand" to="/"><img class="img-brand" src="../assets/style/logo/logo.png"></router-link>
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item px-5 ">
          <router-link class="nav-link text-nav" aria-current="page" to="/Findjob">Find Jobs</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
         <li class="nav-item dropdown">
          <a class="nav-link text-nav dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hallo, {{name}}
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <router-link to="" class="dropdown-item text-nav" data-bs-toggle="modal" data-bs-target="#Modallogout">Log Out</router-link>
            </li>
            <li>
              <slot  name="list-JA"></slot>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>


</nav>


  </div>
         <!-- log out warning -->
  <div class="modal fade" id="Modallogout" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body d-flex flex-column align-items-center">
        <h5>Are you Sure want to sign out?</h5>
        <div class="confirm-button mt-3">
          <button type="button" class="btn btn-info mx-2" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-danger mx-2" @click="Logout">Sign Out</button>
        </div>
      </div>
    </div>
  </div>
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

