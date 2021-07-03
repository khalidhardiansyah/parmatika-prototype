<template>
  <TheNavbar />
  <div class="container-fluid fj-cont">
      <div class="container-lg">
          <div class="row">
          <div class="col-12">
              <h1 class="fj-title">{{title}}</h1>
          </div>
          <div class="col-12 ">
            <CardJobList v-for="(Job_detail, i) in job_details" :key="i" class=" my-5" :job_title="Job_detail.job_title " :job_desc="Job_detail.description" :job_location="Job_detail.location" :job_salary="Job_detail.salary">
                <template v-slot:btn-login>            
                    <button type="button" class="btn btn-apply ms-auto mx-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Apply Now</button>
                </template>
            </CardJobList>
          </div>
      </div> 
      </div>
  </div>
</template>


<script>
// component
import TheNavbar from "../components/TheNavbar.vue";
import CardJobList from "../components/CardJobList.vue"
import AuthenticationService from '../services/Auth-Service'
export default {
  name:'FindJob',
  components: {
    TheNavbar,
    CardJobList,
  },
  data() {
    return {
        title:"Let's Find The Right Career",
        job_details:null
  }
},
  methods: {
    async getPost(){
      const response = await AuthenticationService.kerjaan({
            })
      console.log(response)
      this.job_details = response.data
    },
    },
    beforeMount(){
      this.getPost()
    }
};
</script>

<style scoped>
@import "../assets/style/views/FindJobs.css";
</style>

