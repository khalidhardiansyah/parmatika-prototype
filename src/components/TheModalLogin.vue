<template>
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header d-inline-block">
        <h5 class="modal-title" id="staticBackdropLabel">Login</h5>
      </div>
      <div class="modal-body">
          <div class="login-page">
    <form >
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Email address</label
        >
        <input
          type="email"
          class="form-control"
          v-model="email"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" >Password</label
        >
        <input
          type="password"
          class="form-control"
          v-model="password"
          placeholder="enter your password"
        />
      </div>
    <div class="mb-3">
        <button type="submit" @click="Login" class="btn px-5 py-2">Login</button>    
      </div>
      <div class="mb-3">
        <p>Doesn’t have any account? <a href="/signup" class="text-dark">Register Now</a></p> 
           
      </div>
      
    </form>
  </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn-close mx-3" data-bs-dismiss="modal"></button>
        
      </div>
    </div>
  </div>
  
</div>

</template>

<script>
import AuthenticationService from '../services/Auth-Service'
export default {
    name:"TheModalLogin",
    data(){
        return{
            email:"",
            password:""
        }
    },
    methods:{
        async login(){
            const response = await AuthenticationService.login({
                username: this.email,
                kataSandi: this.password
            })
            const token = response.data.token
            localStorage.setItem('token', token)
            this.$root.push('/about')
        }
    }
}
</script>

<style scoped>
@import '../assets/style/components/Login.css'
</style>