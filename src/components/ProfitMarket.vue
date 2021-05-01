<template>
  <div class="p-2">
    <form>
      <div class="p-2 row">
        <div class="col-md-6 p-2">
          <label for="selectItem" class="form-label">Select your item</label>
          <model-select id="selectItem" :options="options" v-model="selected"
                        placeholder="Choisir un item"></model-select>
        </div>
        <div class="col-md-6 p-2">
          <label for="multiplicateur" class="form-label">Number of items</label>
          <input type="tel" minlength="1" min="1" v-model="multiplicateur" class="form-control" id="multiplicateur">
        </div>
        <div class="col-md-6 p-2">
          <label for="initValue" class="form-label">Basic item value</label>
          <input disabled class="form-control img-input" id="initValue"
                 :placeholder="(selectedBlueprint(selected)._value).toLocaleString()">
        </div>
        <div class="col-md-6 p-2">
          <label for="marketValue" class="form-label">Sell to : <sub>(Max in the market: {{ (selectedBlueprint(selected)._value * 10).toLocaleString() }})</sub></label>
          <input type="tel"
                 :maxlength="selectedBlueprint(selected)._value * 10"
                 minlength="1" min="1"
                 :placeholder="'Max value : ' + (selectedBlueprint(selected)._value * 10).toLocaleString()"
                 v-model="marketValue"
                 class="form-control"
                 id="marketValue">
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" id="inlineRadio1" value="0.10" v-model="picked" checked>
          <label class="form-check-label" for="inlineRadio1">12h <sub>(-10%)</sub></label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                 value="0.12" v-model="picked">
          <label class="form-check-label" for="inlineRadio2">24h <sub>(-12%)</sub></label>
        </div>
      </div>
    </form>

    <div class="ressources">
      <h4 class="paragraphe-title">Profit</h4>
      <div class="item-ressource">
        <div>
          <b>{{ Number((marketValueVerif() - (marketValue * Number(picked))) * multiplicateur).toLocaleString() }}</b>
          <img src="../assets/Misc/gold.png" alt="gold">
        </div>
      </div>
    </div>
    <hr>
    <div class="ressources">
      <h4 class="paragraphe-title">Ressources</h4>
      <div class="item-ressource">
        <div v-if="isNaN(selectedBlueprint(selected)._iron) === false">
          <img src="../assets/Resources/iron.png" alt="">
          <b>{{ selectedBlueprint(selected)._iron }}</b>
        </div>
        <div v-if="isNaN(selectedBlueprint(selected)._wood) === false">
          <img src="../assets/Resources/wood.png" alt="">
          <b>{{ selectedBlueprint(selected)._wood }}</b>
        </div>
        <div v-if="isNaN(selectedBlueprint(selected)._leather) === false">
          <img src="../assets/Resources/leather.png" alt="">
          <b>{{ selectedBlueprint(selected)._leather }}</b>
        </div>
        <div v-if="isNaN(selectedBlueprint(selected)._herbs) === false">
          <img src="../assets/Resources/herbs.png" alt="">
          <b>{{ selectedBlueprint(selected)._herbs }}</b>
        </div>
        <div v-if="isNaN(selectedBlueprint(selected)._steel) === false">
          <img src="../assets/Resources/steel.png" alt="">
          <b>{{ selectedBlueprint(selected)._steel }}</b>
        </div>
        <div v-if="isNaN(selectedBlueprint(selected)._ironwood) === false">
          <img src="../assets/Resources/ironwood.png" alt="">
          <b>{{ selectedBlueprint(selected)._ironwood }}</b>
        </div>
        <div v-if="isNaN(selectedBlueprint(selected)._fabric) === false">
          <img src="../assets/Resources/fabric.png" alt="">
          <b>{{ selectedBlueprint(selected)._fabric }}</b>
        </div>
        <div v-if="isNaN(selectedBlueprint(selected)._oils) === false">
          <img src="../assets/Resources/oil.png" alt="">
          <b>{{ selectedBlueprint(selected)._oils }}</b>
        </div>
        <div v-if="isNaN(selectedBlueprint(selected)._mana) === false">
          <img src="../assets/Resources/ether.png" alt="">
          <b>{{ selectedBlueprint(selected)._mana }}</b>
        </div>
        <div v-if="isNaN(selectedBlueprint(selected)._gems) === false">
          <img src="../assets/Resources/jewel.png" alt="">
          <b>{{ selectedBlueprint(selected)._gems }}</b>
        </div>
      </div>
    </div>
    <hr>
    <div class="ressources">
      <h4 class="paragraphe-title">Composants</h4>
      <div class="item-ressource">
        <div v-if="isNaN(selectedBlueprint(selected)._component1_amount) === false">
          <img :src="require(`@/assets/Components/${selectedBlueprint(selected)._component1}.png`)" alt="">
          <b>{{ selectedBlueprint(selected)._component1_amount }}</b>
        </div>
        <div v-if="isNaN(selectedBlueprint(selected)._component2_amount) === false">
          <img :src="require(`@/assets/Components/${selectedBlueprint(selected)._component2}.png`)" alt="">
          <b>{{ selectedBlueprint(selected)._component2_amount }}</b>
        </div>
        <div
            v-if="isNaN(selectedBlueprint(selected)._component1_amount) === true  && isNaN(selectedBlueprint(selected)._component2_amount) === true">
          <b>No components</b>
        </div>
      </div>

    </div>
  </div>
</template>


<script>
import Blueprint from '../items/blueprints.json';
import BlueprintClass from '../items/blueprint.js';
import {ModelSelect} from 'vue-search-select'
export default {
  name: "ProfitMarket",
  data: function () {
    return {
      multiplicateur: 1,
      selected: 0,
      picked: "0.10",
      blueprints: Blueprint.feed.entry,
      marketValue: "",
      options: [],
      item: {value: '', text: ''},
    }
  },
  methods: {
    selectedBlueprint(index) {
      const item = this.blueprints[index];
      return new BlueprintClass(
          String(item.gsx$name.$t),
          Number(item.gsx$type.$t),
          Number(item.gsx$tier.$t),
          Number((item.gsx$value.$t).replace(/[, ]+/g, "").trim()),
          Number(item.gsx$craftingtimeseconds.$t) * this.multiplicateur,
          String(item.gsx$craftingtimeformatted.$t),
          Number(item.gsx$merchantxp.$t) * this.multiplicateur,
          Number(item.gsx$workerxp.$t) * this.multiplicateur,
          Number(item.gsx$atk.$t),
          Number(item.gsx$def.$t),
          Number(item.gsx$hp.$t),
          Number(item.gsx$crit.$t),
          Number(item.gsx$eva.$t),
          Number((item.gsx$_d88ul.$t).replace(/[, ]+/g, "").trim()) * this.multiplicateur,
          Number((item.gsx$_dkvya.$t).replace(/[, ]+/g, "").trim()) * this.multiplicateur,
          Number((item.gsx$_dmair.$t).replace(/[, ]+/g, "").trim()) * this.multiplicateur,
          Number((item.gsx$_dnp34.$t).replace(/[, ]+/g, "").trim()) * this.multiplicateur,
          Number((item.gsx$_dp3nl.$t).replace(/[, ]+/g, "").trim()) * this.multiplicateur,
          Number((item.gsx$_df9om.$t).replace(/[, ]+/g, "").trim()) * this.multiplicateur,
          Number((item.gsx$_dgo93.$t).replace(/[, ]+/g, "").trim()) * this.multiplicateur,
          Number((item.gsx$_di2tg.$t).replace(/[, ]+/g, "").trim()) * this.multiplicateur,
          Number((item.gsx$_djhdx.$t).replace(/[, ]+/g, "").trim()) * this.multiplicateur,
          Number((item.gsx$_dw4je.$t).replace(/[, ]+/g, "").trim()) * this.multiplicateur,
          String(item.gsx$component.$t),
          String(item.gsx$component_2.$t),
          Number((item.gsx$amountneeded.$t).replace(/[, ]+/g, "").trim()) * this.multiplicateur,
          Number((item.gsx$amountneeded_2.$t).replace(/[, ]+/g, "").trim()) * this.multiplicateur,
      );
    },
    opt() {
      for (let i = 0; i < this.blueprints.length; i++) {
        this.options.push({
          value: i,
          text: this.blueprints[i].gsx$type.$t + " (T" + this.blueprints[i].gsx$tier.$t + ")" + " - - " + this.blueprints[i].gsx$name.$t
        })
      }
    },
    marketValueVerif(){
      if (Number(this.marketValue) > (this.selectedBlueprint(this.selected)._value * 10)) {
        this.marketValue = this.selectedBlueprint(this.selected)._value * 10
      }
      return this.marketValue
    }
  },
  created() {
    this.opt()
  },
  components: {
    ModelSelect
  }

}
</script>


<style lang="sass">


.ressources
  padding: 1rem
  .item-ressource
    display: flex
    flex-flow: row wrap
    justify-content: center
    img
      height: 30px
      vertical-align: middle
      padding: 0 10px

.img-input
  background: url(../assets/Misc/gold.png) no-repeat scroll
  background-size: 33px
  padding-left: 50px


</style>