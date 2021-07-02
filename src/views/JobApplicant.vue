<template>
<NavbarUser :name="name"/>
<div class="container-fluid ">
    <div class="content" >

        <div class="row row-wrap">
            <div class="col-md-12 ">
                <cardjoblist v-for="(Job_detail, i) in Job_details" :key="i" class=" my-5" :job_title="Job_detail.job_title " :job_desc="Job_detail.description" :job_location="Job_detail.location" :job_salary="Job_detail.salary" :ref="ref" >
                <template v-slot:btnapply >            
                    <button type="button" class="btn btn-apply ms-auto" @click="apply(i)" >Apply Now</button>
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
import AuthenticationService from '../services/Auth-Service'
export default {
  name: "JobApplicant",
  components: {
    NavbarUser,
    cardjoblist,

  },
  data(){
      return{
          Job_details:null,
          name:"mega wati"
      }
  },
  methods:{
      async apply(i){
        const apply = this.Job_details[i]
        await AuthenticationService.apply({
           email_perekrut : apply.email_perekrut,
           id_pekerjaan : apply.id_pekerjaan,    
        })
      },
      async getPost(){
       const response = await AuthenticationService.kerjaan({
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
@import '../assets/style/views/JobApplicant.css'


</style>

