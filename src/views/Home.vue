<template>
  <TheNavbar />
  <div>
    <div class="container-fluid bg-color">
      <div class="container-lg py-5">
        <div class="row justify-content-between py-5">
          <div class="col-lg-5 py-5 my-5">
            <div class="d-flex flex-col flex-wrap">
              <h1 class="title-hero">{{ title }}</h1>
              <p class="sub-title-hero mt-5">
                {{ subtitle }}
              </p>
            </div>
          </div>

          <div class="col-lg-5 py-5 my-5">
            <img
              class="hero-img p-3"
              src="@/assets/style/bg/hero.svg"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="container-lg py-lg-5 ">
        <h2 class="sub-title-content text-center mb-5">Latest Job Posting</h2>
        <div class="job-content mx-auto ">
          <ul
            class="
              list-unstyled
              d-flex
              justify-content-between
              flex-row flex-wrap
              mx-3
              my-3
            "
          >
            <li v-for="(job_detail, i) in job_details" :key="i" class="my-3">
              <Card 
                :job_title="job_detail.job_title"
                :job_desc="job_detail.description"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <TheFooter class="" />
</template>


<script>
// component
import TheNavbar from "../components/TheNavbar.vue";
import Card from "../components/Card.vue";
import TheFooter from "../components/TheFooter.vue";
import AuthenticationService from '../services/Auth-Service'
export default {
  name: "Home",
  components: {
    TheNavbar,
    Card,
    TheFooter,
  },
  data() {
    return {
      title: "Let's Find Your Dream Job",
      subtitle:
        "We provide job vacancies for job seekers who are pursuing their dreams. Therefore, we provide a job vacancy website which can be accessed easily.",
      title_latest: "Latest Job Posting",
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
@import "../assets/style/views/Home.css";
</style>

