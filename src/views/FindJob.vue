<template>
  <TheNavbar />
  <div class="container-fluid fj-cont">
      <div class="container-lg">
          <div class="row">
          <div class="col-12">
              <h1 class="fj-title">{{title}}</h1>
          </div>
          <div class="col-12 ">
            <CardJobList v-for="Job_detail in job_details" :key="Job_detail.id" class=" my-5" :job_title="Job_detail.job_title " :job_desc="Job_detail.description" :job_location="Job_detail.location" :job_salary="Job_detail.salary">
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

export default {
  name:'FindJob',
  components: {
    TheNavbar,
    CardJobList,
  },
  data() {
    return {
        title:"Let's Find The Right Career",
        job_details:[
          {id:1, job_title:"LOrem tolololo", description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis nulla perspiciatis, amet deleniti minus maiores accusamus expedita tempora fugit eaque voluptates perferendis, vel debitis nemo aperiam odit neque, vitae dicta.", location:"Cendana", salary:20300},
           {id:2, job_title:"LOrem tolololo",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis nulla perspiciatis, amet deleniti minus maiores accusamus expedita tempora fugit eaque voluptates perferendis, vel debitis nemo aperiam odit neque, vitae dicta.", location:"Cendana", salary:20300},
           {id:3, job_title:"LOrem tolololo",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis nulla perspiciatis, amet deleniti minus maiores accusamus expedita tempora fugit eaque voluptates perferendis, vel debitis nemo aperiam odit neque, vitae dicta.", location:"Cendana", salary:20300},
           {id:4, job_title:"LOrem tolololo",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis nulla perspiciatis, amet deleniti minus maiores accusamus expedita tempora fugit eaque voluptates perferendis, vel debitis nemo aperiam odit neque, vitae dicta.", location:"Cendana", salary:20300},
           {id:5, job_title:"LOrem tolololo",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis nulla perspiciatis, amet deleniti minus maiores accusamus expedita tempora fugit eaque voluptates perferendis, vel debitis nemo aperiam odit neque, vitae dicta.", location:"Cendana", salary:20300},
           {id:6, job_title:"LOrem tolololo",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis nulla perspiciatis, amet deleniti minus maiores accusamus expedita tempora fugit eaque voluptates perferendis, vel debitis nemo aperiam odit neque, vitae dicta.", location:"Cendana", salary:20300}
          ]
      
  }
},
};
</script>

<style scoped>
@import "../assets/style/views/FindJobs.css";
</style>

