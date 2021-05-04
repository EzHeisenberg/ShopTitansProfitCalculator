<template>
  <div class="container Shop">
    <h1 class="title p-3">Your Shop</h1>
    <ShopProfil></ShopProfil>
  </div>
</template>


<style lang="sass">


</style>


<script>
// @ is an alias to /src
import ShopProfil from '@/components/ShopProfil.vue'


export default {
  name: 'Shop',
  components: {
    ShopProfil
  }
}
</script>
