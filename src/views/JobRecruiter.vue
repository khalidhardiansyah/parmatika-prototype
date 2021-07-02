<template>
  <NavbarUser />
  
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
      <div class="card size-card bg-light mx-5 Smt-5" v-for="(job,i) in Job_details" :key="i" >
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

