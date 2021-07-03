<template>
<NavbarUser :name="name">
  <template v-slot:list-JA>
    <router-link to="" class="dropdown-item text-nav" data-bs-toggle="modal" data-bs-target="#staticBackdrop">XXXX</router-link>
  </template>
  </NavbarUser>
  
  <div class="container-fluid color-bg">
    <div class="container-sm bg-light content">
      <div class="row g-3">
        <div class="col-md-12 border-bottom">
          <h3>Add Job</h3>
        </div>
        <div class="col-md-6 form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Job Tittle"
            v-model="job_title"
          />
          <label for="floatingInput">Job Tittle</label>
        </div>
        <div class="col-md-6 form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Salary"
            v-model="salary"
          />
          <label for="floatingInput">Salary</label>
        </div>
        <div class="col-12 form-floating">
          <textarea
            class="form-control"
            placeholder="Location"
            id="floatingTextarea"
            v-model="location"
          ></textarea>
          <label for="floatingTextarea">Location</label>
        </div>
        <div class="col-12 form-floating">
          <textarea
            class="form-control"
            placeholder="Description"
            id="floatingTextarea"
            v-model="description"
          ></textarea>
          <label for="floatingTextarea">Description</label>
        </div>

        <div class="col-12 d-flex flex-column align-items-end">
          <button class="btn btn-primary" @click="postnow">
            Post Now
          </button>
        </div>
      </div>
    </div>
    <div class="container-sm my-5 ">
      <h3 class="text-white">List Your Post</h3>
      <div class="card size-card bg-light mx-5 mx-5" v-for="(job,i) in Job_details" :key="i" >
        <h5 class="card-header header-color"></h5>
        <div class="card-body" >
          <h5 class="card-title sub-title-content">
            <span class="material-icons me-3">work</span>{{ job.job_title }}
          </h5>
          <p class="card-text sub-title-content">
            <i class="material-icons me-3">description </i>{{ job.description }}
          </p>
          <p class="card-text location sub-title-content">
            <i class="material-icons me-3">place </i>{{ job.location }}
          </p>
          <p class="card-text location sub-title-content">
            <i class="material-icons me-3">attach_money </i>{{ job.salary }}
          </p>
        </div>
      </div>
    </div>

    <!-- modal job applicant list -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal_header mx-auto">
        <h5 class="modal-title my-3" id="staticBackdropLabel">List Applicant Job</h5>
      </div>
      <div class="modal-body">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Applicant Email</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Job Tittle</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="List_applicant in List_applicants" :key="List_applicant.id">
      <th scope="row">{{List_applicant.id}}</th>
      <td>{{List_applicant.Applicant_email}}</td>
      <td>{{List_applicant.Phone_number}}</td>
      <td>{{List_applicant.Job_tittle}}</td>
    </tr>
  </tbody>
</table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>


<script>
import NavbarUser from "../components/NavbarUser.vue";
import AuthenticationService from '../services/Auth-Service'
export default {
  name: "JobRecruiter",
  components: {
    NavbarUser,
  },
  data() {
    return {
      job_title: "",
      salary: "",
      location: "",
      description: "",
      Job_details: null,
      name:"Jo ko wee",
      List_applicants:[
        {id:1, Applicant_email:"Lorema@gmail.com", Phone_number:"0999393832", Job_tittle:"Dosen SA tidur"},
        {id:2, Applicant_email:"Lorema@gmail.com", Phone_number:"0999393832", Job_tittle:"Dosen SA tidur"},
        {id:3, Applicant_email:"Lorema@gmail.com", Phone_number:"0999393832", Job_tittle:"Dosen SA tidur"},
      ]
    };
  },
  methods: {
    async postnow(){
      const response = await AuthenticationService.lamar({
                job_title: this.job_title,
                salary: this.salary,
                location: this.location,
                description: this.description,
            })
    },
    async getPost(){
       const response = await AuthenticationService.post({
            })
            this.Job_details = response.data
      }
    },
    beforeMount(){
        this.getPost()
    }
};
</script>

<style scoped>
@import "../assets/style/views/JobRecruiter.css";
</style>

