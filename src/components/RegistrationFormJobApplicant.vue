<template>
  <div class="container-fluid">
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
      <input type="email" class="form-control" id="inputEmail4" placeholder="masm@gmail.com" v-model="email" />
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
      <button class="btn register-btn px-5 py-3" @click="registerJA">REGISTER</button>
    </div>
    </div>
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
            role:"Pelamar"

        }
    },
    methods:{
        async registerJA(){
            const response = await AuthenticationService.register({
                name:this.name,
                email:this.email,
                age:this.age,
                date_birth:this.date_birth,
                phone_number:this.phone_number,
                password:this.password,
                role:this.role
            })
            this.$root.push('/home')
            
        }
    
}
};
</script>
