import Blueprint from "@/items/blueprints.json";

export default {
    name: 'myMixin',
    data: function (){
        return{
            blueprints: Blueprint.feed.entry,
            blueprint: {},
            options: [],
            item: {value: '', text: ''},
        }
    },
    created: function () {
        this.includeBlueprintInSelector()
        this.selectedBlueprint(0)
    },
    methods: {
        selectedBlueprint: function (index) {
            const item = this.blueprints[index];
            return this.blueprint = {
                'name' : String(item.gsx$name.$t),
                'type': Number(item.gsx$type.$t),
                'tier': Number(item.gsx$tier.$t),
                'value': Number((item.gsx$value.$t).replace(/[, ]+/g, "").trim()),
                'craftingtime': Number(item.gsx$craftingtimeseconds.$t),
                'formatedcraftingtime': String(item.gsx$craftingtimeformatted.$t),
                'merchantxp': Number(item.gsx$merchantxp.$t),
                'workerxp': Number(item.gsx$workerxp.$t),
                'atk': Number(item.gsx$atk.$t),
                'def': Number(item.gsx$def.$t),
                'hp': Number(item.gsx$hp.$t),
                'crit': Number(item.gsx$crit.$t),
                'eva': Number(item.gsx$eva.$t),
                'iron' : Number((item.gsx$_d88ul.$t).replace(/[, ]+/g, "").trim()) ,
                'wood' : Number((item.gsx$_dkvya.$t).replace(/[, ]+/g, "").trim()),
                'leather' : Number((item.gsx$_dmair.$t).replace(/[, ]+/g, "").trim()),
                'herbs' : Number((item.gsx$_dnp34.$t).replace(/[, ]+/g, "").trim()),
                'steel' : Number((item.gsx$_dp3nl.$t).replace(/[, ]+/g, "").trim()),
                'ironwood' : Number((item.gsx$_df9om.$t).replace(/[, ]+/g, "").trim()),
                'fabric' : Number((item.gsx$_dgo93.$t).replace(/[, ]+/g, "").trim()),
                'oils' : Number((item.gsx$_di2tg.$t).replace(/[, ]+/g, "").trim()),
                'mana' : Number((item.gsx$_djhdx.$t).replace(/[, ]+/g, "").trim()),
                'gems' : Number((item.gsx$_dw4je.$t).replace(/[, ]+/g, "").trim()),
                'component1' : String(item.gsx$component.$t),
                'component2' : String(item.gsx$component_2.$t),
                'component1_amount' : Number((item.gsx$amountneeded.$t).replace(/[, ]+/g, "").trim()) ,
                'component2_amount' : Number((item.gsx$amountneeded_2.$t).replace(/[, ]+/g, "").trim()) ,
            };
        },
        includeBlueprintInSelector: function (){
            for (let i = 0; i < this.blueprints.length; i++) {
                this.options.push({
                    value: i,
                    text: this.blueprints[i].gsx$type.$t + " (T" + this.blueprints[i].gsx$tier.$t + ")" + " - - " + this.blueprints[i].gsx$name.$t
                })
            }
        },
    }
}