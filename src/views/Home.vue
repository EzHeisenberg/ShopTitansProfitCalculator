<template>
  <div class="container home">
    <h1 class="p-3 title">profit calculator</h1>
    <Market></Market>
  </div>
</template>





<script>
import Market from "@/components/Market";

export default {
  name: 'Home',
  components: {
    Market
  }
}
</script>
