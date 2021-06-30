<template>
<TheNavbar/>
  <div >
      
    <div class="container-fluid  bg-color">
      <div class="container-lg py-5">
        
        <div class="row justify-content-between  py-5">
          <div class="col-lg-4 py-5 my-5">
            <div class="d-flex flex-col flex-wrap">
              <h1 class="title-hero">Let's Make Car</h1>
              <p class="sub-title-hero mt-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Blanditiis quia provident deserunt corporis rem temporibus
                repellendus neque culpa id non. Dignissimos, maxime debitis
                doloribus libero quia quidem quod atque ipsum.
              </p>
            </div>
          </div>

          <div class="col-lg-5 py-5 my-5">
            <img
              class="hero-img p-3"
              src="https://assets-a1.kompasiana.com/items/album/2020/08/17/img-20200806-193756-5f3a6b7862e8032a347633d2.jpg"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>

      
    </div>
          <div class="container-fluid">
        <div class="container-lg py-5">
          <h2 class="sub-title-content text-center">Latest Job Posting</h2>
          <div class="job-content ">
            <ul class="list-unstyled d-flex justify-content-between flex-row flex-wrap mx-3 my-3">
              <li>
                <Card
                  class="card-job"
                  title="Lorem IPsum"
                  desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis quia provident deserunt corporis rem temporibus repellendus neque culpa id non. Dignissimos, maxime debitis doloribus libero quia quidem quod atque ipsum."
                />
              </li>
              <li>
                <Card
                  class="card-job"
                  title="Lorem IPsum"
                  desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis quia provident deserunt corporis rem temporibus repellendus neque culpa id non. Dignissimos, maxime debitis doloribus libero quia quidem quod atque ipsum."
                />
              </li>
              <li>
                <Card
                  class="card-job"
                  title="Lorem IPsum"
                  desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis quia provident deserunt corporis rem temporibus repellendus neque culpa id non. Dignissimos, maxime debitis doloribus libero quia quidem quod atque ipsum."
                />
              </li>
              <li>
                <Card
                  class="card-job"
                  title="Lorem IPsum"
                  desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis quia provident deserunt corporis rem temporibus repellendus neque culpa id non. Dignissimos, maxime debitis doloribus libero quia quidem quod atque ipsum."
                />
              </li>
            </ul>
          </div>
        </div>

      </div>
    
  </div>

        <TheFooter class=""/>

</template>


<script>
// component
import TheNavbar from "../components/TheNavbar.vue";
import Card from "../components/Card.vue";
import TheFooter from "../components/TheFooter.vue";



export default {
  name: "Home",
  components: {
    TheNavbar,
    Card,
    TheFooter,
  },
};
</script>

<style scoped>
@import '../assets/style/views/Home.css'
</style>

