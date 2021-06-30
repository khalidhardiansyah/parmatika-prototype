<template>
<NavbarUser />
<div class="container-fluid ">
    <div class="content" >

        <div class="row row-wrap">
            <div class="col-md-12 ">
                <cardjoblist v-for="Job_detail in Job_details" :key="Job_detail.id" class=" my-5" :job_title="Job_detail.job_title " :job_desc="Job_detail.job_desc" :job_location="Job_detail.job_location" :job_salary="Job_detail.job_salary" :ref="ref" >
                <template v-slot:btnapply >            
                    <button type="button" class="btn btn-apply ms-auto" @click="apply" >Apply Now</button>
                </template>
                </cardjoblist>
            </div>
        </div>
    </div>
</div>
</template>


<script>
import NavbarUser from "../components/NavbarUser.vue";
import cardjoblist from "../components/CardJobList.vue";




export default {
  name: "JobApplicant",
  components: {
    NavbarUser,
    cardjoblist,

  },
  data(){
      return{
          Job_details:[
              {id:0,job_title:"KUli",
              job_desc:"membangun rumah dan jalan dibawah pemerintah belanda",
              job_location:"anyer-panarukan",
              job_salary:"2000"},

              {id:1,job_title:"ART",
              job_desc:"membangun rumah dan jalan dibawah pemerintah belanda",
              job_location:"panarukan",
              job_salary:"200"},
              {id:2,job_title:"Kadrun",
              job_desc:"membangun negara",
              job_location:"monas",
              job_salary:"nasi bungkus",
              },
          ]  
              
          
      }
  },
  methods:{
      apply(){
          alert("anda mendaftar pekerjaan ini")

          

      }
  }
};
</script>

<style scoped>
@import '../assets/style/views/JobApplicant.css'


</style>

