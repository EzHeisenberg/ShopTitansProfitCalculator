<template>
  <div class="home">
    <h1 class="p-3 title">profit calculator</h1>

    <div class="container">
      <ProfitMarket></ProfitMarket>
    </div>
  </div>
</template>


<style lang="sass">

</style>



<script>
// @ is an alias to /src
import ProfitMarket from '@/components/ProfitMarket.vue'



export default {
  name: 'Home',
  components: {
    ProfitMarket
  }
}
</script>
