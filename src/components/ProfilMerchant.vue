<template>
  <div class="p-2">

    soon ;)
    <!--
    <form action="">
      <input v-model="xp">
      <input minlength="1" maxlength="99"  type="number" v-model="level">
      <button @click="persist">Sauver</button>
      <button @click="clearLs">Clear</button>
    </form>

    <p>{{xp}}</p>
    <p>{{level}}</p>

    {{getXpLevel(level)[1]}}
-->

  </div>
</template>

<script>
import xp from '../items/merchent.json';



export default {
  name: "Profil",
  data() {
    return{
      level: 1,
      xp: 0,
      merchent: xp.feed.entry
    }
  },
  methods: {
    persist() {
      localStorage.xp = this.xp;
      localStorage.level = this.level;
    },
    clearLs(){
      localStorage.clear()
    },
    getXpLevel(lvl){
      let level_format = (this.merchent[lvl].gsx$merchantlevel.$t).replace(/[, ]+/g, "").trim();
      let level_xpneed = (this.merchent[lvl].gsx$xpneeded.$t).replace(/[, ]+/g, "").trim();
      return [
        level_format, level_xpneed
      ]
    }
  },
  mounted() {
    if (localStorage.xp) this.xp = localStorage.xp;
    if (localStorage.level) this.level = localStorage.level;
  },
  created() {
    this.getXpLevel(this.level);
  }
}
</script>

<style scoped>

</style>