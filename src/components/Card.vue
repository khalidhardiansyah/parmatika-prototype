<template >
  <div class="card border-dark rounded-3 mb-3 " style="max-width: 25rem;">
  <div class="card-header "></div>
  <div class="card-body text-dark">
    <h5 class="card-title">{{job_title}}</h5>
    <p class="card-text">{{job_desc}}</p>
  </div>
</div>

</template> 

<script>




export default {
    name : 'Card',
    props:['job_title','job_desc','id']
};
</script>

<style scoped>
@import '../assets/style/components/Card.css'
</style>