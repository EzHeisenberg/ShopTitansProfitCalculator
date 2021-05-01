export default class BlueprintClass {
    _name = "";
    _type = "";
    _tier = 0;
    _value = 0;
    _craftingtimeseconds = 0;
    _craftingtimeformatted = "0:00:00";
    _merchantxp = 0;
    _workerxp = 0;
    _atk = 0;
    _def = 0;
    _hp = 0;
    _iron = 0;
    _wood = 0;
    _leather = 0;
    _herbs = 0;
    _steel = 0;
    _ironwood = 0;
    _fabric = 0;
    _oils = 0;
    _mana = 0;
    _gems = 0;
    _crit = 0;
    _eva = 0;
    _component1 = "";
    _component2 = "";
    _component1_amount = 0;
    _component2_amount = 0;

    constructor(name, type, tier, value, craftingtimeseconds, craftingtimeformatted, merchantxp, workerxp, atk, def, hp, crit, eva, iron, wood, leather, herbs, steel, ironwood, fabric, oils, mana, gems, _component1, _component2, _component1_amount, _component2_amount) {
        this._name = name;
        this._type = type;
        this._tier = tier;
        this._value = value;
        this._craftingtimeseconds = craftingtimeseconds;
        this._craftingtimeformatted = craftingtimeformatted;
        this._merchantxp = merchantxp;
        this._workerxp = workerxp;
        this._atk = atk;
        this._def = def;
        this._hp = hp;
        this._crit = crit;
        this._eva = eva;
        this._iron = iron;
        this._wood = wood;
        this._leather = leather;
        this._herbs = herbs;
        this._steel = steel;
        this._ironwood = ironwood;
        this._fabric = fabric;
        this._oils = oils;
        this._mana = mana;
        this._gems = gems;
        this._component1 = _component1;
        this._component2 = _component2;
        this._component1_amount = _component1_amount;
        this._component2_amount = _component2_amount;
    }


    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }

    get tier() {
        return this._tier;
    }

    get value() {
        return this._value;
    }

    get craftingtimeseconds() {
        return this._craftingtimeseconds;
    }

    get craftingtimeformatted() {
        return this._craftingtimeformatted;
    }

    get merchantxp() {
        return this._merchantxp;
    }

    get workerxp() {
        return this._workerxp;
    }

    get atk() {
        return this._atk;
    }

    get def() {
        return this._def;
    }

    get hp() {
        return this._hp;
    }

    get crit() {
        return this._crit;
    }

    get eva() {
        return this._eva;
    }

    get iron() {
        return this._iron;
    }

    get wood() {
        return this._wood;
    }

    get leather() {
        return this._leather;
    }

    get herbs() {
        return this._herbs;
    }

    get steel() {
        return this._steel;
    }

    get ironwood() {
        return this._ironwood;
    }

    get fabric() {
        return this._fabric;
    }

    get oils() {
        return this._oils;
    }

    get mana() {
        return this._mana;
    }

    get gems() {
        return this._gems;
    }

    get component1() {
        return this._component1;
    }

    get component2() {
        return this._component2;
    }
}