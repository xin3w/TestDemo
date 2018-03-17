import Vue from 'vue'
import Vuex from 'vuex'

import m1 from "./modules/modules1.js";
import m2 from "./modules/modules2.js";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        m1,
        m2
    }
})