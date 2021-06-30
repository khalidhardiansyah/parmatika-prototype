<template>
  <div class="container-fluid">
    <form >
    <div class="row g-3 py-4">
    <div class="col-12">
      <label class="form-label">Name</label>
      <input
        type="text"
        class="form-control"
        id="inputAddress"
        placeholder="Your name"
        v-model="name"
      />
    </div>
    <div class="col-md-6">
      <label for="inputEmail4" class="form-label">Email</label>
      <input type="email" class="form-control" id="inputEmail4" v-model="email" />
    </div>
    <div class="col-md-6">
      <label for="inputPassword4" class="form-label">Password</label>
      <input type="password" class="form-control" id="inputPassword4" v-model="password" />
    </div>
    <div class="col-md-3">
      <label for="inputZip" class="form-label">Age</label>
      <input type="text" class="form-control" id="inputZip" v-model="age"/>
    </div>
    <div class="col-md-4">
      <label for="inputState" class="form-label">Date Birth</label>
      <input type="date" class="form-control" id="inputCity" v-model="date_birth" />
    </div>
    <div class="col-md-5">
      <label for="inputCity" class="form-label">Phone number</label>
      <input type="tel" class="form-control" id="inputCity" v-model="phone_number"/>
    </div>

    <div class="col-12 d-flex py-5 flex-column align-items-center">
      <button type="submit" class="btn register-btn px-5 py-3" @submit="registerJO">REGISTER</button>
    </div>
    </div>
  </form>
  </div>
</template>

<script>
import AuthenticationService from '../services/Auth-Service'
export default {
    name:"RegistrationFormJobApplicant",
    data(){
        return{
            name:"",
            email:"",
            password:"",
            age:"",
            date_birth:"",
            phone_number:"",
            position:"Pelamar"

        }
    },
    methods:{
        async registerJA(){
            const response = await AuthenticationService.login({
                username: this.email,
                kataSandi: this.password
            })
            const token = response.data.token
            localStorage.setItem('token', token)
            this.$root.push('/about')
        }
    
}
};
</script>
