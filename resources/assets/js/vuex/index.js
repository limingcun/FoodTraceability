// Vuex
import Vuex from 'vuex';

import global from './global/global'

const store = new Vuex.Store({
    modules: {
        global
    }
    
});

export default store;