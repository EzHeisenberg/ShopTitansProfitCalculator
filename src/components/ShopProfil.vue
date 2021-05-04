<template>
  <div class="p-2">


      <div class="p-2 row">
        <div class="col-md-3 p-2">
          <label for="level" class="form-label">Your Level</label>
          <input type="tel" v-model="level" class="form-control" id="level">
        </div>
        <div class="col-md-6 p-2">
          <label for="xp" class="form-label">Your XP</label>
          <input type="tel" v-model="xp" class="form-control" id="xp">
        </div>
        <div class="col-md-3 p-2">
          <label for="slots" class="form-label">Number of slots</label>
          <input type="tel" v-model="slots" class="form-control" id="slots">
        </div>
        <button @click="persist">Sauver</button>
        <button @click="clearLs">Clear</button>

      </div>
      <div class="d-flex justify-content-center">

      </div>
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
  name: "ShopProfil",
  data() {
    return{
      level: 1,
      slots: 0,
      xp: 0,
      merchent: xp.feed.entry
    }
  },
  methods: {
    persist() {
      localStorage.xp = this.xp;
      localStorage.level = this.level;
      localStorage.slots = this.slots;
      alert("Saved");
    },
    clearLs(){
      localStorage.removeItem("xp");
      localStorage.removeItem("level");
      localStorage.removeItem("slots");
      alert("Clear");
    },
    getXpLevel(lvl){
      let level_format = (this.merchent[lvl].gsx$merchantlevel.$t).replace(/[, ]+/g, "").trim();
      let level_xpneed = (this.merchent[lvl].gsx$xpneeded.$t).replace(/[, ]+/g, "").trim();
      return [
        level_format, level_xpneed
      ];
    }
  },
  mounted() {
    if (localStorage.xp) this.xp = localStorage.xp;
    if (localStorage.level) this.level = localStorage.level;
    if (localStorage.slots) this.slots = localStorage.slots;
  },
  created() {
    this.getXpLevel(this.level);
  }
}
</script>

<style scoped>

</style>