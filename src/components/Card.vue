<template >
    <div class="card border-dark mb-3" style="max-width: 20rem;">
  
  <div class="card-body text-dark">
    <h5 class="card-title">{{title}}</h5>
    <p class="card-text">{{desc}}</p>
  </div>
</div>
</template> 

<script>




export default {
    name : 'Card',
    props:{
        title: String,
        desc : String,
    }
};
</script>

<style scoped>
@import '../assets/style/components/Card.css'
</style>