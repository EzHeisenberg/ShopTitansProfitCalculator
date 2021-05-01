<template>
  <div class="Shop">
    <h1 class="title p-3">Your Shop</h1>
    <div class="container">
      <ProfilMerchant></ProfilMerchant>
    </div>
  </div>
</template>


<style lang="sass">


</style>


<script>
// @ is an alias to /src
import ProfilMerchant from '@/components/ProfilMerchant.vue'


export default {
  name: 'Shop',
  components: {
    ProfilMerchant
  }
}
</script>
