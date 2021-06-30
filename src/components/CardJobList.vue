<template>
  <div class="container-md">
    <div class="card size-card">
      <h5 class="card-header header-color"></h5>
      <div class="card-body">
        <h5 class="card-title sub-title-content"><span class="material-icons me-3 ">work</span>{{ job_title }}</h5>
        <p class="card-text sub-title-content">
          <i class="material-icons me-3">description </i>{{ job_desc }}
        </p>
                    <p class="card-text location sub-title-content">
              <i class="material-icons me-3">place </i>{{ job_location }}
            </p>
                        <p class="card-text location sub-title-content">
              <i class="material-icons me-3">attach_money </i>{{ job_salary }}
            </p>
           <ul class="list-unstyled d-flex justify-content-end">
               <li class="">
                    <slot name="btnapply"></slot>
               </li>
           </ul>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "cardjoblist",
  props: ["id", "job_title", "job_desc", "job_location", "job_salary"],
};
</script>
<style scoped>
@import "../assets/style/components/cardJobList.css";
</style>