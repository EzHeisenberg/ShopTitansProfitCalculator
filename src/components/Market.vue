<template>
  <div>
    <section>
      <button class="btn btn-outline-dark paragra" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseHowto" aria-expanded="false" aria-controls="collapseHowto">
        How To
      </button>
      <div class="collapse" id="collapseHowto">
        <p class="title-paragraphe">How to : </p>
        <ul>
          <li class="paragraphe">Select the item you wish to sell on the marketplace.</li>
          <li class="paragraphe">Add the number of items for sale.</li>
          <li class="paragraphe">Put the sales value on your item.</li>
          <li class="paragraphe">Choose of sales period</li>
          <li class="paragraphe">See the results directly</li>
          <li class="paragraphe">Register your composition if you want</li>
          <li class="paragraphe">Have fun 🤪</li>
        </ul>
      </div>
    </section>


    <hr>


    <section>
      <form>
        <div class="p-2 row">
          <div class="col-md-6 p-2">
            <label for="selectItem" class="form-label">Select your item</label>
            <model-select id="selectItem" v-on:input="selectedBlueprint(selected)" :options="options" v-model="selected"
                          placeholder="Choisir un item"></model-select>
          </div>

          <div class="col-md-6 p-2">
            <label for="multiplicateur" class="form-label">Number of items</label>
            <input type="tel" minlength="1" min="1" v-model="multiplicateur" class="form-control" id="multiplicateur">
          </div>


          <div class="col-md-12 p-2">
            <label for="marketValue" class="form-label">Sell to : <sub>(Max in the market:
              {{ (blueprint.value * 10).toLocaleString() }})</sub></label>
            <input type="tel"
                   :maxlength="blueprint.value * 10"
                   minlength="1" min="1"
                   :placeholder="'Max value : ' + (blueprint.value * 10).toLocaleString()"
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
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"
                   value="0.14" v-model="picked">
            <label class="form-check-label" for="inlineRadio3">48h <sub>(-14%)</sub></label>
          </div>
        </div>
      </form>
    </section>


    <hr>

    <section>
      <p class="title-paragraphe">Base value</p>
      <div class="d-flex justify-content-center">
        <div class="p-2">
          <p><img width="50" height="50" :src="require('@/assets/Misc/gold.png')" alt="gold icon">
            {{ (blueprint.value * multiplicateur).toLocaleString() }}</p>
        </div>
        <div class="p-2">
          <p><img width="50" height="50" :src="require('@/assets/Misc/gold_increase.png')" alt="gold incrase icon">
            {{ ((blueprint.value * 2) * multiplicateur).toLocaleString() }}</p>
        </div>
      </div>
    </section>





    <hr>

    <section>
      <p class="title-paragraphe">Profit</p>
      <div class="item-ressource">
        <div>
          <b>{{ ((verifyValue() - (marketValue * picked)) * multiplicateur).toLocaleString() }}</b>
          <img :src="require('@/assets/Misc/gold.png')" alt="gold">
        </div>
      </div>
    </section>

    <hr>

    <section>
      <p class="title-paragraphe">Ressources</p>
      <div class="ressources">
        <div class="item-ressource">
          <div v-if="isNaN(blueprint.iron) === false">
            <img :src="require('@/assets/Resources/iron.png')" alt="">
            <b>{{ blueprint.iron }}</b>
          </div>
          <div v-if="isNaN(blueprint.wood) === false">
            <img :src="require('@/assets/Resources/wood.png')" alt="">
            <b>{{ blueprint.wood }}</b>
          </div>
          <div v-if="isNaN(blueprint.leather) === false">
            <img :src="require('@/assets/Resources/leather.png')" alt="">
            <b>{{ blueprint.leather }}</b>
          </div>
          <div v-if="isNaN(blueprint.herbs) === false">
            <img :src="require('@/assets/Resources/herbs.png')" alt="">
            <b>{{ blueprint.herbs }}</b>
          </div>
          <div v-if="isNaN(blueprint.steel) === false">
            <img :src="require('@/assets/Resources/steel.png')" alt="">
            <b>{{ blueprint.steel }}</b>
          </div>
          <div v-if="isNaN(blueprint.ironwood) === false">
            <img :src="require('@/assets/Resources/ironwood.png')" alt="">
            <b>{{ blueprint.ironwood }}</b>
          </div>
          <div v-if="isNaN(blueprint.fabric) === false">
            <img :src="require('@/assets/Resources/fabric.png')" alt="">
            <b>{{ blueprint.fabric }}</b>
          </div>
          <div v-if="isNaN(blueprint.oils) === false">
            <img :src="require('@/assets/Resources/oil.png')" alt="">
            <b>{{ blueprint.oils }}</b>
          </div>
          <div v-if="isNaN(blueprint.mana) === false">
            <img :src="require('@/assets/Resources/ether.png')" alt="">
            <b>{{ blueprint.mana }}</b>
          </div>
          <div v-if="isNaN(blueprint.gems) === false">
            <img :src="require('@/assets/Resources/jewel.png')" alt="">
            <b>{{ blueprint.gems }}</b>
          </div>
        </div>
      </div>
    </section>

    <hr>

    <section v-if="isNaN(blueprint.component1_amount) === false && isNaN(blueprint.component2_amount) === false">
      <p class="title-paragraphe">Components</p>
      <div class="components">
        <div class="item-ressource">
          <div v-if="isNaN(blueprint.component1_amount) === false">
            <img :src="require(`@/assets/Components/${blueprint.component1}.png`)" id="cpm1" alt="">
            <b>{{ blueprint.component1_amount }}</b>
          </div>
          <div v-if="isNaN(blueprint.component2_amount) === false">
            <img :src="require(`@/assets/Components/${blueprint.component2}.png`)" id="cpm2" alt="">
            <b>{{ blueprint.component2_amount }}</b>
          </div>
        </div>
      </div>
      <hr>
    </section>


    <section>
      <div class="composition">
        <div class="p-3">
          <button @click="saveComposition()" class="btn btn-dark w-100">Save this composition</button>
        </div>
        <div v-if="compositions.length > 0">
          <hr>
          <p class="title-paragraphe">My compositions</p>
          <div class="row justify-content-center" v-for="(composition, index) in compositions" :key="index">
            <div class="col-8 pb-2">
              <button class="btn btn-dark w-100" @click="useComposition(index)">
                {{ blueprints[composition.selected].gsx$name.$t + ' x ' + composition.multiplicateur }}
              </button>
            </div>
            <div class="col-auto">
              <button @click="clearComposition(index)" class="btn btn-outline-danger">
                <img :src="require('@/assets/trash.png')" class=" icon" alt="">
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {ModelSelect} from "vue-search-select";
import MixinBlueprint from "@/mixins/Blueprint";

export default {
  name: "Market",
  mixins: [MixinBlueprint],
  data: function () {
    return {
      multiplicateur: 1,
      selected: 0,
      picked: "0.10",
      marketValue: "",
      compositions: [],
    }
  },
  methods: {
    saveComposition: function() {
      if (this.compositions.length < 6) {
        this.compositions.push({
          "selected": this.selected,
          "multiplicateur": this.multiplicateur,
          "marketValue": this.marketValue,
          "picked": this.picked
        }); // push a new student inside of it
        localStorage.compositions = JSON.stringify(this.compositions);
      } else {
        alert("Impossible to add a new composition, you can't get more than 6 compositions.")
      }
    },
    clearComposition: function(index) {
      this.compositions.splice(index, 1);
      localStorage.compositions = JSON.stringify(this.compositions)
    },
    useComposition: function(index) {
      const compo = this.compositions[index];
      this.selected = compo.selected;
      this.multiplicateur = compo.multiplicateur;
      this.marketValue = compo.marketValue;
      this.picked = compo.picked
    },
    verifyValue: function () {
      let max = this.blueprint.value * 10;
      if (Number(this.marketValue) > (max)) {
        this.marketValue = max
      }
      return this.marketValue
    },
  },
  mounted() {
    if (localStorage.compositions) this.compositions = JSON.parse(localStorage.compositions)
  },
  components: {
    ModelSelect
  }
}
</script>

<style lang="sass">
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

.btn
  .icon
    padding: 0
    width: 20px
    height: 20px

</style>